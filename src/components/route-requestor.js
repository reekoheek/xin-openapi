import { define, Component } from '@xinix/xin';

import html from './route-requestor.html';

import './route-requestor.scss';

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
    }, super.props);
  }

  async request (options) {
    let { parameters, accept, body } = options;
    let { selectedServer } = this.route.spec;
    let { method, uri } = this.route;
    let contentType = body ? body.contentType : accept;

    let url = `${selectedServer}${uri}`;
    let headers = new window.Headers();
    if (contentType) {
      headers.append('Content-Type', contentType);
    }
    if (accept) {
      headers.append('Accept', accept);
    }
    let initOpts = {
      method,
      headers,
    };

    console.log(`request: ${method} ${uri}`);
    console.log(options);
    console.log(url);

    let response = await window.fetch(url, initOpts);

    // console.log('response', response);
  }

  routeObserved (route) {
    // this.classList.remove('visible');

    // this.set('contentTypeError', null);
    // this.set('bodyError', null);

    // if (!route || !route.requestBody) {
    //   return;
    // }

    // let { requestBody } = route;

    // this.classList.add('visible');

    // let contentTypeOptions = [];
    // for (let type in requestBody.content) {
    //   contentTypeOptions.push({ label: type, value: type });
    // }

    // this.set('contentTypeOptions', contentTypeOptions);
  }
}

define('route-requestor', RouteRequestor);
