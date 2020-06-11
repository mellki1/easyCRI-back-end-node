const express = require('express');
const routes = express.Router();

//importanção dos controllers
const clientesController = require('../controllers/ClientController');

//Adicionando cliente
routes.post('/clientes', clientesController.createClientes);

//Listando todos os clientes
routes.get('/clientes', clientesController.listAllClientes);

//Listando clientes por id
routes.get('/clientes/:clienteId', clientesController.listClientesById);

//Listando clientes por CPF
routes.get('/clientes/cpf/:cpf', clientesController.listClientesByCpf);

module.exports = routes;