
const orderSchema = new mongoose.Schema({
    created_date: {
        type: Date,
        required: true,
        default: new Date()
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productMaster'
    },
    product_title: {
        type: String,
        required: true,
        trim: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    order_total: {
        type: Number,
        required: true
    },
}, {
    collection: 'orderMaster'
});

const Order = mongoose.model('orderMaster', orderSchema);
module.exports = Order;
