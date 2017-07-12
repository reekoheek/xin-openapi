import { define, Component } from '@xinix/xin';

import html from './route-parameter.html';

import './route-parameter.scss';

System.import('./accordion-menu');
System.import('xin-ui/ui-selectfield');
System.import('@xinix/xin/components/for');
System.import('./value-viewer');
System.import('./schema-viewer');

class RouteParameter extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({
      route: {
        type: Object,
      },
      parameter: {
        type: Object,
        observer: 'parameterObserved',
      },
      value: {
        type: Object,
      },
      error: {
        type: Object,
      },
    }, super.props);
  }

  parameterObserved (parameter) {
    this.classList.remove('visible');

    this.set('error', null);
    if (!parameter) {
      return;
    }

    this.set('schema', this.route.resolveSchema(parameter.schema));

    this.classList.add('visible');
  }

  getValue () {
    this.set('error', null);
    try {
      return this.parameter.validate(this.value);
    } catch (err) {
      this.set('error', err);
      throw err;
    }
  }
}

define('route-parameter', RouteParameter);
