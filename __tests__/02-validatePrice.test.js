const frisby = require('frisby');
const { url, activities } = require('./utils/requests');
const setupFrisbyRequest = require('./utils/setupFrisbyRequest');

describe('02 - Crie um middleware para validar o campo "price"', () => {
  beforeAll(() => setupFrisbyRequest());
  it('Será validado que não é possivel cadastrar uma atividade sem o campo "price"', () => {
    return frisby
      .post(`${url}/activities`, activities.noPriceRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo price é obrigatório')
  })

  it('Será validado que não é possivel cadastrar uma atividade com o campo "price" não numérico', () => {
    return frisby
      .post(`${url}/activities`, activities.stringPriceRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo price deve ser um número maior ou igual a zero');
  })

  it('Será validado que não é possivel cadastrar uma atividade com o campo "price" negativo', () => {
    return frisby
      .post(`${url}/activities`, activities.negativePriceRequest)
      .expect('status', 400)
      .expect('json', 'message', 'O campo price deve ser um número maior ou igual a zero');
  });

  it('Será validado que é possivel cadastrar uma atividade com o campo "price" igual a zero', () => {
    return frisby
      .post(`${url}/activities`, activities.okRequest)
      .expect('status', 201)
      .expect('json', 'message', 'Atividade cadastrada com sucesso!');
  });
})