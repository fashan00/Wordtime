const pgpOptions = {}

const pgp = require('pg-promise')(pgpOptions)
const monitor = require('pg-monitor')

monitor.attach(pgpOptions)

var connectionString = process.env.DATABASE_URL

if(!connectionString){
    connectionString = `postgres://knaoglylddnsjq:5470b3d6357c03d1c1fcf8af6d3914543beb360c8a179c2f794dfa5a2b46d3ab@ec2-23-21-177-102.compute-1.amazonaws.com:5432/df0qaq6p88urtq`;
    pgp.pg.defaults.ssl = true;
}
console.log(connectionString)

const db = pgp(connectionString)

module.exports = { db, connectionString }
