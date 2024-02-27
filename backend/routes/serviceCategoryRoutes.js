import express from 'express';
import serviceCategoryController from '../controller/Service/serviceCategoryController.js';

const router = express.Router();

router.get('/serviceCategories', serviceCategoryController.getAllServiceCategories);
router.get('/serviceCategory/:categoryId', serviceCategoryController.getServiceCategoryByID);

export default router;
