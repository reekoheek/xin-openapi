import { define, Component } from '@xinix/xin';
import { Parameter } from '../models/parameter';

import html from './route-parameters.html';

import './route-parameters.scss';
import './route-parameter';

System.import('./accordion-menu');
System.import('xin-ui/ui-selectfield');
System.import('@xinix/xin/components/for');

class RouteParameters extends Component {
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
      },
    }, super.props);
  }

  routeObserved (route) {
    this.classList.remove('visible');

    if (!route || !route.parameters) {
      return;
    }

    this.classList.add('visible');

    let resultParameters = [];
    let { parameters } = route;
    for (let code in parameters) {
      let parameter = new Parameter(code, parameters[code]);
      resultParameters[code === 'default' ? 'unshift' : 'push'](parameter);
    }
    this.set('parameters', resultParameters);
  }

  getValue () {
    let lastError;
    let result = Array.prototype.reduce.call(this.querySelectorAll('route-parameter'), (result, el) => {
      try {
        let { parameter } = el;
        let value = el.getValue();

        let group = (parameter.in || 'query').toLowerCase();
        result[group] = result[group] || {};
        result[group][parameter.name] = value;
      } catch (err) {
        lastError = err;
      }
      return result;
    }, {});

    if (lastError) {
      throw lastError;
    }

    return result;
  }
}

define('route-parameters', RouteParameters);
