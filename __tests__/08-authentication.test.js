const frisby = require('frisby');
const { url, signup, activities } = require('./utils/requests');

describe('08 - Crie um middleware de autenticação ao endpoint POST com a rota /activities', () => {
  it('Será validado que não é possivel cadastrar uma atividade sem informar um token', async () => {
    return frisby
    .setup({ request: { headers: { Authorization: '' } }})
    .post(`${url}/activities`, activities.okRequest)
    .expect('status', 401)
    .expect('json', 'message', 'Token inválido!');
  });

  it('Será validado que não é possivel cadastrar uma atividade com um token inválido', async () => {
    return frisby
    .setup({ request: { headers: { Authorization: 'abcdergt' } }})
    .post(`${url}/activities`, activities.okRequest)
    .expect('status', 401)
    .expect('json', 'message', 'Token inválido!');
  });

  it('Será validado que é possivel cadastrar uma atividade utilizando o token retornado pela rota /signup', async () => {
    const { json: { token }} = await frisby
      .post(`${url}/signup`, signup.okSignupRequest);
    return frisby
      .setup({ request : { headers: { Authorization: token } } })
      .post(`${url}/activities`, activities.okRequest)
      .expect('status', 201)
      .expect('json', 'message', 'Atividade cadastrada com sucesso!')
  });
})