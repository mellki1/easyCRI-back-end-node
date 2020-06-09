const mongoose = require('mongoose');

//Modelo de cliente
const ClientPjSchema = mongoose.Schema({
    cnpj: {
        type: String,
        unique: true,
        require: true
    },
    razaoSocial: {
        type: String,
        require: true
    },
    enderecoSede: {
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
        default: 'PESSOA_JURIDICA'
    }
}
);

//Coleção no banco de dados mongo
module.exports = mongoose.model('clientePj', ClientPjSchema);