import express from 'express';
import paymentController from '../controller/Payment/paymentController.js';

const router = express.Router();

router.get('/payment/getPayment/:id', paymentController.getPaymentById);
router.get('/payment/getPayment', paymentController.getPayment);
router.delete('/payment/deletePayment/:id', paymentController.deletePayment);
router.post('/payment/addPayment', paymentController.addPayment);
router.get('/payment/getPaymentByStatus/:status', paymentController.getPaymentByStatus);
router.post('/payment/updatePaymentStatus', paymentController.updatePaymentStatus);

export default router;
