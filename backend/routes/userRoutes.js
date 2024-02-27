import express from 'express';
import userController from '../controller/User/userController.js';
import verificationMiddleware from '../middleware/index.js';

const router = express.Router();

router.post('/registerUser', userController.registerUser);
router.post('/userLogin', userController.login);
router.put('/updateProfile', verificationMiddleware.decodeToken, userController.updateProfile);

export default router;
