import express from "express";
import bookingController from '../controller/Booking/bookingController.js';
import reviewController from '../controller/Review/reviewController.js';

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

export default router;
