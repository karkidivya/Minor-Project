import express from 'express';
import serviceProviderController from '../controller/User/serviceProviderController.js';

const router = express.Router();

router.post('/registerServiceProvider', serviceProviderController.registerServiceProvider);
router.post('/serviceProviderLogin', serviceProviderController.login);
router.put('/updateProfile', serviceProviderController.updateProfile);
router.get('/byCategoryId/:categoryId', serviceProviderController.getServiceProvidersByCategoryId);
router.get('/featuredServiceProvider', serviceProviderController.featuredServiceProvider);
router.get('/unverifiedServiceProvider', serviceProviderController.unVerifiedServiceProvider);
router.get('/verifiedServiceProvider', serviceProviderController.verifiedServiceProvider);
router.put('/verifyServiceProvider/:serviceProviderId', serviceProviderController.updateServiceProviderToVerified);
router.delete('/deleteServiceProvider/:serviceProviderId', serviceProviderController.deleteServiceProvider);

export default router;
