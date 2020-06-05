const express = require('express');
const routes = require('./routes/admin');
const cors = require('cors');
const dbConnection = require('./connection');

const app = express();


app.use(cors());

app.use(express.json());
app.connect(dbConnection);
app.use(routes);

app.listen(3333);