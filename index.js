/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
require('./app/models/users');
const config =require ('./config') ;

const app = express();
config.express(app);
config.routes(app);

const { appPort, mongoUri } = config.app;

mongoose.connect(mongoUri)
    .then(() => app.listen(
        appPort, 
    () => console.log(`Listening on port ${appPort}...`),
    ))
    .catch(err => console.error(`Error connecting to mongo: ${mongoUri}`, err));

