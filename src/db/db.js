const constants = require('../configs/local.constants');

global.mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
	.connect(constants.DB_STRING, {
		dbName: constants.DB_NAME,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Database connected successfully');
	})
    .catch(() => {
        console.log('Error while connecting to database!');
    });

module.exports = mongoose;
