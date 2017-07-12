import { define, Component } from '@xinix/xin';

import html from './route-body.html';

import './route-body.scss';

System.import('./accordion-menu');
System.import('xin-ui/ui-selectfield');
System.import('@xinix/xin/components/for');

class RouteBody extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({
      route: {
        type: Object,
        observer: 'routeObserved',
      },
      contentType: {
        type: String,
        value: '',
        observer: 'contentTypeObserved',
      },
      contentTypeError: {
        type: Object,
      },
      bodyError: {
        type: Object,
      },
    }, super.props);
  }

  routeObserved (route) {
    this.classList.remove('visible');

    this.set('contentTypeError', null);
    this.set('bodyError', null);

    if (!route || !route.requestBody) {
      return;
    }

    let { requestBody } = route;

    this.classList.add('visible');

    let contentTypeOptions = [];
    for (let type in requestBody.content) {
      contentTypeOptions.push({ label: type, value: type });
    }

    this.set('contentTypeOptions', contentTypeOptions);
  }

  contentTypeObserved (type) {
    if (!type) {
      this.set('schema', null);
      return;
    }
    let content = this.route.requestBody.content[type];
    let schema = this.route.resolveSchema(content.schema);
    this.set('schema', schema);
  }

  getValue () {
    this.set('contentTypeError', null);
    this.set('bodyError', null);

    if (!this.route || !this.route.requestBody) {
      return;
    }

    if (this.route.requestBody.required) {
      if (!this.contentType) {
        let err = new Error('Content type is required');
        this.set('contentTypeError', err);
      }

      if (!this.body) {
        let err = new Error('Body is required');
        this.set('bodyError', err);
      }

      let err = this.contentTypeError || this.bodyError;
      if (err) {
        throw err;
      }
    } else {
      if (!this.body) {
        return;
      }
    }

    let { body: payload, contentType } = this;
    return { payload, contentType };
  }
}

define('route-body', RouteBody);
