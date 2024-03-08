const express = require('express');

const validateNameField = require('./middlewares/validateNameField');
const validatePriceField = require('./middlewares/validatePriceField');
const validateDescriptionField = require('./middlewares/validateDescriptionField');
const validateCreatedAtField = require('./middlewares/validateCreatedAtField');
const validateRatingField = require('./middlewares/validateRatingField');
const validateDifficultyField = require('./middlewares/validateDifficultyField');
const authenticateToken = require('./middlewares/authenticateToken');

const generateToken = require('./utils/generateToken');
const { HTTP_OK_STATUS } = require('./utils/statusCodes');
const { HTTP_CREATED_STATUS } = require('./utils/statusCodes');

const app = express();
app.use(express.json());

// não remova e nem modifique esse endpoint
app.get('/', validateNameField, (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = generateToken();
  return res.status(201).json({ token });
});

app.post('/activities',

  validateNameField, 
  validatePriceField, 
  validateDescriptionField,
  validateCreatedAtField,
  validateRatingField,
  validateDifficultyField,
  authenticateToken,

  (_req, res) => {
  res.status(HTTP_CREATED_STATUS).json(
  { message: 'Atividade cadastrada com sucesso!' },
  );
});

module.exports = app;