import express from "express";
import bookingController from '../controller/Booking/bookingController.js';
import reviewController from '../controller/Review/reviewController.js';
import userController from "../controller/User/userController.js";
import verificationMiddleware from '../middleware/index.js';
import serviceCategoryController from "../controller/Service/serviceCategoryController.js";
import serviceController from "../controller/Service/serviceController.js";
import serviceProviderController from "../controller/User/serviceProviderController.js";
const router = express.Router();

// Booking Routes
router.post('/addBooking', bookingController.addBooking);
router.get('/getBooking/:id', bookingController.getBookingById);
router.get('/Booking', bookingController.getBooking);
router.delete('/deleteBooking/:id', bookingController.deleteBooking);

// Review Routes
router.post('/addReview', reviewController.addReview);
router.put('/updateReview', reviewController.updateReview);
router.delete('/removeReview', reviewController.removeReview);
router.get('/getReview/:serviceProviderId/:serviceId', reviewController.getReviewByServiceProviderServiceId);

// User routes 
router.post('/registerUser', userController.registerUser );
router.post('/userLogin', userController.login );
router.put('/updateProfile',verificationMiddleware.decodeToken, userController.updateProfile );

// Service Provider routes
router.post('/registerServiceProvider', serviceProviderController.registerServiceProvider);
router.post('/serviceProviderLogin', serviceProviderController.login);
router.put('/updateProfile', verificationMiddleware.decodeToken, serviceProviderController.updateProfile);
router.get('/serviceProviders/:categoryId', serviceProviderController.getServiceProvidersByCategoryId);



// Service Category Routes
router.get('/serviceCategories', serviceCategoryController.getAllServiceCategories);
router.get('/serviceCategory/:categoryId', serviceCategoryController.getServiceCategoryByID);

// Service Routes
router.get('/services/:categoryId', serviceController.getAllServices);
router.get('/service/:serviceId', serviceController.getServiceByID);


export default router;
