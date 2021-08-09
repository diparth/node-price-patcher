const Product = require( '../models/product.model' );
const productHelper = require('../helpers/products.helper');

exports.getProducts = async ( req, res ) => {
    try {
        let products = await Product.find();

        if ( products && products.length ) {
            res.status( 200 ).send( {
                message: 'Found',
                data: products
            } );
        }
    } catch ( err ) {
        console.log( err );
        res.status( 400 ).send( {
            message: err.message,
            error: true
        } );
    }
};

exports.getProductById = async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params.productId });
        
        if (product) {
            res.status(200).send({
                data: product,
                status: 200,
                message: 'Data found!'
            });
        } else {
            res.status(200).send({
                data: null,
                status: 200,
                message: 'Data not found!'
            });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({
            message: err,
            error: true
        });
    }
};

exports.addProduct = async ( req, res ) => {
    try {
        const body = req.body;

        let newProduct = await Product.create( {
            sku: new mongoose.Types.ObjectId(),
            title: body.title,
            price: body.price,
            max_price: body.max_price,
            min_price: body.min_price,
            estimated_weekly_sales: body.estimated_weekly_sales
        } );

        if ( newProduct ) {
            res.status( 200 ).send( { data: newProduct, message: 'Product Added!', status: 200, error: false } );
        } else {
            throw new Error( { message: 'Could not add!' } );
        }
    } catch ( err ) {
        console.log( err );
        res.status( 400 ).send( {
            message: err.message,
            error: true
        } );
    }
};

exports.deleteProduct = async ( req, res ) => {
    try {
        let productId = req.query.product_id;
        let deleted = await Product.deleteOne( { _id: productId } );

        if ( deleted ) {
            res.status( 200 ).send( { message: 'Deleted the product!', deleted_data: deleted } );
        } else {
            throw new Error( { message: 'Could not delete!' } );
        }
    } catch ( err ) {
        console.log( err );
        res.status( 400 ).send( {
            message: err.message,
            error: true
        } )
    }
};

exports.updatePrice = async ( req, res ) => {
    try {
        let product = await Product.findOne( { _id: req.body.product_id } );
        let newPrice = productHelper.getPrice( product, req.body.new_sales );

        if ( newPrice < product.min_price ) {
            product.price = product.min_price;
        } else {
            product.price = newPrice;
        }

        let updated = await Product.findByIdAndUpdate( { _id: req.body.product_id }, { $set: product } );

        if ( updated ) {
            res.status( 200 ).send( { data: product, message: 'Product Updated!', status: 200, error: false } );
        } else {
            throw new Error( { message: 'Could not update!' } );
        }
    } catch ( err ) {
        console.log( err );
        res.status( 400 ).send( {
            message: err.message,
            error: true
        } )
    }
};

exports.updateProduct = async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.body.product_id });
        
        if (product) {
            let updated = await Product.findByIdAndUpdate({ _id: req.body.product_id }, { $set: product });
            
            res.status( 200 ).send( { data: product, updated, message: 'Product Updated!', status: 200, error: false } );   
        } else {
            throw new Error( { message: 'Could not find!' } );
        }
    } catch ( err ) {
        console.log( err );
        res.status( 400 ).send( {
            message: err.message,
            error: true
        } )
    }
};
