const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const postLogin = require("../fixtures/postLogin.json")

describe ('Login', () => {   
    describe ('POST /login', () => { //todos os testes estão relacionados ao POST /login
        it ('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => { //usa o supertest para fazer uma requisição para uma api passando uma credencial válida
            const bodyLogin = { ...postLogin }
            //Faz uma requisição com o supertest via POST com credenciais validas para o POST /login
            const resposta = await request(process.env.BASE_URL)

            //Define o método que vai ser usado e indentifica o endpoint
                .post('/login')

            ///Adiciona o header
                .set('Content-Type', 'application/json')

            //Adicinona body
                .send(bodyLogin)

            //Faz as validações do status code e resposta do body da requisição com o chai
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        });
    });
});