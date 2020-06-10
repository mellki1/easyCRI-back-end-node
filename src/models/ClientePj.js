const {Schema, model} = require('mongoose');

//Modelo de cliente
const ClientPjSchema = Schema({
    cnpj: {
        type: String,
        unique: true,
        require: true
    },
    razaoSocial: {
        type: String,
        require: true
    }
}
);
const clientePj = model('clientePj', ClientPjSchema);
//Coleção no banco de dados mongo
module.exports = clientePj;