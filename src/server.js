global.express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
const constants = require('./configs/local.constants');

const mongoose = require('./db/db');

app.listen(constants.PORT, () => {
    console.log(`Server is listening on PORT: ${constants.PORT}`);
});
