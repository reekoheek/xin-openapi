import { define } from '@xinix/xin';
import { UIDrawer } from 'xin-ui/ui-drawer';

import html from './my-drawer.html';

import './my-drawer.scss';

System.import('./accordion-menu');

class MyDrawer extends UIDrawer {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({
      spec: {
        type: Object,
        observer: 'specObserved(spec)',
      },
    }, super.props);
  }

  specObserved (spec) {
    if (!spec) {
      return;
    }

    let menus = Object.keys(spec.resolvedTags).map(name => {
      let title = name;
      let tag = spec.resolvedTags[name];
      let links = tag.map(o => ({
        title: `<span class="route--method route--method-${o.method}">${o.method}</span> ${o.uri}`,
        url: `#!/route/${o.id}`,
      }));

      return { title, links };
    });
    this.set('menus', menus);
  }
}

define('my-drawer', MyDrawer);
