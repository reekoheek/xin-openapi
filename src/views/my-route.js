import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-route.html';
import './my-route.scss';

System.import('@xinix/xin/components/for');
System.import('../components/route-body');
System.import('../components/route-responses');
System.import('../components/route-parameters');
System.import('../components/route-requestor');

export class MyRoute extends View {
  get props () {
    return Object.assign({}, super.props, {
      spec: {
        type: Object,
      },

      route: {
        type: Object,
      },
    });
  }

  get template () {
    return html;
  }

  focusing ({ id } = {}) {
    super.focusing({ id });

    if (this.$.requestor.reset) {
      this.$.requestor.reset();
    }

    let route = this.spec.getRouteById(id);
    this.set('route', route);

    // console.warn('route', route);

    this.$$('.scroll-x').scrollTop = 0;
  }

  computeMethodClasses (method) {
    return `route--method route--method-${method}`;
  }

  try () {
    // this.$.requestor.request({
    //   parameters: {},
    //   accept: 'application/json',
    // });

    let lastError;
    let parameters;
    try { parameters = this.$.inputParameters.getValue(); } catch (err) { lastError = err; }

    let body;
    try { body = this.$.inputBody.getValue(); } catch (err) { lastError = err; }

    let accept;
    try { accept = this.$.inputResponses.getContentType(); } catch (err) { lastError = err; }

    if (lastError) {
      throw lastError;
    }

    this.$.requestor.request({ parameters, body, accept });
  }
}
define('my-route', MyRoute);
