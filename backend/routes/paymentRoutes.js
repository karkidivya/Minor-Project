import express from 'express';
import paymentController from '../controller/Payment/paymentController.js';

const router = express.Router();

router.get('/getPayment/:id', paymentController.getPaymentById);
router.get('/getPayment', paymentController.getPayment);
router.delete('/deletePayment/:id', paymentController.deletePayment);
router.post('/addPayment', paymentController.addPayment);
router.get('/getPaymentByStatus/:status', paymentController.getPaymentByStatus);
router.post('/updatePaymentStatus', paymentController.updatePaymentStatus);

export default router;
