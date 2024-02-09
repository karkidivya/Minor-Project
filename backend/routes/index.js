import express from "express";
import bookingController from '../controller/Booking/bookingController.js'
const router = express.Router();

//Booking Router
router.get('/addBooking', bookingController.addBooking);
router.get('/getBooking/:id', bookingController.getBookingById);
router.get('/Booking', bookingController.getBooking);
router.delete('/deleteBooking/:id', bookingController.deleteBooking )

export default router