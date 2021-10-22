## Coodesh REST Back-end Challenge 2021

Código criado para o desafio relacionado à vaga de Backend NodeJS na Coodesh.

Repositório do Desafio: [https://github.com/bhayron/Back-end-Challenge-2021](https://github.com/bhayron/Back-end-Challenge-2021)

Projeto realizado por Bhayron Klivilan [bhayronklivilan@gmail.com](mailto:bhayronklivilan@gmail.com)

<img  src="readme.png"  alt="readme image">

> Linha adicional de texto informativo sobre o que o projeto faz. Sua introdução deve ter cerca de 2 ou 3 linhas. Não exagere, as pessoas não vão ler.

## Ferramentas Utilizadas

- AdonisJS (framework node) utilizando Typescript
- Swagger (documentação da api)
- Docker(virtualização e integração da api)
- MySQL(banco de dados utilizado na api)
- Japa(TDD-executor de testes unitarios)
- Lint e Prettier (formatação e qualidade do código)

## Instalação

Executar o comando para instalar as dependências:

```
$ yarn
# ou
$ npm install
```

## Arquivo de configuração

Criar um arquivo `.env` baseado no arquivo `.env.example`, editando os valores que já existem, caso necessário.

## Executar a aplicação com Docker

Executar o comando:

`$ docker-compose up `

OBS: esse comando inicializará a aplicação

## Executar teste da API

Para testar a API , execute:

```
$ yarn test
```

## Criar as tabelas do banco de dados

Para executar as migrations:

```
$ node ace migration:run
```

## Executar CRON JOB

Para importar os dados para a Base de Dados com a versão mais recente do [Random User](https://randomuser.me/documentation#format) :

```
$ node ace scheduler:run
```

## Acesso ao projeto

Após executar o projeto o mesmo poderá ser visualizado através da URL:

`http://localhost:{PORT}/`

Onde `{PORT}` é o valor da porta configurada no arquivo `.env`, por padrão é a 3333.

## Acesso a documentação (SWAGGER)

Acessar:
`http://localhost:{PORT}/docs`
