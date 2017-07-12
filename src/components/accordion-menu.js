import { define, Component } from '@xinix/xin';

import html from './accordion-menu.html';

import './accordion-menu.scss';

System.import('@xinix/xin/components/for');

class AccordionMenu extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({
      menus: {
        type: Array,
        value: [],
      },
    }, super.props);
  }
}

define('accordion-menu', AccordionMenu);
