const knex = require('knex');
const knexfile = require('../knexfile');
const {Model} = require('objection') 

function setupdb(){
  const db = knex(knexfile.development);
  Model.knex(db)
}

module.exports = setupdb;