const express = require("express");
const router = express.Router();
const user_profile = require('../controllers/user_profile');
const Tenant_Profile = require('../controllers/tenant_profile');


//***User Profile routes */
router.get('/api/userprofile/:id' , user_profile.fetchSingleUserProfile);
router.get('/api/userprofile' , user_profile.GetUserProfiles);
router.post('/api/userprofile' , user_profile.addUserProfile);
router.put('/api/userprofile' , user_profile.UpdateUserprofile);
router.delete('/api/userprofile' , user_profile.DeleteUserprofile);

//****tenantProfile Routes */
router.get('/api/tenantProfile' , Tenant_Profile.GetTenantProfile);
router.get('/api/tenantProfile/:id' , Tenant_Profile.fetchSingletenantProfile);
router.post('/api/tenantProfile' , Tenant_Profile.addTenantProfile);
router.put('/api/tenantProfile' , Tenant_Profile.UpdateTenantProfile);
router.delete('/api/tenantProfile' , Tenant_Profile.DeleteTenantProfile);


module.exports = router;
