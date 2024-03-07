const express = require('express');
const validateName = require('./middlewares/validateNameField');
const { HTTP_OK_STATUS } = require('./utils/statusCodes');

const app = express();
app.use(express.json());

// não remova e nem modifique esse endpoint
app.get('/', validateName, (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/activities', validateName, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;