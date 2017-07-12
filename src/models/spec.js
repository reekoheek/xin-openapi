import { Route } from './route';
import { Schema } from './schema';

export class Spec {
  constructor (data) {
    Object.assign(this, data);
  }

  get routes () {
    if (this._routes) {
      return this._routes;
    }

    let resultRoutes = [];

    for (let uri in this.paths) {
      let routes = this.paths[uri];
      for (let method in routes) {
        let route = new Route(this, uri, method, routes[method]);
        resultRoutes.push(route);
      }
    }
    this._routes = resultRoutes;

    return resultRoutes;
  }

  get resolvedTags () {
    if (this._tags) {
      return this._tags;
    }

    let tags = {};
    this.routes.forEach(route => {
      (route.tags || ['anonymous']).forEach(name => {
        let tag = tags[name];
        if (!tag) {
          tag = tags[name] = [];
        }
        tag.push(route);
      });
    });
    this._tags = tags;
    return tags;
  }

  getRouteById (id) {
    return this.routes.find(route => route.id + '' === id + '');
  }

  resolveSchema (schema) {
    return new Schema(this, schema);
  }
}
