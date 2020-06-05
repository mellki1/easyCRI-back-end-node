const Client = require('./../models/Clientes');
module.exports = {

    //criando clientes
    async createClient(request, response) {
        const { nome, nacionalidade, estadoCivil, profissao, identidade, orgaoEmissor, estadoEmissor, cpf, nomePai, nomeMae, endereco, email, telefone } = request.body;

        await new Client({
            nome,
            nacionalidade,
            estadoCivil,
            profissao,
            identidade,
            orgaoEmissor,
            estadoEmissor,
            cpf,
            nomePai,
            nomeMae,
            endereco,
            email,
            telefone,
        }).save().then(()=>{
            return response.json("Cliente " + nome + " cadastrado com sucesso!");
        }).catch((err)=>{
            return response.json("Cliente " + nome + " não cadastrado cadastrado! Erro: " + err);
        });

        
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