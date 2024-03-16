import express from 'express';
const router = express.Router();
import otpController from '../controller/otp/otpController.js';

router.post('/send-otp', otpController.sendOTP);
router.post('/verify-otp', otpController.verifyOTP);

export default router;
 