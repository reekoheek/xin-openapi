const Bundle = require('bono');
const http = require('http');

const server = http.createServer(getAppBundle().callback());
server.listen(3000, () => {
  console.warn(`Mock api listening at http://localhost:3000`);
});

function getAppBundle () {
  const app = new Bundle();

  app.use(async (ctx, next) => {
    await next();
    console.warn(ctx.method, ctx.originalUrl, ctx.status);
  });
  app.use(require('bono/middlewares/json')());
  app.use(require('kcors')({
    exposeHeaders: 'pong',
  }));

  app.bundle('/api', getApiBundle());

  return app;
}

function getApiBundle () {
  const bundle = new Bundle();

  bundle.get('/now', () => {
    return {
      time: new Date(),
    };
  });

  bundle.get('/greet/{name}', ctx => {
    let { name } = ctx.parameters;
    let { nonce } = ctx.query;
    nonce = nonce || undefined;

    if (ctx.headers.ping) {
      ctx.set('pong', ctx.headers.ping);
    }

    return {
      greeting: `Hello, ${name}!`,
      nonce,
    };
  });

  bundle.post('/fullname', async ctx => {
    let { first, last } = await ctx.parse();
    let full = `${first} ${last}`.trim();
    return {
      first,
      last,
      full,
    };
  });

  return bundle;
}
