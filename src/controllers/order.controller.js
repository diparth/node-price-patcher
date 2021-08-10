const Order = require('./../models/order.model');
const Product = require('./../models/product.model');

exports.createOrder = async (req, res) => {
	try {
		const createdAt = new Date();
		const body = req.body;
		const product = await Product.findOne({ _id: body.product_id });

		const order = await Order.create({
			created_date: createdAt,
			product_id: body.product_id,
			product_title: product.title,
			qty: body.qty,
			price: product.price,
			order_total: product.price * body.qty,
		});

		if (order) {
			res.status(200).send({
				data: order,
				status: 200,
				message: 'Data saved!',
			});
		}
	} catch (err) {
		console.log(err);
		res.status(400).send({
			message: err.message,
			error: true,
		});
	}
};
