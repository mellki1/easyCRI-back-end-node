const express = require('express');
const routes = express.Router();

//importanção dos controllers
const clientesController = require('../controllers/ClientController');

//Adicionando cliente
routes.post('/clientes', clientesController.createClientPF);

/*
//Listando todos os clientes
routes.get('/clientes', clientesController.listAllCientes);


routes.get('/clientes/id', )
*/
module.exports = routes;