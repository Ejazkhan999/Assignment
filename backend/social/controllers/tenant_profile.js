const TenantProfile = require('../models/tenant_profile');

let methods = {
  addTenantProfile:async(req ,res)=>{
  try{
    let data = req.body;
    if(!data) throw 'invalid request !';
    let tenantProfile =  await TenantProfile.query().insert(data);
    if(!tenantProfile) throw 'can not insert data!';
    res.status(200).json({
      msg:'data inserted !',
      tenantProfile
    })

  }catch(error){
    console.log('error' , error);
    res.status(500).json({
      error,
      msg:'can not inserted data'
    })
  }

  } , 
  UpdateTenantProfile:async(req, res)=>{
   try{
    let data = req.body;
    let tenant_id = req.params;
    if(!data || !tenant_id) throw ' invalid request!'
    let tenantProfile= await TenantProfile.query().update(data)
      .where({tenant_id});
    if(tenantProfile[0] == 0) throw 'can not update TenantProfile !';
    res.status(200).json({
      msg:'updated sucssessflly!'
    })
   }catch(error){
     console.log('error' , error);
     res.status(500).json({
       error,
       msg:'can not update!'
     })  
   }

  }, 
  GetTenantProfile:async()=>{
    try{
      let tenantProfile = await TenantProfile.query().patch();
      if(!tenantProfile) throw 'can not fetch user profile!';
      res.status(500).json({
        tenantProfile
      })

    }catch(error){
      console.log('error' , error);
      res.status(500).json({
        error , 
        msg:'can not get TenantProfiles'
      })
    }

  },
  DeleteTenantProfile:async(req, res)=>{
    try{
      console.log('delete TenantProfilee api called !');
      let tenant_id = req.params;
      if(!tenant_id) throw 'invalid request !';

      await TenantProfile.query()
      .delete()
      .where(tenant_id);
    }catch(error){
     console.log('error' , error);
     res.status(500).json({
       error,
       msg:'can noot delete TenantProfile !'
     })

    }

  },
  fetchSingletenantProfile:async(req, res)=>{
    try{
      console.log('fetch single user profile api called !')
      let tenant_id = req.params;
      if(!tenant_id) throw 'Invalid request !';
      const TenantProfiles = await TenantProfile.query().findOne(tenant_id);
      console.log('user us ' , TenantProfiles)
      return res.json(TenantProfiles);

    }catch(error){
      res.status(500).json({
        msg:'can not patchTenantProfile !' , 
        error
      })
    }

  }

}
module.exports=  methods;