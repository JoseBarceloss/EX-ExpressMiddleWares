const frisby = require('frisby');
const { url, activities } = require('./utils/requests');
const setupFrisbyRequest = require('./utils/setupFrisbyRequest');

describe('04 - Crie um middleware para validar o campo "createdAt" no formato "dd/mm/aaaa"', () => {
  beforeAll(() => setupFrisbyRequest());
  it('Será validado que não é possivel cadastrar uma atividade com o campo "createdAt" tendo formato inválido', () => {
    return frisby
      .post(`${url}/activities`, activities.invalidCreatedAtRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'');
  });
});
