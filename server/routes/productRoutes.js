import express from 'express';
import { getProductByID, getProductsForPage } from '../controllers/productController.js';

const router = express.Router();

router.get('/api/productsPage', getProductsForPage);

router.get('/api/products/:id', getProductByID)

export default router;
