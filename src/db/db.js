const constants = require('../configs/local.constants');

const mongoose = require('mongoose');

mongoose.connect(constants.DB_STRING, {
    dbName: constants.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
    console.log('Database connected successfully');
});

module.exports = mongoose;
