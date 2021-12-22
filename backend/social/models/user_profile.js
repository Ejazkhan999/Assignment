const {Model} = require('objection');
const { Tenant_Profile } = require('../models/tenant_profile');
class User_Profile extends Model{
  static get tableName(){
    return 'user_pofile'
  }
  static relationMappings = {
    Tenant_Profile: {
      relation: Model.BelongsToOneRelation,
      modelClass: Tenant_Profile,
      join: {
        from: 'user_profile.user_id',
        to: 'tenant_profile.user_id'
      }
    }
  };
}
module.exports = User_Profile;