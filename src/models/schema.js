export class Schema {
  constructor (spec, data) {
    this.spec = spec;
    this.data = data;
  }

  toString () {
    let json = this.toJSON();

    return JSON.stringify(json, null, 2);
  }

  toJSON () {
    let json;
    if (this.data.$ref) {
      let { $ref } = this.data;
      json = Object.assign({ $ref }, this.resolveRef($ref));
    } else {
      json = Object.assign({}, this.data);
    }

    for (let key in json) {
      if (typeof json[key] !== 'object') {
        continue;
      }

      if (Array.isArray(json[key])) {
        json[key] = json[key].map(obj => {
          if (typeof obj !== 'object') {
            return obj;
          }
          let subSchema = new Schema(this.spec, obj);
          return subSchema.toJSON();
        });
        continue;
      }

      let subSchema = new Schema(this.spec, json[key]);
      json[key] = subSchema.toJSON();
    }

    return json;
  }

  resolveRef (ref) {
    let segments = ref.split('/').slice(1);
    let refObject = segments.reduce((result, segment) => {
      if (result && result[segment]) {
        return result[segment];
      }
    }, this.spec);
    return refObject;
  }

  getDefaultValue (optional) {
    return this._getDefaultValue(this.toJSON(), optional);
  }

  _getDefaultValue (schema, optional) {
    if (schema.default) {
      return schema.default;
    }

    if (!optional && !schema.required) {
      return;
    }

    switch (schema.type || 'object') {
      case 'number':
        if (schema.format === 'double') {
          return (Math.random() * 100) + Math.random();
        }
        return Math.floor(Math.random() * 100);
      case 'integer':
        return Math.floor(Math.random() * 100);
      case 'string':
        return 'foobar';
      case 'array': {
        let result = [];
        let length = Math.random() * 5;
        for (let i = 0; i < length; i++) {
          let o = this._getDefaultValue(schema.items, optional);
          if (o) {
            result.push(o);
          }
        }
        return result;
      }
      case 'object': {
        let { properties } = schema;
        let result = {};
        for (let key in properties) {
          result[key] = this._getDefaultValue(properties[key], optional);
        }
        return result;
      }
      default:
        console.warn('schema', schema);
        throw new Error(`Unimplemented default value generator for ${schema.type}`);
    }
  }
}
