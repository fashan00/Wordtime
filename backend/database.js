const { Pool } = require('pg');

// include an OR statement if you switch between a local dev db and 
// a remote heroku environment
let connectionString = process.env.DATABASE_URL || `postgres://knaoglylddnsjq:5470b3d6357c03d1c1fcf8af6d3914543beb360c8a179c2f794dfa5a2b46d3ab@ec2-23-21-177-102.compute-1.amazonaws.com:5432/df0qaq6p88urtq`;

const db = new Pool({
  connectionString : connectionString,
  ssl: true
});

module.exports = { db, connectionString }