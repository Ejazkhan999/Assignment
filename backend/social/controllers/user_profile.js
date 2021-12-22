const User = require('../models/user_profile');

let methods = {
  addUserProfile:async(req ,res)=>{
  try{
    let data = req.body;
    if(!data) throw 'invalid request !';
    let userProfile =  await User.query().insert(data);
    if(!userProfile) throw 'can not insert data!';
    res.status(200).json({
      msg:'data inserted !',
      userProfile
    })

  }catch(error){
    console.log('error' , error);
    res.status(500).json({
      error,
      msg:'can not inserted data'
    })
  }

  } , 
  UpdateUserprofile:async(req, res)=>{
   try{
    let data = req.body;
    let user_id = req.params;
    if(!data || !user_id) throw ' invalid request!'
    let UpdateUserProfile = await User.query().update(data)
      .where({user_id});
    if(UpdateUserProfile[0] == 0) throw 'can not update user profile !';
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
  GetUserProfiles:async()=>{
    try{
      let userProfiles = await User.query().patch();
      if(!userProfiles) throw 'can not fetch user profile!';
      res.status(500).json({
        userProfiles
      })

    }catch(error){
      console.log('error' , error);
      res.status(500).json({
        error , 
        msg:'can not get user profile!'
      })
    }

  },
  DeleteUserprofile:async(req, res)=>{
    try{
      console.log('delete user profile api called !');
      let user_id = req.params;
      if(!user_id) throw 'invalid request !';

      await User.query()
      .delete()
      .where(user_id);
    }catch(error){
     console.log('error' , error);
     res.status(500).json({
       error,
       msg:'can noot delete user profile !'
     })

    }

  },
  fetchSingleUserProfile:async(req, res)=>{
    try{
      console.log('fetch single user profile api called !')
      let user_id = req.params;
      if(!user_id) throw 'Invalid request !';
      const user = await user.query().findOne(user_id);
      console.log('user us ' , user)
      return res.json(user);

    }catch(error){
      res.status(500).json({
        msg:'can not patch user profile !' , 
        error
      })
    }

  }

}
module.exports=  methods;