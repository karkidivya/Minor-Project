import express from 'express';
import reviewController from '../controller/Review/reviewController.js';

const router = express.Router();

router.post('/addReview', reviewController.addReview);
router.put('/updateReview', reviewController.updateReview);
router.delete('/removeReview', reviewController.removeReview);
router.get('/getReview/:serviceProviderId/:serviceId', reviewController.getReviewByServiceProviderServiceId);

export default router;
