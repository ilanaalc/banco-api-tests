const request = require('supertest');
const { expect } = require('chai');

describe ('Login', () => {   
    describe ('POST /login', () => { //todos os testes estão relacionados ao POST /login
        it ('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => { //usa o supertest para fazer uma requisição para uma api passando uma credencial válida
            
            //Faz uma requisição com o supertest via POST com credenciais validas para o POST /login
            const resposta = await request('http://localhost:3000')

            //Define o método que vai ser usado e indentifica o endpoint
                .post('/login')

            ///Adiciona o header
                .set('Content-Type', 'application/json')

            //Adicinona body
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            //Faz as validações do status code e resposta do body da requisição com o chai
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        });
    });
});