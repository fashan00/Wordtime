// const { db } = require('../lib/database')
// var config = {};
// if (process.env.NODE_ENV === 'production') {
//   const config =  {
//   host: 'ec2-23-21-177-102.compute-1.amazonaws.com',
//   database: 'df0qaq6p88urtq',
//   user: 'knaoglylddnsjq',
//   password: '5470b3d6357c03d1c1fcf8af6d3914543beb360c8a179c2f794dfa5a2b46d3ab',
//   port: 5432,
//   ssl: true
//   }
// }

// const pool = new Pool(config);

// var connectionString = process.env.DATABASE_URL

// let pg = require('pg');
const { Pool } = require('pg');

// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = true;
// }


// include an OR statement if you switch between a local dev db and 
// a remote heroku environment
let connectionString = process.env.DATABASE_URL || `postgres://knaoglylddnsjq:5470b3d6357c03d1c1fcf8af6d3914543beb360c8a179c2f794dfa5a2b46d3ab@ec2-23-21-177-102.compute-1.amazonaws.com:5432/df0qaq6p88urtq`;

const pool = new Pool({
  connectionString : connectionString,
  ssl: true
});

const Router = require('koa-router');
const router = new Router();

router.get('/api/postgres', async (ctx) => {
  
  try
  {
    const res = await pool.query('select * from hello');
    // await pool.end();

    ctx.body = `${ctx.URL} fetched ${JSON.stringify(res.rows)} from the database`;
  }
  catch(ex){
    console.log(ex);
  }
  
})

module.exports = router
