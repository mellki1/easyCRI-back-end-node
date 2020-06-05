const express = require('express');
const routes = express.Router();

//importanção dos controllers
const clientesController = require('./../controllers/ClienteController');

//Adicionando cliente
routes.post('/clientes', clientesController.createClient);

/*
//Listando todos os clientes
routes.get('/clientes', clientesController.listAllCientes);


routes.get('/clientes/id', )
*/
module.exports = routes;