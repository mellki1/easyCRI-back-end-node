const {Schema, model} = require('mongoose');

//Modelo de cliente
const ClientesSchema = new Schema({
    tipo: {
        type: String,
        enum: ['PESSOA_FISICA', 'PESSOA_JURIDICA'],
        default: 'PESSOA_FISICA'
    },
    endereco: {
        logradouro: {
            type: String,
            require: true
        },
        numero: {
            type: String,
            require: true
        },
        bairro: {
            type: String,
            require: true
        },
        cidade: {
            type: String,
            require: true
        },
        uf: {
            type: String,
            require: true
        }
        
    },
    email: {
        type: String
    },
    telefone: {
        type: String
    },
    clientePf: {
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
        documentoIdentificacao: {
            type: String,
            require: true
        },
        tipoDocumento: {
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
    },
    clientePj: {
        cnpj: {
            type: String
        },
        razaoSocial: {
            type: String
        }
    }
}
);

const clientes = model('clientes', ClientesSchema);
//Coleção no banco de dados mongo
module.exports = clientes;