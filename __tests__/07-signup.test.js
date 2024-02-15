const frisby = require('frisby');
const { url, signup } = require('./utils/requests');

describe('07 - Crie um endpoint POST com a rota /signup', () => {
  it('Será validado que não é possível registrar uma pessoa usuária sem informar o campo "email', () => {
    return frisby
    .post(`${url}/signup`, signup.noEmailRequest)
    .expect('status', 401)
    .expect('json', 'message', 'Campos ausentes!');
  });

  it('Será validado que não é possível registrar uma pessoa usuária sem informar o campo "password', () => {
    return frisby
    .post(`${url}/signup`, signup.noPasswordRequest)
    .expect('status', 401)
    .expect('json', 'message', 'Campos ausentes!');
  });

  it('Será validado que não é possível registrar uma pessoa usuária sem informar o campo "firstName', () => {
    return frisby
    .post(`${url}/signup`, signup.noFirstNameRequest)
    .expect('status', 401)
    .expect('json', 'message', 'Campos ausentes!');
  });

  it('Será validado que não é possível registrar uma pessoa usuária sem informar o campo "phone', () => {
    return frisby
    .post(`${url}/signup`, signup.noPhoneRequest)
    .expect('status', 401)
    .expect('json', 'message', 'Campos ausentes!');
  });

  it('Será validado que é gerado um token aleatório ao cadastrar uma pessoa com sucesso', async () => {
    const {json: { token }} = await frisby
    .post(`${url}/signup`, signup.okSignupRequest)
    .expect('status', 201)
    expect(token.length).toEqual(16);
  });
})
