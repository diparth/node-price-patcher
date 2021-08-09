global.express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const constants = require('./configs/local.constants');

const mongoose = require('./db/db');

app.listen(constants.PORT, () => {
    console.log(`Server is listening on PORT: ${constants.PORT}`);
});

app.get('/api', (req, res) => {
    res.json({ status: '200', msg: 'Success' });
});

app.use('/api/v1/products', require('./routes/product.route'));
