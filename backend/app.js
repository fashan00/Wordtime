const Koa = require('koa');
const cors = require('@koa/cors');
const Logger = require('koa-logger');
const hello = require('./api/hello');
const postgres = require('./api/postgres');

const app = new Koa();
app.use(cors());

// Development logging
app.use(Logger());
// Add routes and response to the OPTIONS requests
app.use(hello.routes());
app.use(postgres.routes());

// Listen the port
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});