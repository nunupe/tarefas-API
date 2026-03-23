// primeiro precisamos criar o app usando o express

const express = require("express")
const app = express()

// Permitir aceita JSON na requisicao
app.use(express.json())

 tarefas = [
    {
        id: 1,
        title: "Documentação",
        description: "Preencher a documentação, com base nos dados necessários",
        status: "Pendente"
    }
]

app.get("/tarefas", (req, res) => {
    res.json(tarefas)
})


app.get("/tarefas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id)

    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada" })
    }
    res.json(tarefa)
})

app.post("/tarefas", (req, res) => {
    const { title, description } = req.body

    if (!title) {
        return res.status(400).json({ erro: "O título é obrigatório" })
    }

    const novaTarefa = {
        id: tarefas.length + 1, 
        title,
        description: description || "",
        status: "Pendente"
    }

    tarefas.push(novaTarefa)
    res.status(201).json(novaTarefa)
})


app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { title, description, status } = req.body
    
    const index = tarefas.findIndex(t => t.id === id)

    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada" })
    }

    if (tarefas[index].status === 'Concluída') {
        return res.status(400).json({ erro: "Não é possível alterar uma tarefa concluída" })
    }

    tarefas[index] = {
        ...tarefas[index],
        title: title || tarefas[index].title,
        description: description || tarefas[index].description,
        status: status || tarefas[index].status
    }

    res.json(tarefas[index])
})


app.delete("/tarefas/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = tarefas.findIndex(t => t.id === id)

    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada" })
    }

    tarefas.splice(index, 1)
    res.status(204).send()
})


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})