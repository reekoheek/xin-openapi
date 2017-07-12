import { define, Component } from '@xinix/xin';
import html from './route-requestor.html';
import { Validator } from 'jsonschema';
import { Schema } from '../models/schema';

import './route-requestor.scss';

const validator = new Validator();

class RouteRequestor extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({
      route: {
        type: Object,
        observer: 'routeObserved',
      },
      status: {
        type: Boolean,
        observer: 'observeStatus',
      },
    }, super.props);
  }

  observeStatus (status) {
    if (status) {
      this.classList.add('visible');
    } else {
      this.classList.remove('visible');
    }
  }

  reset () {
    this.set('status', false);
    this.set('curl', '');
    this.set('response', null);
  }

  renderPath (uri, data = {}) {
    for (let key in data) {
      uri = uri.replace(`{${key}}`, window.encodeURIComponent(data[key] || ''));
    }
    return uri;
  }

  async request (options) {
    this.set('status', true);

    let { parameters = {}, accept, body } = options;
    let { selectedServer } = this.route.spec;
    let { method, uri } = this.route;
    let contentType = body ? body.contentType : accept;

    let url = new window.URL(`${selectedServer}${this.renderPath(uri, parameters.path)}`);
    let curl = `curl -X ${method.toUpperCase()} ${url.toString()}`;

    if (parameters.query) {
      for (let i in parameters.query) {
        url.searchParams.append(i, parameters.query[i]);
      }
    }

    let headers = new window.Headers();

    if (parameters.header) {
      for (let i in parameters.header) {
        headers.append(i, parameters.header[i]);
        curl = `${curl} -H '${i}: ${parameters.header[i]}'`;
      }
    }

    if (contentType) {
      headers.append('Content-Type', contentType);
      curl = `${curl} -H 'Content-Type: ${contentType}'`;
    }

    if (accept) {
      headers.append('Accept', accept);
      curl = `${curl} -H 'Accept: ${accept}'`;
    }

    // console.log(`request: ${method} ${uri}`);
    // console.log('options', options);
    // console.log('curl', curl);

    this.set('url', url.toString());
    this.set('curl', curl);

    let initOpts = {
      method,
      headers,
    };

    if (body) {
      initOpts.body = body.payload;
    }
    let response = await window.fetch(url.toString(), initOpts);

    // console.log('response', response);

    let hds = {};
    for (let [ key, value ] of response.headers.entries()) {
      if (hds[key]) {
        let values = hds[key];
        if (!Array.isArray(values)) {
          values = [ values ];
        }
        values.push(value);
        hds[key] = values;
      } else {
        hds[key] = value;
      }
    }

    let responseText = await response.text();
    if (accept.startsWith('application/json')) {
      try {
        body = JSON.stringify(JSON.parse(responseText), null, 2);
      } catch (err) {
        body = `Error while parsing, original response text: ${responseText}`;
      }
    } else {
      body = responseText;
    }

    this.set('response', {
      status: response.status,
      headers: hds,
      body: body,
    });
  }

  routeObserved (route) {
    this.reset();
  }
}

define('route-requestor', RouteRequestor);
