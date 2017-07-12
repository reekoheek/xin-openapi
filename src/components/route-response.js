import { define, Component } from '@xinix/xin';

import html from './route-response.html';

import './route-response.scss';

System.import('./accordion-menu');
System.import('xin-ui/ui-selectfield');
System.import('@xinix/xin/components/for');
System.import('./schema-viewer');
System.import('./value-viewer');

class RouteResponse extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({
      route: {
        type: Object,
      },
      response: {
        type: Object,
        observer: 'responseObserved',
      },
      contentType: {
        type: String,
        value: '',
        observer: 'contentTypeObserved',
      },
    }, super.props);
  }

  responseObserved (response) {
    this.classList.remove('visible');

    if (!response) {
      return;
    }

    let contentTypeOptions = [];
    for (let type in response.content) {
      contentTypeOptions.push({ label: type, value: type });
    }
    this.set('contentTypeOptions', contentTypeOptions);

    this.contentTypeObserved(this.contentType);

    this.classList.add('visible');
  }

  contentTypeObserved (type) {
    if (!type || !this.response) {
      this.set('schema', null);
      return;
    }

    let content = this.response.content[type];
    let schema = this.route.resolveSchema(content.schema);

    this.set('schema', schema);
  }
}

define('route-response', RouteResponse);
