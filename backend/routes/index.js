import express from 'express';
import bookingRoutes from './bookingRoutes.js'; // Adjust the import path here
import reviewRoutes from './reviewRoutes.js';
import userRoutes from './userRoutes.js';
import serviceProviderRoutes from './serviceProviderRoutes.js';
import serviceCategoryRoutes from './serviceCategoryRoutes.js';
import paymentRoutes from './paymentRoutes.js';
import serviceRoutes from './serviceRoutes.js';
import userDashboardRoutes from './userDashboardRoutes.js';
import otp from './otpRoutes.js'
import esewaRouter from './esewa.js';

const router = express.Router();

router.use('/booking', bookingRoutes);
router.use('/review', reviewRoutes);
router.use('/user', userRoutes);
router.use('/serviceProvider', serviceProviderRoutes);
router.use('/serviceCategory', serviceCategoryRoutes);
router.use('/service', serviceRoutes);
router.use('/loginOtp', otp)
router.use('/payment', esewaRouter );
router.use('/paymentRoute', paymentRoutes );
router.use('/userDashboard', userDashboardRoutes );

// Middleware for handling unmatched routes
router.use((req, res, next) => {
    const error = new Error('EndPointNot Found');
    error.status = 404;
    next(error);
  });
  
  // Error handler middleware
  router.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message
      }
    });
  });

export default router;
