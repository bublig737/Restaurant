'use strict';

import express from 'express'
import bodyParser from 'body-parser'
import router from './src/router'

let app = express();
app.use(bodyParser.json());
app.use(router);
app.listen(8082, function () {
    console.log('Server is listening on ' + 80);
});
