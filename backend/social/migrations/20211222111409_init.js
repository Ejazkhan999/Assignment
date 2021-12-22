
exports.up = function(knex) {
  return knex.schema
    .createTable('Tenant_Profile' , (table)=>{
      table.increments('tenant_id');
      table.string('tenant_name').notNullable();
      table.json('address').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.string('country').notNullable();
      table.string('zip_code').notNullable();
      table.string('phone').notNullable();
      table.string('web_url').notNullable();
      table.timestamps(true , true);

    })
    .createTable('User_Profile' , (table)=>{
      table.increments('user_id');
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('department').notNullable();
      table.string('designation').notNullable();
      table.string('image_url').notNullable();
      table.string('city').notNullable();
      table.string('country').notNullable();
      table.string('bio').notNullable();
      table.json('social_links').notNullable();
      table.integer('employee_id').notNullable()
      table
      .integer('tenant_id')
      .notNullable()
      .references('tenant_id')
      .inTable('Tenant_Profile');
      table.timestamps(true ,true)
    })
};

exports.down = function(knex) {
  
};
