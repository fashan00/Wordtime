const Router = require('koa-router');
const router = new Router();

// Response to the World to the GET requests
router.get('/api/hello', async (ctx) => {
    ctx.body = 'Hello World';
  });

// Response by name to the GET requests, :name is URL fragment/argument
router.get('/api/hello/:name', async (ctx) => {
  ctx.body = `Hello, ${ctx.params.name}!\n`;
});

module.exports = router;