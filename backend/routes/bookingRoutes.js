import express from 'express';
import bookingController from '../controller/Booking/bookingController.js';

const router = express.Router();

router.post('/addBooking', bookingController.addBooking);
router.post('/updateBookingStatus', bookingController.updateBookingStatus);
router.get('/getBooking/:id', bookingController.getBookingById);
router.get('/getBookingByServiceId/:id', bookingController.getBookingByServiceId);
router.get('/getBookingByServiceProviderId/:id', bookingController.getBookingByServiceProviderId);
router.get('/Booking', bookingController.getBooking);
router.delete('/deleteBooking/:id', bookingController.deleteBooking);

export default router;
