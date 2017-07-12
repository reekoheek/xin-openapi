import { define, Component } from '@xinix/xin';
import Prism from 'prismjs';

import html from './value-viewer.html';

import './value-viewer.scss';

class ValueViewer extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({
      schema: {
        type: Object,
        value: () => null,
        observer: 'schemaObserved',
      },
      autoGenerate: {
        type: Boolean,
      },
      readonly: {
        type: Boolean,
      },
      value: {
        type: String,
        value: '',
        notify: true,
      },
    }, super.props);
  }

  // formatValue (schema) {
  //   if (!schema) {
  //     return;
  //   }
  //   return Prism.highlight(this.generateValue(schema), Prism.languages.javascript);
  // }

  generate (schema) {
    if (!this.schema) {
      return '';
    }

    let generated = this.schema.getDefaultValue(true);
    if (typeof generated === 'string' || typeof generated === 'number') {
      return generated;
    }

    return JSON.stringify(generated, null, 2);
  }

  doGenerate (evt) {
    evt.preventDefault();
    this.set('value', this.generate(this.schema));
  }

  doClear (evt) {
    evt.preventDefault();
    this.set('value', '');
  }

  schemaObserved (schema) {
    if (this.autoGenerate) {
      this.set('value', this.generate(schema));
    } else {
      this.set('value', '');
    }
  }
}
define('value-viewer', ValueViewer);
