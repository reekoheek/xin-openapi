import { Validator } from 'jsonschema';

const validator = new Validator();

export class Parameter {
  constructor (code, data) {
    Object.assign(this, { code }, data);
  }

  validate (value) {
    this.error = null;
    try {
      let { schema } = this;

      if (this.required && !value) {
        throw new Error('Parameter is required');
      }

      let values = [ value ];
      try {
        if (value === '') {
          values.push(undefined);
        } else {
          values.push(JSON.parse(value));
        }
      } catch (err) {
      }

      let lastError;
      value = values.find(value => {
        let result = validator.validate(value, schema);
        lastError = result.valid ? null : result.errors[0];
        return result.valid;
      });

      if (lastError) {
        throw new Error(lastError.stack);
      }

      return value;
    } catch (err) {
      this.error = err;
      throw err;
    }
  }
}
