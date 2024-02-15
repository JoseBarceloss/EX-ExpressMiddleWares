const frisby = require('frisby');
const { url, activities } = require('./utils/requests');
const setupFrisbyRequest = require('./utils/setupFrisbyRequest');

describe('06 - Crie um middleware para validar o campo "difficulty"', () => {
  beforeAll(() => setupFrisbyRequest());
  it('Será validado que não é possivel cadastrar uma atividade com o campo "difficulty" diferente de "Fácil", "Médio", ou "Difícil"', () => {
    return frisby
    .post(`${url}/activities`, activities.invalidDifficultyRequest)
    .expect('status', 400)
    .expect('json', 'message', 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'');
  });
});
