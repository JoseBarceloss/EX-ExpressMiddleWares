const frisby = require('frisby');
const { url, activities } = require('./utils/requests');
const setupFrisbyRequest = require('./utils/setupFrisbyRequest');

describe('05 - Crie um middleware para validar o campo "rating"', () => {
  beforeAll(() => setupFrisbyRequest());
  it('Será validado que não é possivel cadastrar uma atividade o campo "rating" não sendo um inteiro', () => {
    return frisby
    .post(`${url}/activities`, activities.floatRatingRequest)
    .expect('status', 400)
    .expect('json', 'message', 'O campo rating deve ser um número inteiro entre 1 e 5');
  });

  it('Será validado que não é possivel cadastrar uma atividade o campo "rating" menor do que 1', () => {
    return frisby
    .post(`${url}/activities`, activities.zeroRatingRequest)
    .expect('status', 400)
    .expect('json', 'message', 'O campo rating deve ser um número inteiro entre 1 e 5');
  });

  it('Será validado que não é possivel cadastrar uma atividade o campo "rating" maior do que 5', () => {
    return frisby
    .post(`${url}/activities`, activities.biggerRatingRequest)
    .expect('status', 400)
    .expect('json', 'message', 'O campo rating deve ser um número inteiro entre 1 e 5');
  });
});
