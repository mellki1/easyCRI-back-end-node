const mongoose = require('mongoose');

//Modelo de cliente
const ClientPfSchema = mongoose.Schema({
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
    },
    endereco: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    telefone: {
        type: String
    },
    tipo: {
        type: String,
        enum: ['PESSOA_FISICA', 'PESSOA_JURIDICA'],
        default: 'PESSOA_FISICA'
    }
}
);

//Coleção no banco de dados mongo
module.exports = mongoose.model('clientePf', ClientPfSchema);