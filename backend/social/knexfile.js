// Update with your config settings.
const KnexSnackCaseMappers = require('objection');
module.exports = {


  development: {
    client: 'mysql',
    connection: {
      database: 'social',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    } ,
    seeds:{
      directory:'./seeds'
    } ,
    ...KnexSnackCaseMappers
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
