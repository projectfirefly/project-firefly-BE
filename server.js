const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./config/authRoutes.js');
const userRoutes = require('./config/userRoutes.js');

server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

server.use(express.json());

authRoutes(server);
server.use('/users', userRoutes);

server.get('/', (req, res) => {res.status(200).json('in the server.get test')})

module.exports = server;