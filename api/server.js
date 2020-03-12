require('dotenv').config
const express = require('express');
const cors = require('cores')
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

function logger(req, res, next) {
    console.log(
        `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('host')}`
    );
    next();
}


server.use(logger);
server.use('/api', apiRouter);
server.get('/', (req, res) => {
    res.send('Welcome to the Thunder Dome');
});

module.exports = server;
