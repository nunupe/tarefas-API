# API Tarefas - Node.Js + Express
Desenvolver uma API REST com Node.js e Express para gerenciar tarefas (CRUD), utilizando
armazenamento em memória (array), aplicando regras de negócio e retornando os status HTTP
corretos.

## Pré-Requisitos
- Node.js instalado
- Postman

  ## Tais depêndencias
 - npm init -y
 - npm install express

## Como rodar
```bash
npm i 
```

### Iniciar o servidor
```bash
node index.js
```

### Acessar
Abra o navegador em: `http://localhost:3000`

## Endpoints

### Filmes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tarefas` |Lista todas as tarefas |
| GET | `/tarefas/:id` | Buscar uma tarefa específica |
| PUT | `/tarefas/` | Atualizar uma tarefa |
| DELETE | 	`/tarefas/id:` | Deletar a tarefa |
| POST | `/tarefas/:id` | Cria uma nova tarefa |


## As tarefas possuem as seguintes propriedades:
- id
- title
- description
- Status

  


## Tecnologias
- Node.js
- Express


  ## Notas
  - Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
    




