const ClientesPf = require('../models/ClientePf');
const ClientesPj = require('../models/ClientePj');
const Cliente = require('../models/Clientes');
const cpfandCnpjVerification = require('node-cpf');



module.exports = {

    //criando clientesPF
    async createClientes(request, response) {
        try {
            const tipo = request.body.tipo;

            if (tipo == "PESSOA_FISICA") {
                //Criando Cliente PF
                //Verificação de CPF
                if (cpfandCnpjVerification.validate(request.body.cpf)) {

                    const newClientesPf = await ClientesPf.create(request.body);
                    const newCli = await Cliente.create({ ...request.body, clientePf: newClientesPf._id });

                    return response.send({ newCli });
                } else {
                    return response.status(400).send({ error: 'CPF inválido' })
                }

            } else if (tipo == "PESSOA_JURIDICA") {
                //Criando Cliente PJ
                if (cpfandCnpjVerification.validate(request.body.cnpj)) {

                    const newClientesPj = await ClientesPj.create(request.body);
                    const newCli = await Cliente.create({ ...request.body, clientePj: newClientesPj._id });

                    return response.send({ newCli });
                } else {
                    return response.status(400).send({ error: 'CNPJ inválido' })
                }
            }
        } catch (error) {
            return response.status(400).send({ error: 'Erro ao criar novo usuario' })
        }
    },

    //listando todos os Clientes
    async listAllClientes(request, response) {
        const { page = 1 } = request.query;


        const clientes = await Cliente.find().limit(5).skip(((page - 1) * 5)).populate('clientePf').populate('clientePj');

        if (clientes == '') {
            return response.status(204).send();
        }
        return response.send({ clientes });
    },

    //Listando Clients por id
    async listClientsById(request, response) {
        

    }

}