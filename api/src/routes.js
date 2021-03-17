const express = require('express');
const routes = express.Router();
const GestArpController = require('./Controllers/GestArpController');


routes.post('/api/gestarp', GestArpController.store);
routes.get('/api/gestarp', GestArpController.index);

module.exports = routes;

