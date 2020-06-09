const Client = require('../models/ClientPf');
const cpfandCnpjVerification = require('node-cpf');


async function createClientsPf(request, response) {
    const { nome, nacionalidade, estadoCivil, profissao, identidade, orgaoEmissor, estadoEmissor, cpf, sexo, nomePai, nomeMae, endereco, email, telefone, tipoCliente } = request.body;

    //Verificando se o CPF é válido
    if (cpfandCnpjVerification.validate(cpf)) {
        await new Client({
            nome,
            nacionalidade,
            estadoCivil,
            profissao,
            identidade,
            orgaoEmissor,
            estadoEmissor,
            cpf,
            sexo,
            nomePai,
            nomeMae,
            endereco,
            email,
            telefone,
            tipoCliente
        }).save().then(() => {
            return response.status(200).json({message: 'Cliente ' + nome + ' cadastrado com sucesso!'});
        }).catch((err) => {
            return response.status(500).json({message: 'Cliente ' + nome + ' não cadastrado cadastrado! Erro: ' + err});
        });
    } else {
        return response.json("CPF inválido!");
    }
}

async function  createClientsPj (request, response) {
    const { cnpj, razaoSocial, enderecoSede, email, telefone, tipo } = request.body;

    //Verificando se o CPF é válido
    if (cpfandCnpjVerification.validate(cnpj)) {
        await new Client({
            cnpj,
            razaoSocial,
            enderecoSede,
            email,
            telefone,
            tipo

        }).save().then(() => {
            return response.status(200).json({message: 'Cliente ' + razaoSocial + ' cadastrado com sucesso!'});
        }).catch((err) => {
            return response.status(500).json({message: 'Cliente ' + razaoSocial + ' não cadastrado cadastrado! Erro: ' + err});
        });
    } else {
        return response.json("CPF inválido!");
    }
}

module.exports = {

    //criando clientesPF
    async createClients(request, response) {
        const tipo = request.body.tipo;
        if (tipo == "PESSOA_FISICA") {
            createClientsPf(request, response);
        } else {
            createClientsPj(request, response);
        }
    }
    /*
        //listando todos os Clientes
        async listAllClients(request, response) {
            const { page = 1 } = request.query;
    
    
            const clients = await Client.findAll({
                offset: (page - 1) * 5,
                limit: 5
            });
    
            if (clients == '') {
                return response.status(204).send();
            }
            return response.json({ clients });
        },
    
        //Listando Clients por id
        async listClientsById(request, response) {
    
            const Clients = await Client.findByPk(123).then(project => {
                // project will be an instance of Project and stores the content of the table entry
                // with id 123. if such an entry is not defined you will get null
            });
    
            if (Clients == '') {
                return response.status(204).send();
            }
            return response.json({ Clients });
        }
    */
}