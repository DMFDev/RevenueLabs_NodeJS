const express = require('express');
require('dotenv').config();
require('./db.js');

const userRoutes = require('./routes/user');

const PORT = process.env.PORT || 3000;
const server  = express();
server.use(express.static('public'));

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use('/users', userRoutes);

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
