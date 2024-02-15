const frisby = require('frisby');
const { url, activities } = require('./utils/requests');
const setupFrisbyRequest = require('./utils/setupFrisbyRequest');

describe('03 - Crie um middleware para validar o campo "description", que possui as chaves "createdAt", "rating" e "difficulty"', () => {
  beforeAll(() => setupFrisbyRequest());
  it('Será validado que não é possivel cadastrar uma atividade sem o campo "description"', () => {
    return frisby
      .post(`${url}/activities`, activities.noDescriptionRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo description é obrigatório');
  });

  it('Será validado que não é possivel cadastrar uma atividade com o campo "description" sem a chave "createdAt"', () => {
    return frisby
      .post(`${url}/activities`, activities.noCreatedAtRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo createdAt é obrigatório');
  });

  it('Será validado que não é possivel cadastrar uma atividade com o campo "description" sem a chave "rating"', () => {
    return frisby
      .post(`${url}/activities`, activities.noRatingRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo rating é obrigatório');
  });

  it('Será validado que não é possivel cadastrar uma atividade com o campo "description" sem a chave "difficulty"', () => {
    return frisby
      .post(`${url}/activities`, activities.noDifficultyRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo difficulty é obrigatório');
  });
});
