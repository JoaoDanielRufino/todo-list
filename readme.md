# Desafio Técnico - Fullstack

## Todo List

Foi construído um backend e frontend para cirar uma aplicação similar a um Quadro de Kanban

## Backend

Para rodar a API será necessário ter o docker instalado.

### Env

É necessário criar um arquivo .env de acordo com o .env.example

### Executando a API sem docker

Entre na pasta backend:

```bash
cd backend
```

Para subir o banco de dados, execute o comando:

```bash
docker-compose up db
```

Para subir a API, execute os comandos:

```bash
yarn
yarn build
yarn start
```

### Execução com docker

Entre na pasta backend:

```bash
cd backend
```

Para rodar a API com docker, execute o comando:

```bash
docker-compose up
```

O servidor estará rodando na porta 5000

## Frontend

### Execução sem docker

Entre na pasta frontend

```bash
cd frontend
```

Execute os comandos para subir o frontend

```bash
yarn
yarn start
```

### Execução com docker

Entre na pasta frontend

```bash
cd frontend
```

Execute o comando para subir o frontend

```bash
docker-compose up
```

O frontend estará rodando na porta 3000
