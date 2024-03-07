const express = require('express');

const validateNameField = require('./middlewares/validateNameField');
const validatePriceField = require('./middlewares/validatePriceField');
const validateDescriptionField = require('./middlewares/validateDescriptionField');

const { HTTP_OK_STATUS } = require('./utils/statusCodes');
const { HTTP_CREATED_STATUS } = require('./utils/statusCodes');
const validateCreatedAtField = require('./middlewares/validateCreatedAtField');

const app = express();
app.use(express.json());

// não remova e nem modifique esse endpoint
app.get('/', validateNameField, (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/activities',

  validateNameField, 
  validatePriceField, 
  validateDescriptionField,
  validateCreatedAtField,
  
  (_req, res) => {
  res.status(HTTP_CREATED_STATUS).json(
  { message: 'Atividade cadastrada com sucesso!' },
  );
});

module.exports = app;