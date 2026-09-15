
# 1. Dúvida Back-end, servidor, Node.js e Express

## 1.1. O que é back-end?

O **back-end** é a parte da aplicação responsável por executar tarefas que acontecem nos bastidores.

Em um sistema de cadastro de alunos, por exemplo, o back-end pode:

- Receber dados enviados por um formulário.
- Validar se os dados estão corretos.
- Calcular informações.
- Cadastrar, consultar, alterar ou excluir dados.
- Conversar com um banco de dados.
- Enviar uma resposta para o front-end.

O usuário normalmente não vê o código do back-end. Ele interage com a tela, enquanto o back-end processa as solicitações.

## 1.2. O que é um servidor?

Um servidor é um computador ou programa preparado para **receber solicitações e fornecer respostas ou serviços**.

No desenvolvimento web, podemos criar um servidor utilizando o Node.js.

Imagine que um aluno acesse uma página de cadastro:

```text
1. FRONT-END
   O aluno preenche um formulário no navegador.
                     |
                     v
2. REQUISIÇÃO HTTP
   O navegador envia os dados para o servidor.
                     |
                     v
3. BACK-END
   Node.js e Express recebem e processam a solicitação.
                     |
                     v
4. DADOS
   O servidor pode consultar ou alterar um banco de dados.
                     |
                     v
5. RESPOSTA
   O servidor devolve o resultado ao navegador.
```

### Exemplo

O aluno solicita o cadastro de João:

1. O navegador envia os dados.
2. O servidor verifica as informações.
3. O servidor salva o cadastro.
4. O servidor responde: `Aluno cadastrado com sucesso!`

---

## 1.3. O que é o Node.js?

O **Node.js** é um ambiente que permite executar JavaScript fora do navegador.

Normalmente, pensamos em JavaScript como uma linguagem utilizada para tornar páginas HTML interativas. Com o Node.js, também podemos utilizar JavaScript para:

- Criar servidores.
- Desenvolver APIs.
- Acessar bancos de dados.
- Criar aplicações back-end.
- Ler e gravar arquivos.

### Analogia

Imagine um restaurante:

| Restaurante | Sistema web |
|---|---|
| Cliente faz um pedido | Navegador envia uma requisição |
| Garçom recebe o pedido | Express recebe a requisição |
| Cozinha prepara o pedido | Back-end processa os dados |
| Garçom entrega o pedido | Servidor envia a resposta |
| Cozinha e estoque | Regras de negócio e banco de dados |

O **Node.js** é o ambiente que permite executar o programa do servidor.

---

## 1.4. O que é o Express?

O **Express** é um framework para Node.js que facilita a criação de servidores e APIs.

Ele simplifica tarefas como:

- Criar rotas.
- Receber requisições HTTP.
- Enviar respostas.
- Trabalhar com JSON.
- Organizar o projeto em controllers e routes.
- Criar middlewares.

### Resumo

> Node.js é o ambiente que executa o JavaScript no servidor. Express é uma ferramenta que ajuda a organizar e construir aplicações web nesse ambiente.

---

# 2. Exemplo prático — Criando um servidor com Node.js e Express

Vamos criar um servidor que:

- Exibe uma mensagem inicial.
- Recebe um nome pela URL.
- Recebe dados de um aluno por meio de uma requisição POST.

## 2.1. Criar o projeto

Abra o terminal e execute:

```bash
mkdir servidor-revisao
cd servidor-revisao
npm init -y
npm install express
```

Esses comandos:

1. Criam uma pasta para o projeto.
2. Entram na pasta.
3. Criam o arquivo `package.json`.
4. Instalam o Express.

---

## 2.2. Criar o arquivo `server.js`

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

app.get("/aluno/:nome", (req, res) => {
    const nome = req.params.nome;

    res.send(`Olá, ${nome}! Bem-vindo ao servidor.`);
});

app.post("/alunos", (req, res) => {
    const aluno = req.body;

    res.json({
        mensagem: "Aluno recebido com sucesso!",
        dados: aluno
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
```

---

## 2.3. Entendendo o código

### `const express = require("express");`

Importa o Express para que ele possa ser utilizado no programa.

### `const app = express();`

Cria a aplicação Express.

A variável `app` será utilizada para configurar o servidor e suas rotas.

### `app.use(express.json());`

Configura um middleware que permite ao Express interpretar requisições cujo corpo contém JSON.

### `app.get("/", ...)`

Cria uma rota GET.

Quando alguém acessar a raiz do servidor, o Express executará a função e enviará uma mensagem.

### `req.params.nome`

Obtém o valor do parâmetro `nome` presente na URL.

Exemplo:

```text
/aluno/Luis
```

Nesse caso, o valor de `req.params.nome` será:

```text
Luis
```

### `req.body`

Acessa os dados enviados no corpo da requisição.

Nesse exemplo, os dados são recebidos em JSON.

### `res.send()`

Envia uma resposta ao cliente. Pode ser utilizado para enviar texto ou outros conteúdos.

### `res.json()`

Envia uma resposta no formato JSON.

### `app.listen(3000, ...)`

Inicia o servidor e faz com que ele fique escutando requisições na porta `3000`.

---

## 2.4. Executar o servidor

No terminal, execute:

```bash
node server.js
```

Se tudo estiver correto, será exibida uma mensagem parecida com:

```text
Servidor rodando em http://localhost:3000
```

---

## 2.5. Testar as rotas

### Teste 1 — Rota inicial

Acesse:

```text
http://localhost:3000/
```

Resposta esperada:

```text
Servidor funcionando!
```

### Teste 2 — Parâmetro na URL

Acesse:

```text
http://localhost:3000/aluno/Luis
```

Resposta esperada:

```text
Olá, Luis! Bem-vindo ao servidor.
```

### Teste 3 — Rota POST

Utilize o Postman, Insomnia ou outra ferramenta que envie requisições HTTP.

**Método:**

```text
POST
```

**URL:**

```text
http://localhost:3000/alunos
```

**Corpo JSON:**

```json
{
    "nome": "Luis",
    "idade": 17
}
```

**Resposta esperada:**

```json
{
    "mensagem": "Aluno recebido com sucesso!",
    "dados": {
        "nome": "Luis",
        "idade": 17
    }
}
```

> Importante: neste exemplo, os dados são apenas recebidos e devolvidos. Eles ainda não foram salvos em um banco de dados.

---

# 3. JavaScript com HTML

O HTML e o JavaScript trabalham juntos no front-end, mas possuem funções diferentes.

## 3.1. Qual é a função do HTML?

O **HTML** é uma linguagem de marcação utilizada para estruturar o conteúdo da página.

Ele define elementos como:

- Títulos.
- Parágrafos.
- Formulários.
- Botões.
- Campos de texto.
- Tabelas.
- Imagens.

### Exemplo

```html
<h1>Cadastro de aluno</h1>

<input type="text" placeholder="Digite seu nome">

<button>Cadastrar</button>
```

Esse código cria uma estrutura visual, mas o botão ainda não possui uma ação de cadastro programada.

---

## 3.2. Qual é a função do JavaScript?

O **JavaScript** é uma linguagem de programação que pode tornar a página dinâmica e interativa.

Ele permite:

- Ler o que foi digitado em um campo.
- Alterar textos e estilos.
- Responder a cliques.
- Validar formulários.
- Fazer cálculos.
- Criar e remover elementos HTML.
- Enviar requisições para o back-end.

### Comparação

| HTML | JavaScript |
|---|---|
| Constrói a estrutura da página. | Controla comportamentos e ações. |
| Cria um botão. | Define o que acontece quando o botão é clicado. |
| Cria um campo de texto. | Lê o conteúdo digitado. |
| Cria um espaço para mostrar resultados. | Atualiza esse espaço com uma resposta. |

---

# 4. Exemplo prático — HTML e JavaScript trabalhando juntos

Vamos criar uma página que recebe o nome de um aluno e mostra uma mensagem ao clicar em um botão.

## 4.1. Arquivo `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Revisão de JavaScript</title>
</head>
<body>

    <h1>Cadastro de aluno</h1>

    <label for="nome">Digite seu nome:</label>

    <input type="text" id="nome">

    <button id="botao">Enviar</button>

    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
```

## 4.2. Arquivo `script.js`

```javascript
const campoNome = document.getElementById("nome");

const botao = document.getElementById("botao");

const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const nomeDigitado = campoNome.value;

    resultado.textContent = `Olá, ${nomeDigitado}!`;

});
```

---

## 4.3. Explicação do JavaScript

### `document.getElementById("nome")`

Procura no HTML o elemento que possui:

```html
id="nome"
```

O JavaScript passa a ter acesso a esse campo por meio da variável `campoNome`.

### `const botao = document.getElementById("botao");`

Localiza o botão do HTML usando o seu `id`.

### `const resultado = document.getElementById("resultado");`

Localiza o parágrafo onde a mensagem será exibida.

### `addEventListener("click", ...)`

Diz ao JavaScript:

> Quando o botão for clicado, execute esta função.

### `campoNome.value`

Obtém o texto que o usuário digitou no campo.

### `resultado.textContent = ...`

Altera o texto do parágrafo HTML para mostrar a mensagem.

---

# 5. Como o JavaScript encontra os elementos HTML?

O JavaScript utiliza o **DOM**, sigla para *Document Object Model*.

O DOM é uma representação da estrutura HTML da página. Quando o navegador carrega o HTML, ele cria uma estrutura de objetos que o JavaScript pode consultar e modificar.

Exemplo de estrutura:

```text
document
└── body
    ├── h1
    ├── input#nome
    ├── button#botao
    └── p#resultado
```

Quando utilizamos:

```javascript
document.getElementById("nome");
```

Estamos dizendo:

> Dentro do documento HTML, encontre o elemento cujo ID é `nome`.

## Outros métodos importantes

| Método | Para que serve |
|---|---|
| `getElementById()` | Busca um elemento pelo ID. |
| `querySelector()` | Busca o primeiro elemento que corresponde a um seletor CSS. |
| `querySelectorAll()` | Busca todos os elementos que correspondem a um seletor. |
| `createElement()` | Cria um novo elemento HTML. |

---

# 6. Como o HTML e o JavaScript se conectam ao back-end?

Agora podemos juntar as duas dúvidas.

- HTML e JavaScript ficam no **front-end**.
- Node.js e Express ficam no **back-end**.
- O JavaScript pode utilizar `fetch()` para conversar com o servidor.

```text
FRONT-END
HTML + JavaScript
    |
    | fetch() — requisição HTTP
    v
BACK-END
Node.js + Express
    |
    | Processamento e regras do sistema
    v
BANCO DE DADOS
    |
    | Resposta JSON
    v
FRONT-END
JavaScript atualiza o HTML
```

---

# 7. Exemplo completo — HTML + JavaScript + Express

Vamos criar um exemplo em que:

1. O aluno digita o nome no HTML.
2. O JavaScript envia esse nome ao servidor.
3. O Express recebe o nome.
4. O servidor devolve uma mensagem.
5. O JavaScript atualiza o HTML.

## 7.1. Estrutura do projeto

```text
projeto-revisao/
├── server.js
└── public/
    ├── index.html
    └── script.js
```

---

## 7.2. Back-end — `server.js`

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.post("/saudacao", (req, res) => {
    const nome = req.body.nome;

    res.json({
        mensagem: `Olá, ${nome}! O servidor recebeu seu nome.`
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
```

### O que foi acrescentado?

#### `express.static("public")`

Permite que o servidor disponibilize os arquivos HTML e JavaScript da pasta `public`.

#### `app.post("/saudacao", ...)`

Cria uma rota POST chamada `/saudacao`.

#### `req.body.nome`

Acessa o nome enviado pelo front-end.

#### `res.json()`

Envia uma resposta no formato JSON.

---

## 7.3. Front-end — `public/index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Comunicação com o servidor</title>
</head>
<body>

    <h1>Enviar nome ao servidor</h1>

    <input
        type="text"
        id="nome"
        placeholder="Digite seu nome"
    >

    <button id="enviar">
        Enviar para o servidor
    </button>

    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
```

---

## 7.4. JavaScript — `public/script.js`

```javascript
const campoNome = document.getElementById("nome");

const botao = document.getElementById("enviar");

const resultado = document.getElementById("resultado");

botao.addEventListener("click", async () => {

    const nome = campoNome.value;

    const resposta = await fetch("/saudacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome
        })
    });

    const dados = await resposta.json();

    resultado.textContent = dados.mensagem;

});
```

---

## 7.5. Entendendo o `fetch()`

O `fetch()` é uma função do JavaScript que permite fazer requisições HTTP.

```javascript
const resposta = await fetch("/saudacao", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nome: nome
    })
});
```

### `fetch("/saudacao")`

Solicita comunicação com a rota `/saudacao`.

### `method: "POST"`

Informa que estamos enviando dados para o servidor.

### `headers`

Informa que o corpo da requisição está no formato JSON.

### `JSON.stringify(...)`

Transforma um objeto JavaScript em texto JSON para ser enviado.

### `await`

Espera a resposta da requisição assíncrona antes de continuar a execução daquela função.

Depois:

```javascript
const dados = await resposta.json();

resultado.textContent = dados.mensagem;
```

O JavaScript transforma a resposta em um objeto e coloca a mensagem no parágrafo HTML.

---

## 7.6. Como executar o projeto completo

1. Crie a estrutura de pastas e arquivos.
2. Abra o terminal na pasta do projeto.
3. Inicialize o projeto:

```bash
npm init -y
```

4. Instale o Express:

```bash
npm install express
```

5. Execute o servidor:

```bash
node server.js
```

6. Abra no navegador:

```text
http://localhost:3000
```

7. Digite um nome e clique no botão.

### O que acontece?

1. O HTML exibe o campo e o botão.
2. O JavaScript captura o clique e lê o nome.
3. O `fetch()` envia o nome ao Express.
4. O Express processa a requisição e devolve JSON.
5. O JavaScript atualiza o HTML com a resposta.

---


# 11. Resumo final

## Back

- O back-end é a parte da aplicação que processa as solicitações.
- O Node.js executa JavaScript fora do navegador.
- O Express facilita a criação de servidores e APIs.
- O servidor recebe requisições e envia respostas.
- O back-end pode conversar com bancos de dados.

## Front

- O HTML cria a estrutura da página.
- O JavaScript controla ações e comportamentos.
- O JavaScript pode ler dados dos campos HTML.
- O JavaScript pode alterar o conteúdo da página utilizando o DOM.
- O `addEventListener()` permite responder a eventos, como cliques.
- O `fetch()` permite conversar com o back-end.

## Ideia principal

> HTML cria a estrutura, JavaScript controla o comportamento, Node.js executa JavaScript no servidor e Express facilita a criação das rotas e APIs.
