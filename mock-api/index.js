const Koa = require('koa');

const app = new Koa();

app.listen(3000, () => {
  console.warn(`Mock api listening at http://localhost:3000`);
});
