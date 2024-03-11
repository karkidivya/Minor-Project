import express from 'express';
import bookingController from '../controller/Booking/bookingController.js';

const router = express.Router();

router.post('/addBooking', bookingController.addBooking);
router.get('/getBooking/:id', bookingController.getBookingById);
router.get('/getBookingByServiceId/:id', bookingController.getBookingByServiceId);
router.get('/Booking', bookingController.getBooking);
router.delete('/deleteBooking/:id', bookingController.deleteBooking);

export default router;
