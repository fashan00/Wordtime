const Koa = require('koa');
const cors = require('@koa/cors');
const Logger = require('koa-logger');
const ApiHello = require('./api/hello');
const ApiPostgres = require('./api/postgres');

const app = new Koa();


/*
 * In production mode we will also serve the react
 */
if (process.env.NODE_ENV === 'production') {
    console.log(`Production mode detected: Serving React`)
    const path = require('path')
  
    const buildDir = path.join(__dirname, '../frontend/build')
  
    const static_pages = new Koa();
    static_pages.use(serve(buildDir));
    app.use(mount("/", static_pages));
  
    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(buildDir, 'index.html'))
    // })
}

app.use(cors());
app.use(Logger());

// Add routes and response to the OPTIONS requests
app.use(ApiHello.routes());
app.use(ApiPostgres.routes());

// Listen the port
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});