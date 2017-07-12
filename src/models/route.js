import commonmark from 'commonmark';

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();

let ID = 1;
export class Route {
  constructor (spec, uri, method, data) {
    Object.assign(this, {
      spec,
      uri,
      method,
      id: ID++,
    }, data);
  }

  resolveSchema (schema) {
    return this.spec.resolveSchema(schema);
  }

  get renderedDescription () {
    if (!this.description) {
      return;
    }

    const parsed = reader.parse(this.description);
    return writer.render(parsed);
  }
}
