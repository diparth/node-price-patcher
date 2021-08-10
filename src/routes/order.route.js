const router = express.Router();
const orderController = require('./../controllers/order.controller');

router.post('/add-order', orderController.createOrder);

module.exports = router;
