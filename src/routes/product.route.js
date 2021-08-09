const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/all-products', productController.getProducts);
router.get('/:productId', productController.getProductById);
router.post('/add-product', productController.addProduct);
router.delete('/delete-product', productController.deleteProduct);
router.post('/update-product-price', productController.updatePrice);
router.post('/update-product', productController.updateProduct);

module.exports = router;
