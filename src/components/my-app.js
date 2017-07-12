import { define } from '@xinix/xin';
import { App } from '@xinix/xin/components';
import yaml from 'js-yaml';
import { Spec } from '../models/spec';

import html from './my-app.html';

import '@xinix/xin/middlewares';
System.import('./my-drawer');

export class MyApp extends App {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({}, super.props, {
      specUrl: {
        type: String,
        value: 'http://localhost:8080/assets/examples/v3.0/mock.yaml',
        // value: 'http://localhost:8080/assets/examples/v3.0/petstore.yaml',
        // value: 'http://localhost:8080/assets/examples/v3.0/petstore-expanded.yaml',
        // value: 'http://localhost:8080/assets/examples/v3.0/uber.yaml',
        // value: 'https://temando.github.io/open-api-renderer/petstore-open-api-v3.0.0-RC2.json',
        // value: 'https://koumoul.com/s/geocoder/api/v1/api-docs.json',
        observer: 'specUrlObserved(specUrl)',
      },

      spec: {
        type: Object,
      },
    });
  }

  created () {
    super.created();

    let url = new window.URL(window.location);
    let specUrl = url.searchParams.get('spec');
    if (specUrl) {
      this.set('specUrl', specUrl);
    }
  }

  async specUrlObserved (specUrl) {
    let response = await window.fetch(specUrl);
    let contentType = response.headers.get('Content-Type');

    let spec;
    if (contentType.startsWith('text/yaml')) {
      let text = await response.text();
      spec = new Spec(yaml.safeLoad(text));
    } else {
      spec = new Spec(await response.json());
    }

    spec.selectedServer = spec.servers[0].url;
    console.log('spec', spec);
    this.set('spec', spec);
  }
}
define('my-app', MyApp);
