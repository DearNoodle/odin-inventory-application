import { Router } from 'express';
import controller from '../controllers/controller.js';
const router = Router();

router.get('/', controller.homePageGet);
router.get('/product', controller.productsGet);
router.get('/product/update/:id', controller.updateFormGet);
router.post('/product/update/:id', controller.updateFormPost);
router.get('/product/add', controller.addFormGet);
router.post('/product/add', controller.addFormPost);
router.post('/product/delete/:id', controller.deleteProductPost);
router.get('/product/category', controller.categoryEditorGet);
router.post('/product/category/delete', controller.deleteCategoryPost);
router.post('/product/category/add', controller.addCategoryPost);

export default router;
