# banco-api-tests

## Objetivo

Automatizar testes de API REST para o projeto [banco-api](https://github.com/juliodelimas/banco-api), contribuindo com a qualidade e o correto funcionamento dos endpoints.

## Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Asserções:** [Chai](https://www.chaijs.com/)
- **Requisições HTTP:** [Supertest](https://github.com/ladjs/supertest)
- **Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)

## Estrutura de Diretórios

```
├── fixtures/                # Dados de entrada para os testes (JSON)
│   ├── postLogin.json
│   └── postTranferencias.json
├── helpers/                 # Funções auxiliares para os testes
│   └── autenticacao.js
├── mochawesome-report/      # Relatórios HTML gerados automaticamente
│   ├── mochawesome.html
│   └── ...
├── test/                    # Scripts de teste
│   ├── login.test.js
│   └── transferencia.test.js
├── package.json             # Dependências e scripts do projeto
└── .env                     # Variáveis de ambiente (criar manualmente)
```

## Formato do arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

Altere o valor conforme o endereço da API a ser testada.

## Comandos Úteis

Instale as dependências:

```bash
npm install
```

Execute todos os testes:

```bash
npm test
```

Gere o relatório Mochawesome (após rodar os testes):

O relatório será gerado automaticamente no diretório `mochawesome-report/` como um arquivo HTML. Para visualizar, abra `mochawesome-report/mochawesome.html` no navegador.

## Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

