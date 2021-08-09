const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    sku: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    max_price: {
        type: Number,
        required: true
    },
    min_price: {
        type: Number,
        required: true
    },
    estimated_weekly_sales: {
        type: Number,
        required: true
    }
}, {
    collection: 'productmaster'
});

productSchema.index({ title: 1 });
productSchema.index({ price: 1 });
productSchema.index({ max_price: 1, min_price: 1 });
productSchema.index({ estimated_sales_per_week: 1 });

const Product = mongoose.model('productMaster', productSchema);
module.exports = Product;
