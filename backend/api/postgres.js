const Router = require('koa-router');
const { Pool } = require('pg');

const router = new Router();

// const { db } = require('../lib/database')
var config = {};
if (process.env.NODE_ENV === 'production') {
  const config =  {
  host: 'ec2-23-21-177-102.compute-1.amazonaws.com',
  database: 'df0qaq6p88urtq',
  user: 'knaoglylddnsjq',
  password: '5470b3d6357c03d1c1fcf8af6d3914543beb360c8a179c2f794dfa5a2b46d3ab',
  port: 5432,
  ssl: true
  }
}

const pool = new Pool(config);

// var connectionString = process.env.DATABASE_URL

router.get('/api/postgres', async (ctx) => {
  
  try
  {
    const res = await pool.query('select * from hello');
    // await pool.end();

    ctx.body = `${ctx.URL} fetched ${JSON.stringify(res.rows)} from the database`;
  }
  catch{

  }
  
})

module.exports = router
