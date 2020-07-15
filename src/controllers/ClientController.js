const Cliente = require('../models/Clientes');
const { validateBr } = require('js-brasil');



module.exports = {

    //criando clientesPF
    async createClientes(request, response) {
        try {
            const tipo = request.body.tipo;
            const data = request.body;
            console.log(data);
            if (tipo == "PESSOA_FISICA") {
                //Criando Cliente PF
                //Verificação de CPF
                if (validateBr.cpf(request.body.clientePf.cpf)) {

                    const newClientPf = await Cliente.create(data);

                    return response.send({ newClientPf });
                } else {
                    return response.status(400).send({ error: 'CPF inválido' });
                }

            } else if (tipo == "PESSOA_JURIDICA") {
                //Criando Cliente PJ
                if (validateBr.cnpj(request.body.clientePj.cnpj)) {

                    const newClientesPj = await Cliente.create(request.body);

                    return response.send({ newClientesPj });
                } else {
                    return response.status(400).send({ error: 'CNPJ inválido' });
                }
            }
        } catch (error) {
            console.log('Erro ao criar novo usuario... Erro: ' + error);
            return response.status(400).send({ error: 'Erro ao criar novo usuario... Erro: ' }+ error);
        }
    },

    //listando todos os Clientes
    async listAllClientes(request, response) {
        try {
            const { page = 1 } = request.query;


            const clientes = await Cliente.find().limit(5).skip(((page - 1) * 5));

            return response.send({ clientes });
        } catch (error) {
            return response.status(400).send({ error: 'Erro ao listar clientes' });
        }
    },

    //Listando Clients por id
    async listClientesById(request, response) {

        try {
            const clientes = await Cliente.findById(request.params.clienteId);

            return response.send({ clientes });
        } catch (error) {
            return response.status(400).send({ error: 'Erro ao listar clientes' });
        }
    },

    //Listando Clients por cpf
    async listClientesByCpf(request, response) {

        try {
            const clientes = await Cliente.find({'clientePf.cpf': request.params.cpf});

            return response.send({ clientes });
        } catch (error) {
            return response.status(400).send({ error: 'Erro ao listar clientes... Erro: ' + error });
        }
    }

}