
exports.seed = async function(knex) {


  // truncate ALL existing entries
  await knex.raw('TRUNCATE TBALE "tenant_profile" CASCADE')
  await knex.raw('TRUNCATE TABLE "user_profile" CASCADE')
  
    
      // Inserts seed entries
      await knex('tenant_profile').insert([
        {
          tenant_id: 1,
          tenant_name: 'hello world',
          address:{},
          city:'islamabad',
          state:'pakistan',
          country:'pakistan',
          zip_code:'25000',
          phone:'001122344',
          web_url:'https://www.google.com'
        },
        {
          tenant_id: 2,
          tenant_name: 'welcome',
          address:'street hawk',
          city:'bermingam',
          state:'south Hall',
          country:'England',
          zip_code:'11001',
          phone:'001122344',
          web_url:'https://www.Microsoft.com'
        },
        
      ]);

      await knex('user_profile').insert([
        {
          user_id: 1,
          first_name: 'ijax',
          last_name:'Khan',
          department:'Development',
          designation:'teamLead',
          image_url:'https://googleImages.com',
          city:'islamabad',
          country:'pakistan',
          bio:'https://www.google.com',
          social_links:'linkedin:https://linkedin.com ,facebook:https://facebook.com',
          employee_id:1,
          tenant_id:1
        },
        {
          user_id: 1,
          first_name: 'abc',
          last_name:'def',
          department:'Development',
          designation:'frontend Developer',
          image_url:'https://googleImages.com',
          city:'islamabad',
          country:'pakistan',
          bio:'https://www.google.com',
          social_links:'linkedin:https://linkedin.com ,facebook:https://facebook.com',
          employee_id:2,
          tenant_id:2
        },
        
      ]);
    
};
