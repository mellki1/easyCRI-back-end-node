const {Schema, model} = require('mongoose');
//Modelo de cliente
const ClientesSchema = Schema({
    tipo: {
        type: String,
        enum: ['PESSOA_FISICA', 'PESSOA_JURIDICA'],
        default: 'PESSOA_FISICA'
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
    clientePf: {
        type: Schema.Types.ObjectId,
        ref: 'clientePf'
    },
    clientePj: {
        type: Schema.Types.ObjectId,
        ref: 'clientePj'
    }
}
);

const cliente = model('cliente', ClientesSchema);
//Coleção no banco de dados mongo
module.exports = cliente;