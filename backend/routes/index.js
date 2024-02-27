import express from 'express';
import bookingRoutes from './bookingRoutes.js'; // Adjust the import path here
import reviewRoutes from './reviewRoutes.js';
import userRoutes from './userRoutes.js';
import serviceProviderRoutes from './serviceProviderRoutes.js';
import serviceCategoryRoutes from './serviceCategoryRoutes.js';
import serviceRoutes from './serviceRoutes.js';

const router = express.Router();

router.use('/booking', bookingRoutes);
router.use('/review', reviewRoutes);
router.use('/user', userRoutes);
router.use('/serviceProvider', serviceProviderRoutes);
router.use('/serviceCategory', serviceCategoryRoutes);
router.use('/service', serviceRoutes);

export default router;
