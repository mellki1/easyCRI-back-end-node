const Client = require('../models/ClientPf');
const cpfVerification = require('node-cpf');

module.exports = {

    //criando clientesPF
    async createClientPF(request, response) {
        const { nome, nacionalidade, estadoCivil, profissao, identidade, orgaoEmissor, estadoEmissor, cpf, sexo, nomePai, nomeMae, endereco, email, telefone } = request.body;

        //Verificando se o CPF é válido
        if (cpfVerification.validate(cpf)){
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
            }).save().then(() => {
                return response.json("Cliente " + nome + " cadastrado com sucesso!");
            }).catch((err) => {
                return response.json("Cliente " + nome + " não cadastrado cadastrado! Erro: " + err);
            });
        } else {
            return response.json("CPF inválido!");
        }
},
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