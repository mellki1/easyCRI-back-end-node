const express = require('express');
const routes = express.Router();

//importanção dos controllers
const clientesController = require('../controllers/ClientController');

//Adicionando cliente
routes.post('/clientes', clientesController.createClientes);


//Listando todos os clientes
routes.get('/clientes', clientesController.listAllClientes);


routes.get('/clientes/id', )

module.exports = routes;