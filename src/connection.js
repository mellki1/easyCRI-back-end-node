const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/easycri').then(() => {
    console.log('Banco de dados ' + mongoose.connection.db.databaseName + ' conectado');
}).catch((err) => {
    console.log('Erro ao se conectar com servidor mongo : ' + err);
});

