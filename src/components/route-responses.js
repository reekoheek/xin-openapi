import { define, Component } from '@xinix/xin';

import html from './route-responses.html';

import './route-responses.scss';
import './route-response';

System.import('./accordion-menu');
System.import('xin-ui/ui-selectfield');
System.import('@xinix/xin/components/for');

class RouteResponses extends Component {
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
        observer: 'contentTypeObserved',
      },
      error: {
        type: Object,
      },
    }, super.props);
  }

  routeObserved (route) {
    this.classList.remove('visible');

    this.set('error', null);

    if (!route || !route.responses) {
      return;
    }

    this.classList.add('visible');

    let { responses } = route;

    let contentTypeOptions = [];
    let result = [];
    for (let code in responses) {
      let response = Object.assign({ code }, responses[code]);

      for (let type in response.content) {
        if (!contentTypeOptions.find(opt => opt.value === type)) {
          contentTypeOptions.push({ label: type, value: type });
        }
      }

      if (code === 'default') {
        result.unshift(response);
      } else {
        result.push(response);
      }
    }

    this.set('responses', result);
    this.set('contentTypeOptions', contentTypeOptions);
  }

  contentTypeObserved (type) {
    // FIXME workaround non-items data changed
    this.querySelectorAll('route-response').forEach(el => el.set('contentType', type));
  }

  getContentType () {
    if (!this.contentType) {
      let err = new Error('Content Type must be set');
      this.set('error', err);
      throw err;
    }

    this.set('error', null);
    return this.contentType;
  }
}

define('route-responses', RouteResponses);
