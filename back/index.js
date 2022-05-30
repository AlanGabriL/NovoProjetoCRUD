const express = require('express');
const app = new express();
const db = require('./config/database');

db.sync().then(() => console.log('Banco de dados conectado com sucesso :)'));

app.listen(8080, () => console.log('listening on port 8080'));

app.use(express.json());
