import express from 'express';
import { getProductsForPage } from '../controllers/productController.js';

const router = express.Router();

router.get('/api/productsPage', getProductsForPage);

export default router;
