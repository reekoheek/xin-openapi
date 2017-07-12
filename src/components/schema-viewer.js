import { define, Component } from '@xinix/xin';
import Prism from 'prismjs';

import html from './schema-viewer.html';

class SchemaViewer extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({
      schema: {
        type: Object,
        value: () => null,
      },
    }, super.props);
  }

  format (schema) {
    if (!schema) {
      return;
    }
    let value = JSON.stringify(schema, null, 2);
    return Prism.highlight(value, Prism.languages.javascript);
  }
}
define('schema-viewer', SchemaViewer);
