const {Model} = require('objection');
const Usser_Profile = require('./user_profile');

class Tenant_Profile extends Model{
  static get tableName(){
    return 'tenant_profile'
  }
  
    static relationMappings = {
      Tenant_Profile: {
        relation: Model.HasManyRelation,
        modelClass: Tenant_Profile,
        join: {
          from: 'tenant_profile.user_id',
          to: 'user_profile.user_id'
        }
      }
    };
  }


module.exports = Tenant_Profile