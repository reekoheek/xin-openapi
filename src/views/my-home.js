import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-home.html';
import './my-home.scss';

System.import('@xinix/xin/components/for');
System.import('xin-ui/ui-selectfield');

export class MyHome extends View {
  get props () {
    return Object.assign({}, super.props, {
      spec: {
        type: Object,
        observer: 'observeSpec',
      },
    });
  }

  get template () {
    return html;
  }

  observeSpec (spec) {
    this.set('serverOptions', (spec.servers || []).map(server => {
      return { label: server.url, value: server.url };
    }));
  }
}
define('my-home', MyHome);
