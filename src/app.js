const express = require('express');
const validateName = require('./middlewares/validateNameField');
const validatePrice = require('./middlewares/validatePriceField');

const { HTTP_OK_STATUS } = require('./utils/statusCodes');
const { HTTP_CREATED_STATUS } = require('./utils/statusCodes');

const app = express();
app.use(express.json());

// não remova e nem modifique esse endpoint
app.get('/', validateName, (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/activities', validateName, validatePrice, (_req, res) => {
  res.status(HTTP_CREATED_STATUS).json(
    { message: 'Atividade cadastrada com sucesso!' },
  );
});

module.exports = app;