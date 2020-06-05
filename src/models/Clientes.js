const mongoose = require('mongoose');

//Modelo de cliente
const ClientSchema = mongoose.Schema({
    nome: {
        type: String
    },
    nacionalidade: {
        type: String
    },
    estadoCivil: {
        type: String
    },
    profissao: {
        type: String
    },
    identidade: {
        type: String
    },
    orgaoEmissor: {
        type: String
    },
    estadoEmissor: {
        type: String
    },
    cpf: {
        type: String
    },
    nomePai: {
        type: String
    },
    nomeMae: {
        type: String
    },
    endereco: {
        type: String
    },
    email: {
        type: String
    },
    telefone: {
        type: String
    }
});

//Coleção no banco de dados mongo
module.exports = mongoose.model('clientes', ClientSchema);