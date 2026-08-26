# Node.js — Introdução ao Backend com JavaScript

## 1. O que é o Node.js?

O **Node.js** é um ambiente que permite executar **JavaScript fora do navegador**.

Normalmente, quando pensamos em JavaScript, pensamos em:

```text
HTML → estrutura
CSS → aparência
JavaScript → comportamento
```

Esse JavaScript normalmente é executado pelo navegador, como Chrome, Edge ou Firefox.

Com o Node.js, podemos executar JavaScript diretamente no computador ou em um servidor:

```text
                 JAVASCRIPT
                     │
          ┌──────────┴──────────┐
          │                     │
      Navegador              Node.js
          │                     │
       Frontend              Backend
          │                     │
       HTML/CSS            Servidores
                          APIs
                          Banco de dados
                          Autenticação
                          Arquivos
```

De forma simples:

> **Node.js permite utilizar JavaScript para desenvolver aplicações no lado do servidor (Backend).**

---

# 2. Para que serve o Node.js?

Com Node.js podemos criar:

- Servidores web
- APIs
- Sistemas de login
- Sistemas conectados a bancos de dados
- Backends de e-commerce
- Backends para aplicativos
- Sistemas em tempo real
- Sistemas para manipulação de arquivos
- Sistemas automatizados

Um exemplo bastante comum:

```text
Frontend
HTML + CSS + JavaScript
          │
          │ HTTP
          ▼
       Node.js
          │
          ▼
       MySQL
```

O usuário acessa uma página.

O JavaScript do frontend pode fazer uma requisição para o servidor:

```text
"Me dê a lista de usuários"
```

O Node.js recebe essa requisição, consulta o banco de dados e devolve os dados.

---

# 3. Node.js é uma linguagem?

Não.

Isso é muito importante.

| Tecnologia | O que é? |
|---|---|
| JavaScript | Linguagem de programação |
| Node.js | Ambiente de execução do JavaScript |
| Express | Framework para Node.js |
| MySQL | Banco de dados |
| npm | Gerenciador de pacotes |

Podemos pensar assim:

```text
JavaScript
    ↓
Node.js
    ↓
Express
    ↓
API
    ↓
MySQL
```

---

# 4. Instalando o Node.js

Depois de instalar o Node.js, podemos verificar se ele está funcionando pelo terminal.

```bash
node --version
```

Ou:

```bash
node -v
```

Você deverá receber algo parecido com:

```text
v22.x.x
```

Também podemos verificar o npm:

```bash
npm -v
```

O **npm** é utilizado para instalar pacotes e bibliotecas para nossos projetos.

---

# 5. Primeiro programa com Node.js

Crie uma pasta para o projeto:

```text
meu-projeto
```

Dentro dela, crie o arquivo:

```text
app.js
```

Coloque o seguinte código:

```javascript
console.log("Olá, mundo!");
```

No terminal, entre na pasta:

```bash
cd meu-projeto
```

E execute:

```bash
node app.js
```

Resultado:

```text
Olá, mundo!
```

Perceba a diferença.

No navegador:

```javascript
console.log("Olá");
```

é executado pelo navegador.

Com:

```bash
node app.js
```

é o **Node.js** que está executando o JavaScript.

---

# 6. Criando nosso primeiro servidor

Agora vamos criar algo mais interessante.

Vamos criar um servidor HTTP utilizando apenas recursos nativos do Node.js.

Estrutura do projeto:

```text
servidor/
└── server.js
```

Dentro do `server.js`:

```javascript
const http = require("http");

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h1>Olá! Meu primeiro servidor Node.js!</h1>");
});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
```

Agora execute:

```bash
node server.js
```

Você verá no terminal:

```text
Servidor rodando em http://localhost:3000
```

Abra o navegador e acesse:

```text
http://localhost:3000
```

Você deverá visualizar:

```text
Olá! Meu primeiro servidor Node.js!
```

---

# 7. Entendendo o código

Vamos analisar o código por partes.

## 7.1 Importando o módulo HTTP

```javascript
const http = require("http");
```

O Node.js possui vários módulos nativos.

O módulo `http` fornece recursos para trabalhar com o protocolo HTTP.

Por exemplo:

```text
Navegador
    │
    │ HTTP
    ▼
Servidor Node.js
```

---

# 8. Criando o servidor

Temos:

```javascript
const servidor = http.createServer((req, res) => {
```

Aqui estamos criando nosso servidor.

Existem dois objetos importantes:

```javascript
req
```

e:

```javascript
res
```

## 8.1 `req`

`req` significa **request**.

Representa a requisição que chegou ao servidor.

Por exemplo:

```text
GET /usuarios
```

O cliente está solicitando:

```text
/usuarios
```

utilizando o método HTTP:

```text
GET
```

---

## 8.2 `res`

`res` significa **response**.

Representa a resposta que o servidor vai devolver ao cliente.

Podemos pensar no processo assim:

```text
Cliente
   │
   │ request
   ▼
Node.js
   │
   │ response
   ▼
Cliente
```

---

# 9. Enviando o status da resposta

Temos:

```javascript
res.writeHead(200, {
    "Content-Type": "text/html"
});
```

O número `200` representa:

```text
200 OK
```

Ou seja:

> A requisição foi processada com sucesso.

Já:

```javascript
"Content-Type": "text/html"
```

informa que estamos enviando conteúdo HTML.

---

# 10. Enviando conteúdo

Depois temos:

```javascript
res.end("<h1>Olá! Meu primeiro servidor Node.js!</h1>");
```

O servidor está enviando essa resposta para o navegador.

O navegador recebe:

```html
<h1>Olá! Meu primeiro servidor Node.js!</h1>
```

E renderiza:

# Olá! Meu primeiro servidor Node.js!

---

# 11. Colocando o servidor para escutar

Por último:

```javascript
servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
```

Estamos dizendo:

> Servidor, fique esperando requisições na porta 3000.

A porta utilizada é:

```text
3000
```

Então nosso endereço é:

```text
localhost:3000
```

`localhost` significa que estamos acessando o próprio computador.

---

# 12. Criando rotas

Podemos fazer o servidor responder coisas diferentes dependendo da URL.

Por exemplo:

```text
/             → Página inicial
/sobre        → Página sobre
/usuarios     → Lista de usuários
```

Podemos fazer:

```javascript
const http = require("http");

const servidor = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (req.url === "/") {

        res.end("<h1>Página inicial</h1>");

    } else if (req.url === "/sobre") {

        res.end("<h1>Página sobre</h1>");

    } else if (req.url === "/usuarios") {

        res.end("<h1>Lista de usuários</h1>");

    } else {

        res.writeHead(404);
        res.end("<h1>Página não encontrada</h1>");

    }

});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
```

Agora podemos acessar:

```text
http://localhost:3000/
```

Resultado:

```text
Página inicial
```

Ou:

```text
http://localhost:3000/sobre
```

Resultado:

```text
Página sobre
```

Ou:

```text
http://localhost:3000/usuarios
```

Resultado:

```text
Lista de usuários
```

Se acessarmos:

```text
http://localhost:3000/teste
```

receberemos:

```text
Página não encontrada
```

com status:

```text
404
```

---

# 13. O que é uma rota?

Uma rota define o que o servidor deve fazer quando receber uma determinada requisição.

Podemos pensar:

```text
Método HTTP + URL
        │
        ▼
      Rota
        │
        ▼
     Resposta
```

Por exemplo:

```text
GET /usuarios
```

Pode significar:

> Retorne todos os usuários.

Outro exemplo:

```text
GET /usuarios/10
```

Pode significar:

> Retorne o usuário de ID 10.

Mais adiante, com Express, trabalharemos com rotas de forma muito mais organizada.

---

# 14. Métodos HTTP

No desenvolvimento de APIs, alguns métodos HTTP são muito importantes.

| Método | Utilização |
|---|---|
| GET | Buscar dados |
| POST | Criar dados |
| PUT | Atualizar dados |
| PATCH | Atualizar parcialmente |
| DELETE | Excluir dados |

Exemplo:

```text
GET /usuarios
```

Buscar usuários.

```text
POST /usuarios
```

Criar um usuário.

```text
PUT /usuarios/10
```

Atualizar o usuário 10.

```text
DELETE /usuarios/10
```

Excluir o usuário 10.

Esses métodos serão fundamentais quando começarmos a desenvolver APIs REST.

---

# 15. Node.js e Express

Criar servidores diretamente com o módulo `http` é excelente para entender como o Node.js funciona.

Porém, em aplicações maiores, normalmente utilizamos frameworks.

Um dos mais conhecidos é o **Express**.

Podemos pensar na estrutura:

```text
Backend
│
├── Node.js
│
├── Express
│
├── Rotas
│   ├── GET
│   ├── POST
│   ├── PUT
│   └── DELETE
│
├── Controllers
│
├── Banco de dados
│   └── MySQL
│
└── Autenticação
```

---

# 16. Backend com Node.js

Um backend completo pode seguir uma estrutura semelhante a:

```text
Frontend
    │
    │ GET /usuarios
    ▼
Express + Node.js
    │
    │ SQL
    ▼
MySQL
    │
    │ Dados
    ▼
Express
    │
    │ JSON
    ▼
Frontend
```

Por exemplo, uma API poderia responder:

```json
[
    {
        "id": 1,
        "nome": "João"
    },
    {
        "id": 2,
        "nome": "Maria"
    }
]
```

O frontend poderia utilizar esses dados para montar uma tabela:

```text
+----+--------+
| ID | Nome   |
+----+--------+
| 1  | João   |
| 2  | Maria  |
+----+--------+
```

---

# 17. Exemplo de uma aplicação Backend

Uma aplicação poderia ser estruturada assim:

```text
Sistema
│
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
└── Backend
    ├── Node.js
    ├── Express
    ├── Rotas
    ├── Controllers
    ├── Services
    ├── Banco de dados
    └── Autenticação
```

O frontend conversa com o backend através de requisições HTTP.

Exemplo:

```text
Frontend
   │
   │ POST /usuarios
   │
   │ {
   │   "nome": "Carlos",
   │   "email": "carlos@email.com"
   │ }
   ▼
Node.js + Express
   │
   ▼
MySQL
   │
   ▼
Usuário cadastrado
```

---

# 18. Caminho de estudos

Uma sequência interessante para aprender Backend com JavaScript é:

```text
1. JavaScript
       ↓
2. Node.js
       ↓
3. HTTP
       ↓
4. Express
       ↓
5. APIs REST
       ↓
6. JSON
       ↓
7. CRUD
       ↓
8. MySQL
       ↓
9. Prisma
       ↓
10. Autenticação e Login
```

## 18.1 JavaScript

Primeiro é importante dominar:

- Variáveis
- Tipos de dados
- Operadores
- Condicionais
- Laços de repetição
- Arrays
- Objetos
- Funções
- Arrow Functions
- Métodos de arrays
- Destructuring
- Módulos
- Promises
- Async/Await

---

## 18.2 Node.js

Depois:

- O que é Node.js
- npm
- `package.json`
- Módulos
- `require`
- `import/export`
- Sistema de arquivos
- HTTP
- Criação de servidores
- Variáveis de ambiente

---

## 18.3 Express

Depois:

- Instalação
- Servidor Express
- Rotas
- Middleware
- Request
- Response
- Parâmetros
- Query Params
- Body
- Status HTTP
- Tratamento de erros

---

## 18.4 APIs REST

Depois:

```text
GET
POST
PUT
PATCH
DELETE
```

E conceitos como:

```text
Endpoint
Request
Response
Status Code
JSON
Headers
Body
```

---

## 18.5 CRUD

CRUD significa:

```text
C → Create  → Criar
R → Read    → Ler
U → Update  → Atualizar
D → Delete  → Excluir
```

Por exemplo, para usuários:

```text
POST   /usuarios
GET    /usuarios
GET    /usuarios/:id
PUT    /usuarios/:id
DELETE /usuarios/:id
```

---

# 19. Resumo

O Node.js permite executar JavaScript fora do navegador.

Ele é muito utilizado para desenvolvimento Backend.

Podemos utilizar Node.js para:

- Criar servidores
- Criar APIs
- Trabalhar com banco de dados
- Criar sistemas de autenticação
- Criar aplicações em tempo real
- Manipular arquivos
- Criar aplicações web

A ideia principal é:

```text
JavaScript
    │
    ▼
Node.js
    │
    ▼
Backend
    │
    ├── Express
    ├── APIs
    ├── Banco de dados
    ├── Autenticação
    └── Regras de negócio
```

O primeiro servidor criado foi:

```javascript
const http = require("http");

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h1>Olá! Meu primeiro servidor Node.js!</h1>");
});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
```

Esse exemplo já apresenta os principais conceitos iniciais:

- Node.js
- HTTP
- Servidor
- Request
- Response
- Status HTTP
- Porta
- Rotas
- `localhost`

