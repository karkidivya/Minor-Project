import express from 'express';
import userDashboardController from '../controller/userDashboard/userDashboardController.js';


const router = express.Router();

router.post('/getUserDetails', userDashboardController.getUserDashboardDetails);

export default router;
