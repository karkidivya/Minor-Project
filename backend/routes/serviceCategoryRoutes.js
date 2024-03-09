import express from 'express';
import serviceCategoryController from '../controller/Service/serviceCategoryController.js';

const router = express.Router();

router.get('/', serviceCategoryController.getAllServiceCategories);
router.get('/:categoryId', serviceCategoryController.getServiceCategoryByID);

export default router;
