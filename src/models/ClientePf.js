const {Schema, model} = require('mongoose');

//Modelo de cliente
const ClientePfSchema = Schema({
    cpf: {
        type: String,
        unique: true,
        require: true
    },
    nome: {
        type: String,
        require: true
    },
    nacionalidade: {
        type: String,
        require: true
    },
    estadoCivil: {
        type: String,
        require: true
    },
    profissao: {
        type: String,
        require: true
    },
    identidade: {
        type: String,
        require: true
    },
    orgaoEmissor: {
        type: String,
        require: true
    },
    estadoEmissor: {
        type: String,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    nomePai: {
        type: String
    },
    nomeMae: {
        type: String
    }
}
);
const clientePf = model('clientePf', ClientePfSchema);
//Coleção no banco de dados mongo
module.exports = clientePf;