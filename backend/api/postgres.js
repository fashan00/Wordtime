const { db } = require('../database');
const Router = require('koa-router');
const router = new Router();

router.get('/api/postgres', async (ctx) => {
  
  try
  {
    const res = await db.query('select * from hello');

    ctx.body = `${ctx.URL} fetched ${JSON.stringify(res.rows)} from the database`;
  }
  catch(ex){
    console.log(ex);
  }
  
})

module.exports = router
