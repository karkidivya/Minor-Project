import express from 'express';
import serviceController from '../controller/Service/serviceController.js';

const router = express.Router();

router.get('/services/:categoryId', serviceController.getAllServices);
router.get('/service/:serviceId', serviceController.getServiceByID);

export default router;
