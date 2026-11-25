# Projeto Full Stack MVC - Cadastro de Produtos

Projeto didatico com HTML, CSS e JavaScript no Front-end, Node.js e Express no Back-end e MySQL no banco de dados (XAMPP).

## 1. Requisitos

- Node.js instalado (versao LTS recomendada).
- XAMPP instalado.
- Navegador atualizado.
- Editor de codigo, como Visual Studio Code.

## 2. Estrutura de pastas

```text
fullstack_mvc_produtos/
├── config/
│   └── database.js
├── controllers/
│   └── produtoController.js
├── database/
│   └── loja.sql
├── models/
│   └── produtoModel.js
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── index.html
├── routes/
│   └── produtoRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## 3. Iniciar o MySQL pelo XAMPP

1. Abra o **XAMPP Control Panel**.
2. Clique em **Start** na linha do Apache (opcional, para acessar o phpMyAdmin).
3. Clique em **Start** na linha do MySQL.
4. Aguarde o MySQL ficar ativo.
5. Clique em **Admin** na linha do MySQL para abrir o phpMyAdmin.

> O Apache e necessario para abrir o phpMyAdmin pelo painel. O projeto em si sera servido pelo Node.js.

## 4. Criar o banco de dados

1. No phpMyAdmin, abra a aba **Importar**.
2. Clique em **Escolher arquivo**.
3. Selecione `database/loja.sql`, que esta dentro da pasta do projeto.
4. Clique em **Importar/Executar**.
5. Confira se o banco `loja` e a tabela `produtos` foram criados.

O script tambem insere tres produtos de exemplo.

## 5. Configurar o arquivo .env

1. Na pasta principal do projeto, copie o arquivo `.env.example`.
2. Renomeie a copia para `.env` (sem `.example`).
3. Abra o `.env` e confira as configuracoes:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=loja
PORT=3000
```

No XAMPP, o usuario normalmente e `root` e a senha fica vazia por padrao. Se voce configurou uma senha no MySQL, informe-a em `DB_PASSWORD`.

**Importante:** nao compartilhe o arquivo `.env` nem envie esse arquivo para repositorios publicos.

## 6. Instalar as dependencias do Node.js

1. Abra a pasta do projeto no Visual Studio Code.
2. Abra o terminal integrado (menu **Terminal > Novo Terminal**).
3. Confira se o terminal esta na pasta principal do projeto.
4. Execute:

```bash
npm install
```

Esse comando instala Express, mysql2, dotenv e cors, alem do nodemon para desenvolvimento.

## 7. Executar o projeto

No terminal, execute:

```bash
npm start
```

Se tudo estiver correto, aparecera:

```text
Servidor rodando em http://localhost:3000
```

Abra no navegador:

```text
http://localhost:3000
```

Nao abra o `index.html` diretamente pelo arquivo e nao e necessario usar Live Server. O proprio Express entrega os arquivos da pasta `public`.

Para desenvolvimento com reinicio automatico ao alterar arquivos, use:

```bash
npm run dev
```

## 8. Testar as quatro operacoes

A tela permite cadastrar, listar, editar e excluir produtos.

| Acao na tela | Metodo HTTP | Comando SQL executado |
|---|---|---|
| Abrir/atualizar a lista | GET | SELECT |
| Cadastrar produto | POST | INSERT |
| Editar e salvar | PUT | UPDATE |
| Excluir | DELETE | DELETE |

### Endpoints da API

| Metodo | Rota | Finalidade |
|---|---|---|
| GET | `/api/produtos` | Lista todos os produtos |
| GET | `/api/produtos/1` | Busca o produto de ID 1 |
| POST | `/api/produtos` | Cadastra um produto |
| PUT | `/api/produtos/1` | Atualiza o produto de ID 1 |
| DELETE | `/api/produtos/1` | Exclui o produto de ID 1 |

Exemplo de corpo JSON para POST e PUT:

```json
{
  "nome": "Webcam",
  "descricao": "Webcam USB Full HD",
  "preco": 159.90
}
```

## 9. Entendendo o MVC

- **Model (`models/`)**: executa os comandos SQL e acessa o MySQL.
- **View (`public/`)**: contem a interface HTML, CSS e JavaScript exibida no navegador.
- **Controller (`controllers/`)**: recebe a requisicao, valida os dados, chama o Model e devolve a resposta.
- **Routes (`routes/`)**: define os caminhos e metodos HTTP que direcionam as requisicoes para o Controller.
- **Config (`config/`)**: configura a conexao com o banco de dados.
- **server.js**: configura e inicia a aplicacao Express.

Fluxo de uma consulta:

```text
Navegador
   |
   | GET /api/produtos
   v
Routes (produtoRoutes.js)
   |
   v
Controller (produtoController.js)
   |
   v
Model (produtoModel.js)
   |
   v
MySQL (SELECT)
   |
   v
Resposta JSON para o navegador
```

## 10. Problemas comuns

### Erro de conexao com o banco

- Verifique se o MySQL esta iniciado no XAMPP.
- Confira usuario, senha, porta e nome do banco no `.env`.
- Verifique se o banco `loja` foi criado.

### Erro `ECONNREFUSED`

O Node.js nao conseguiu acessar o MySQL. Confira se o MySQL esta ativo e se a porta configurada e a mesma do XAMPP.

### Erro `ER_BAD_DB_ERROR`

O banco `loja` nao existe ou o nome no `.env` esta diferente. Importe novamente `database/loja.sql`.

### Erro `EADDRINUSE`

A porta 3000 ja esta sendo utilizada. Feche o outro servidor ou altere `PORT` no `.env`.

### Alterei o codigo, mas nada mudou

Atualize o navegador. Se alterou arquivos do Back-end, reinicie `npm start` ou utilize `npm run dev`.

---

**Observacao didatica:** este projeto e uma base para estudos locais. Antes de publicar na internet, implemente autenticacao, autorizacao, validacoes adicionais, protecao de seguranca, controle de acesso e configuracoes adequadas de producao.
