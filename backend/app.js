const Koa = require('koa');
const cors = require('@koa/cors');
const Logger = require('koa-logger');
const serve = require("koa-static");
const ApiHello = require('./api/hello');
const ApiPostgres = require('./api/postgres');
const path = require('path')

const app = new Koa();
app.use(cors());
app.use(Logger());

/*
 * In production mode we will also serve the react
 */
if (process.env.NODE_ENV === 'production') {
    console.log(`Production mode detected: Serving React`);

    const buildDir = path.join(__dirname, '../frontend/build')
    app.use(serve(buildDir));
    
    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(buildDir, 'index.html'))
    // })
}


// Add routes and response to the OPTIONS requests
app.use(ApiHello.routes());
app.use(ApiPostgres.routes());

// Listen the port
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});