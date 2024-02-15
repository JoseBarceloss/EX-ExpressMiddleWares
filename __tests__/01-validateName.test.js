const frisby = require('frisby');
const { activities, url } = require('./utils/requests')
const setupFrisbyRequest = require('./utils/setupFrisbyRequest');

describe('01 - Crie um middleware para validar o campo "name"', () => {
  beforeAll(() => setupFrisbyRequest());
  it('Será validado que o não é possivel cadastrar uma atividade sem o campo "name"', () => {
    return frisby
      .post(`${url}/activities`, activities.noNameRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo name é obrigatório')
  });

  it('Será validado que não é possivel cadastrar uma atividade com o campo "name" menor do que 4 caracteres', () => {
    return frisby
      .post(`${url}/activities`, activities.smallNameRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo name deve ter pelo menos 4 caracteres');
  });
});
