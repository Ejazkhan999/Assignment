// Update with your config settings.
const KnexSnackCaseMappers = require('objection');
module.exports = {


  development: { 
    client: 'mysql',
    connection: {
      database: PROCESS.ENV.SOCIAL_DB,
      user:     PROCESS.ENV.POSTGRES_USERNAME,
      password:PROCESS.ENV.qwer1234
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


};
