const express = require("express")
const alunos = require("../dados.json")

const mostrarAluno = (req, res) => {
    calcularMedia()
    res.send(alunos)
}

const app = express()
app.use(express.urlencoded({ extended: true}))
const porta = 3000

const novoAluno = (req, res) => {
    if (req.body){
        res.send("Aluno cadastrado");
        alunos.push(req.body)
    } else {
        res.send("Erro ao cadastrar o Alunos")
    }
}

const calcularMedia = (req, res) => {
    alunos.forEach(a => {
        a.media = (parseFloat(a.nota1) + parseFloat(a.nota2) + parseFloat(a.nota3))/3
    })
    
}

//rota
app.get("/", mostrarAluno)
app.post("/", novoAluno)
app.post("/media", calcularMedia)

app.listen(porta, () => {
    console.log(`Servidor: http://localhost:${porta}`)
})