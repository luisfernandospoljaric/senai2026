# Aula — Linguagens de Marcação e World Wide Web

**Curso:** Técnico em Desenvolvimento de Sistemas

---

##  Conteúdos

1. [Linguagens de Marcação](#1-linguagens-de-marcação)

   * [1.1 Definição](#11-o-que-é-uma-linguagem-de-marcação)
   * [1.2 Tipos](#12-tipos-de-linguagens-de-marcação)
2. [World Wide Web — WWW](#2-world-wide-web--www)

   * [2.1 Definição](#21-o-que-é-a-world-wide-web)
   * [2.2 Mudanças na Web](#22-mudanças-na-world-wide-web)
   * [2.3 Registro e Domínio](#23-registro-e-domínio)
   * [2.4 Hospedagem](#24-o-que-é-hospedagem)
   * [2.5 Mercado de Trabalho](#25-mercado-de-trabalho)
3. [Atividade Prática](#3-atividade-prática--primeira-página-web)
4. [Atividade em Grupo](#4-atividade--criando-uma-empresa-fictícia)
5. [Atividade de Pesquisa](#5-atividade-de-pesquisa)
6. [Atividade de Fixação](#6-atividade-de-fixação)
7. [Desafio](#7-desafio-para-os-alunos)
8. [Resumo](#8-resumo-para-o-quadro)

---

# 1. Linguagens de Marcação

## 1.1 O que é uma linguagem de marcação?

Uma **linguagem de marcação** é uma forma de estruturar e identificar informações dentro de um documento utilizando **marcadores (tags)** ou símbolos especiais.

Diferentemente de uma linguagem de programação tradicional, uma linguagem de marcação normalmente não tem como objetivo principal criar algoritmos ou realizar cálculos.

Ela serve principalmente para **descrever a estrutura e o significado de um conteúdo**.

### Exemplo

```html
<h1>Meu primeiro site</h1>

<p>Olá! Este é meu primeiro site.</p>
```

Temos:

```text
<h1>       → início do título
Meu primeiro site → conteúdo
</h1>      → fim do título
```

E:

```text
<p>        → início do parágrafo
Olá! ...   → conteúdo
</p>       → fim do parágrafo
```

O navegador interpreta essas marcações e apresenta o conteúdo visualmente.

---

## 1.2 Por que precisamos de marcação?

Imagine que temos apenas o seguinte texto:

```text
Portal Tech
Bem-vindo ao nosso site.
Cursos
Desenvolvimento de Sistemas
Informática
Contato
```

Para uma pessoa, é possível entender que:

* "Portal Tech" provavelmente é um título;
* "Bem-vindo..." é um parágrafo;
* "Cursos" pode ser outro título;
* os cursos são itens de uma lista;
* "Contato" pode ser um link ou seção.

Mas o computador precisa de informações mais claras sobre a **estrutura do documento**.

Podemos escrever:

```html
<h1>Portal Tech</h1>

<p>Bem-vindo ao nosso site.</p>

<h2>Cursos</h2>

<ul>
    <li>Desenvolvimento de Sistemas</li>
    <li>Informática</li>
</ul>

<a href="contato.html">Contato</a>
```

Agora o documento possui uma estrutura que o navegador consegue interpretar.

---

# 1.3 Linguagem de Marcação x Linguagem de Programação

Essa é uma diferença importante para os alunos.

| Linguagem de Marcação | Linguagem de Programação               |
| --------------------- | -------------------------------------- |
| Estrutura informações | Cria algoritmos e comportamentos       |
| Descreve conteúdo     | Processa dados                         |
| Utiliza marcações     | Utiliza comandos, funções e estruturas |
| HTML                  | JavaScript                             |
| XML                   | C                                      |
| Markdown              | Java                                   |
| SVG                   | Python                                 |

### Exemplo de HTML

```html
<h1>Calculadora</h1>

<p>Resultado: 10</p>
```

O HTML **estrutura** o conteúdo.

### Exemplo de JavaScript

```javascript
let a = 5;
let b = 5;

let resultado = a + b;

console.log(resultado);
```

O JavaScript **executa lógica**.

---

# 1.4 HTML

HTML significa:

> **HyperText Markup Language**

Em português:

> **Linguagem de Marcação de HiperTexto**

É utilizada para estruturar documentos que são exibidos em navegadores.

### Exemplo

```html
<!DOCTYPE html>

<html>
<head>
    <title>Meu site</title>
</head>

<body>

    <h1>Olá, mundo!</h1>

    <p>
        Este é meu primeiro site.
    </p>

</body>
</html>
```

---

# 1.5 Estrutura Básica do HTML

Podemos dividir um documento HTML em algumas partes.

```html
<!DOCTYPE html>

<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <title>Meu Site</title>

</head>

<body>

    <h1>Olá, mundo!</h1>

    <p>Meu primeiro site.</p>

</body>

</html>
```

### `<!DOCTYPE html>`

Informa ao navegador que estamos utilizando um documento HTML moderno.

---

### `<html>`

Representa o elemento raiz do documento.

```html
<html>

</html>
```

---

### `<head>`

Contém informações sobre o documento.

```html
<head>

    <title>Meu Site</title>

</head>
```

---

### `<title>`

Define o título que aparece na aba do navegador.

```html
<title>Portal Tech</title>
```

---

### `<body>`

Contém o conteúdo que será apresentado ao usuário.

```html
<body>

    <h1>Portal Tech</h1>

</body>
```

---

# 1.6 Tags

As marcações do HTML são chamadas de **tags**.

Exemplo:

```html
<p>Olá mundo!</p>
```

Temos:

```text
<p>       → tag de abertura

Olá mundo! → conteúdo

</p>      → tag de fechamento
```

Algumas tags possuem atributos.

```html
<a href="https://www.exemplo.com">
    Acessar site
</a>
```

Nesse caso:

```text
<a>        → tag
href       → atributo
URL        → valor do atributo
```

---

# 1.7 Tipos de Linguagens de Marcação

Existem diversos tipos de linguagens de marcação.

Entre as mais importantes:

* HTML
* XML
* Markdown
* SVG
* MathML
* LaTeX

---

## HTML

Utilizado principalmente para estruturar páginas Web.

```html
<h1>Meu site</h1>

<p>Bem-vindo!</p>
```

---

## XML

XML significa:

> **Extensible Markup Language**

É utilizado para representar e transportar dados de maneira estruturada.

Exemplo:

```xml
<aluno>
    <nome>João</nome>
    <idade>18</idade>
    <curso>Desenvolvimento de Sistemas</curso>
</aluno>
```

Observe que podemos criar nossas próprias tags.

---

## Markdown

Markdown é uma linguagem de marcação simplificada.

Muito utilizada em:

* GitHub;
* documentação;
* README;
* Wikis;
* documentação de projetos.

Exemplo:

```markdown
# Meu Projeto

## Sobre

Este é meu projeto desenvolvido em JavaScript.

### Tecnologias

- HTML
- CSS
- JavaScript
```

O resultado será:

# Meu Projeto

## Sobre

Este é meu projeto desenvolvido em JavaScript.

### Tecnologias

* HTML
* CSS
* JavaScript

---

## SVG

SVG significa:

> **Scalable Vector Graphics**

É uma linguagem baseada em XML utilizada para representar gráficos vetoriais.

Exemplo:

```html
<svg width="200" height="100">

    <rect
        width="200"
        height="100"
        fill="blue"
    />

</svg>
```

Uma das vantagens do SVG é poder aumentar ou diminuir o tamanho da imagem sem perder qualidade.

---

# 1.8 HTML x CSS x JavaScript

Essa divisão é extremamente importante.

Podemos pensar em uma página Web como uma casa.

| Tecnologia | Função        | Comparação                |
| ---------- | ------------- | ------------------------- |
| HTML       | Estrutura     | Estrutura da casa         |
| CSS        | Aparência     | Pintura e decoração       |
| JavaScript | Comportamento | Automação e funcionamento |

### HTML

```html
<button>Clique aqui</button>
```

### CSS

```css
button {
    background-color: blue;
    color: white;
}
```

### JavaScript

```javascript
alert("Você clicou!");
```

Os três podem trabalhar juntos.

---

# 2. World Wide Web — WWW

## 2.1 O que é a World Wide Web?

A **World Wide Web**, geralmente chamada de **Web** ou **WWW**, é um sistema de documentos e recursos interligados que podem ser acessados através da Internet utilizando navegadores.

É importante entender:

> **Internet e Web não são a mesma coisa.**

---

# Internet x Web

## Internet

É a infraestrutura de redes que conecta computadores, servidores, celulares e outros dispositivos.

## Web

É um dos serviços que utilizam a Internet.

Outros serviços também utilizam a Internet, como:

* e-mail;
* chamadas de vídeo;
* jogos online;
* transferência de arquivos;
* aplicativos;
* sistemas corporativos.

### Analogia

> **Internet = estrada**

> **Web = um dos serviços que utiliza essa estrada**

---

# 2.2 Como surgiu a World Wide Web?

A Web foi proposta por **Tim Berners-Lee** no final da década de 1980, enquanto trabalhava no CERN.

A ideia era facilitar o compartilhamento e a ligação entre informações.

A proposta envolvia conceitos fundamentais que continuam presentes:

* HTML;
* HTTP;
* URLs;
* hipertextos;
* navegadores;
* servidores Web.

---

# O que é Hipertexto?

Hipertexto é um texto que permite navegar para outros conteúdos através de links.

Por exemplo:

```html
<a href="https://www.exemplo.com">
    Clique aqui
</a>
```

Ao clicar, o usuário pode acessar outro recurso.

Essa ideia é fundamental para a Web.

---

# 2.3 Como uma Página Web Funciona?

Quando o usuário digita:

```text
www.exemplo.com
```

no navegador, várias coisas acontecem.

Simplificando:

```text
USUÁRIO
   ↓
NAVEGADOR
   ↓
INTERNET
   ↓
DNS
   ↓
SERVIDOR
   ↓
SITE
```

---

## 1. O usuário informa um endereço

Exemplo:

```text
www.exemplo.com
```

---

## 2. O navegador precisa descobrir onde está o servidor

É aí que entra o **DNS**.

DNS significa:

> **Domain Name System**

Sistema de Nomes de Domínio.

Ele permite associar nomes de domínio a endereços IP.

Exemplo didático:

```text
www.exemplo.com
       ↓
      DNS
       ↓
192.0.2.10
```

> O endereço IP acima é apenas um exemplo.

---

## 3. O navegador solicita o conteúdo

O navegador realiza uma requisição ao servidor.

Por exemplo:

```text
GET /index.html
```

O servidor processa a solicitação e responde.

---

## 4. O servidor envia os arquivos

Pode enviar:

* HTML;
* CSS;
* JavaScript;
* imagens;
* vídeos;
* fontes;
* outros recursos.

---

## 5. O navegador interpreta

O navegador recebe os arquivos e monta a página.

```text
HTML
 ↓
Estrutura

CSS
 ↓
Aparência

JavaScript
 ↓
Comportamento
```

Resultado:

```text
┌───────────────────────────────┐
│         MEU SITE              │
├───────────────────────────────┤
│                               │
│   Bem-vindo!                  │
│                               │
│   [ Saiba mais ]              │
│                               │
└───────────────────────────────┘
```

---

# 2.4 HTTP e HTTPS

HTTP significa:

> **HyperText Transfer Protocol**

É um protocolo utilizado para comunicação entre clientes e servidores Web.

Exemplo:

```text
Navegador
    ↓
 HTTP Request
    ↓
Servidor
    ↓
 HTTP Response
    ↓
Navegador
```

---

## HTTPS

HTTPS é a versão segura do HTTP, utilizando criptografia através de TLS.

Podemos observar:

```text
http://
```

ou:

```text
https://
```

Em aplicações modernas, HTTPS é essencial para proteger a comunicação.

---

# 2.5 Mudanças na World Wide Web

A Web mudou bastante desde sua criação.

Uma maneira didática de ensinar isso é dividir em fases:

* Web 1.0;
* Web 2.0;
* Web 3.0;
* Web atual.

---

# Web 1.0

Também chamada de Web mais estática.

### Características

* páginas predominantemente estáticas;
* pouca interação;
* usuário principalmente como consumidor;
* poucos recursos dinâmicos;
* conteúdo publicado por administradores.

Exemplo:

```text
Página
   ↓
Texto
   ↓
Imagem
   ↓
Links
```

O usuário acessava o conteúdo, mas tinha pouca participação.

---

# Web 2.0

A Web passou a ser muito mais interativa.

### Características

* redes sociais;
* comentários;
* blogs;
* vídeos;
* colaboração;
* sistemas Web;
* conteúdo gerado pelos usuários.

Exemplos:

* YouTube;
* Wikipedia;
* redes sociais;
* plataformas colaborativas.

Agora temos:

```text
USUÁRIO
   ↕
WEB
   ↕
OUTROS USUÁRIOS
```

O usuário deixou de ser apenas consumidor.

Ele também passou a **produzir conteúdo**.

---

# Web 3.0

O termo **Web 3.0** é utilizado para diferentes ideias dependendo do contexto.

Em discussões sobre evolução da Web, pode estar associado à chamada **Web Semântica**, na qual informações são estruturadas para que máquinas consigam compreender melhor seus significados e relações.

Também existe outro uso do termo, especialmente no contexto de blockchain e aplicações descentralizadas.

É importante explicar aos alunos:

> **"Web 3.0" não possui uma única definição universalmente aceita.**

---

# Web Atual

Hoje encontramos uma Web muito mais complexa.

Temos:

* aplicações Web;
* computação em nuvem;
* inteligência artificial;
* APIs;
* aplicações móveis conectadas;
* streaming;
* sistemas financeiros;
* comércio eletrônico;
* redes sociais;
* WebAssembly;
* aplicações em tempo real;
* Internet das Coisas;
* aplicações distribuídas.

Um site atualmente pode ser praticamente um **sistema completo**.

---

# Site x Sistema Web

Essa diferença é importante para Desenvolvimento de Sistemas.

## Site

Normalmente apresenta informações.

Exemplo:

```text
Empresa
 ├── Sobre
 ├── Serviços
 ├── Produtos
 └── Contato
```

## Sistema Web

Possui lógica e interação.

Exemplo:

```text
Sistema de vendas

Login
 ↓
Produtos
 ↓
Carrinho
 ↓
Pagamento
 ↓
Banco de dados
```

Pode envolver:

```text
HTML
CSS
JavaScript
Backend
API
Banco de dados
Servidor
Autenticação
```

---

# 2.6 O que é uma URL?

URL significa:

> **Uniform Resource Locator**

É o endereço utilizado para localizar um recurso.

Exemplo:

```text
https://www.exemplo.com/produtos/celular
```

Podemos dividir:

```text
https://
   ↓
protocolo

www.exemplo.com
   ↓
domínio

/produtos/celular
   ↓
caminho/recurso
```

Outro exemplo:

```text
https://www.exemplo.com/cursos
```

---

# 2.7 Registro e Domínio

Para colocar um site na Internet, precisamos compreender o conceito de **domínio**.

Um domínio é um nome utilizado para identificar um endereço na Internet.

Exemplos:

```text
google.com
youtube.com
senai.br
empresa.com.br
```

É muito mais fácil memorizar:

```text
www.minhaempresa.com.br
```

do que:

```text
um endereço IP
```

---

# Domínio x Site

São coisas diferentes.

## Domínio

É o endereço/nome utilizado para acessar o site.

Exemplo:

```text
minhaempresa.com.br
```

## Site

É o conteúdo e a aplicação disponibilizados nesse endereço.

---

# 2.8 Estrutura de um Domínio

Considere:

```text
www.exemplo.com.br
```

Podemos dividir:

```text
www
 ↓
subdomínio

exemplo
 ↓
nome do domínio

com
 ↓
categoria/domínio de segundo nível

br
 ↓
código do país
```

No Brasil, o registro de domínios `.br` é administrado pelo **Registro.br**, ligado ao Núcleo de Informação e Coordenação do Ponto BR (NIC.br).

Acesse:

**Registro.br:** https://registro.br/

---

# Exemplos de Extensões

Algumas extensões conhecidas:

```text
.com
.org
.net
.edu
.gov
.br
```

No Brasil encontramos diversos domínios `.br`, como:

```text
.com.br
.org.br
.edu.br
.gov.br
```

A disponibilidade e as regras de registro dependem da extensão escolhida.

---

# 2.9 O que é Hospedagem?

Depois de registrar um domínio, ainda precisamos disponibilizar o site em algum lugar.

É aí que entra a **hospedagem**.

Hospedagem é o serviço que fornece infraestrutura para armazenar e disponibilizar os arquivos e serviços de uma aplicação na Internet.

Podemos imaginar:

```text
DOMÍNIO
    ↓
"Qual é o endereço?"

        +

HOSPEDAGEM
    ↓
"Onde está o site?"
```

---

# Domínio + Hospedagem

Uma analogia simples:

### Domínio

É como o **endereço de uma casa**.

### Hospedagem

É como o **terreno/casa onde os arquivos ficam armazenados**.

### Site

É o conteúdo existente nesse local.

---

# 2.10 Tipos de Hospedagem

Existem diferentes modelos.

## Hospedagem Compartilhada

Vários sites utilizam os mesmos recursos de um servidor.

### Vantagens

* preço menor;
* fácil utilização;
* boa para projetos pequenos.

### Desvantagens

* recursos limitados;
* menor controle;
* desempenho pode depender dos outros usuários.

---

## VPS

VPS significa:

> **Virtual Private Server**

É um servidor virtual com recursos dedicados ou reservados dentro de uma infraestrutura física.

Oferece mais controle.

É bastante utilizado por desenvolvedores.

---

## Servidor Dedicado

Um servidor físico é destinado a um cliente.

Possui maior controle e capacidade, porém geralmente tem custo maior.

---

## Cloud

Na computação em nuvem, a aplicação pode utilizar recursos distribuídos e escaláveis.

Exemplos de provedores:

* AWS;
* Microsoft Azure;
* Google Cloud.

---

# 2.11 Hospedagem de um Sistema Web

Imagine que os alunos desenvolveram:

```text
Sistema de Biblioteca
```

A estrutura poderia ser:

```text
                    INTERNET
                       │
                       ↓
             biblioteca.com.br
                       │
                       ↓
                    DNS
                       │
                       ↓
                    SERVIDOR
                 ┌─────┴─────┐
                 ↓           ↓
              Frontend     Backend
                 ↓           ↓
                HTML       Node.js
                CSS        API
                JS           │
                             ↓
                         Banco de Dados
```

Isso já começa a aproximar os alunos de uma arquitetura profissional.

---

# 2.12 Front-end e Back-end

## Front-end

É a parte da aplicação com a qual o usuário interage.

### Tecnologias comuns

```text
HTML
CSS
JavaScript
React
Vue
Angular
```

---

## Back-end

Responsável pela lógica do sistema no servidor.

Pode utilizar:

```text
Node.js
Java
C#
Python
PHP
Ruby
```

E trabalhar com bancos de dados:

```text
MySQL
PostgreSQL
SQL Server
MongoDB
etc.
```

---

# 2.13 Mercado de Trabalho

A Web criou uma enorme área de atuação para profissionais de tecnologia.

Um aluno de Desenvolvimento de Sistemas pode trabalhar em áreas como:

---

## Desenvolvedor Front-end

Responsável pela interface.

### Tecnologias

```text
HTML
CSS
JavaScript
React
Vue
Angular
```

---

## Desenvolvedor Back-end

Responsável pela lógica do servidor.

### Tecnologias

```text
Node.js
Java
C#
Python
PHP
```

---

## Desenvolvedor Full Stack

Trabalha com:

```text
Front-end
+
Back-end
+
Banco de dados
+
APIs
```

---

## Desenvolvedor Web

Pode atuar no desenvolvimento completo de sites e aplicações Web.

---

## DevOps / Cloud

Atua com:

* servidores;
* automação;
* infraestrutura;
* containers;
* CI/CD;
* cloud;
* monitoramento.

---

## Analista de Sistemas

Atua na compreensão dos problemas de negócio e na definição de soluções tecnológicas.

---

## QA / Testes

Responsável por verificar a qualidade das aplicações.

Pode trabalhar com:

* testes manuais;
* testes automatizados;
* testes de API;
* testes de software.

---

# 2.14 O Mercado Não Exige Apenas Programação

Esse é um ponto importante para destacar para a turma.

Um bom profissional precisa desenvolver várias competências.

## Competências Técnicas

```text
HTML
CSS
JavaScript
Git
Banco de dados
APIs
Lógica
Programação
Testes
Segurança
```

## Competências Comportamentais

```text
Comunicação
Trabalho em equipe
Organização
Resolução de problemas
Pensamento crítico
Aprendizado contínuo
```

---

# 2.15 Git e GitHub

Em um curso de Desenvolvimento de Sistemas, vale apresentar brevemente o conceito.

**Git** é um sistema de controle de versão.

Ele permite acompanhar alterações no código.

Exemplo:

```text
Projeto
 │
 ├── versão 1
 │
 ├── versão 2
 │
 ├── versão 3
 │
 └── versão atual
```

O **GitHub** é uma plataforma muito utilizada para hospedar repositórios Git e colaborar em projetos.

Exemplo de estrutura:

```text
meu-projeto/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 2.16 O Caminho de um Desenvolvedor Web

Podemos apresentar aos alunos uma possível sequência:

```text
              LÓGICA
                 ↓
               HTML
                 ↓
                CSS
                 ↓
            JavaScript
                 ↓
               Git
                 ↓
             Front-end
                 ↓
              Back-end
                 ↓
             Banco de Dados
                 ↓
                APIs
                 ↓
              Deploy
                 ↓
             Cloud/DevOps
```

Isso não significa que todos precisam seguir exatamente essa ordem, mas fornece uma visão de carreira.

---

# 3. Atividade Prática — Primeira Página Web

Depois da parte teórica, os alunos deverão criar uma página simples.

## Passo 1 — Criar a pasta

Crie uma pasta chamada:

```text
meu-primeiro-site
```

Dentro dela:

```text
meu-primeiro-site/
│
└── index.html
```

---

## Passo 2 — Criar o arquivo HTML

Código:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <title>Meu Primeiro Site</title>

</head>

<body>

    <h1>Meu Primeiro Site</h1>

    <h2>Sobre mim</h2>

    <p>
        Meu nome é João e estou estudando
        Desenvolvimento de Sistemas.
    </p>

    <h2>Meus conhecimentos</h2>

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <h2>Contato</h2>

    <p>
        Email: aluno@email.com
    </p>

</body>

</html>
```

---

## Passo 3 — Executar

Os alunos deverão:

1. salvar o arquivo como `index.html`;
2. abrir o arquivo no navegador;
3. observar o resultado;
4. modificar os textos;
5. adicionar novos elementos.

---

# 4. Atividade — Criando uma Empresa Fictícia

Divida os alunos em grupos.

Cada grupo deverá criar uma empresa fictícia.

## A empresa deve possuir:

* nome;
* logotipo;
* descrição;
* serviços;
* endereço;
* telefone;
* e-mail;
* página inicial.

Inicialmente, utilizar somente HTML.

### Estrutura sugerida

```text
empresa/
│
├── index.html
├── produtos.html
├── servicos.html
└── contato.html
```

Os alunos deverão criar links entre as páginas.

Por exemplo:

```html
<a href="produtos.html">
    Produtos
</a>
```

---

# 5. Atividade de Pesquisa

Cada grupo deverá pesquisar:

## 1. Internet x Web

Qual é a diferença entre:

```text
Internet
Web
```

---

## 2. DNS

O que é:

```text
DNS
```

---

## 3. Domínio

O que é:

```text
Domínio
```

---

## 4. Hospedagem

O que é:

```text
Hospedagem
```

---

## 5. Front-end x Back-end

Qual é a diferença entre:

```text
Front-end
Back-end
Full Stack
```

---

## 6. Profissão

Escolher uma profissão relacionada à Web e pesquisar:

* o que faz;
* principais tecnologias;
* salário médio;
* onde pode trabalhar;
* quais conhecimentos são necessários.

---

# 6. Atividade de Fixação

## Questão 1

O que é uma linguagem de marcação?

**A)** Linguagem utilizada exclusivamente para criar bancos de dados.

**B)** Linguagem utilizada para estruturar e descrever informações.

**C)** Linguagem utilizada exclusivamente para cálculos matemáticos.

**D)** Sistema operacional utilizado em servidores.

**Resposta:** B

---

## Questão 2

Qual das opções é uma linguagem de marcação?

**A)** Python

**B)** Java

**C)** HTML

**D)** C

**Resposta:** C

---

## Questão 3

Qual é a função principal do HTML?

**A)** Criar bancos de dados.

**B)** Estruturar o conteúdo de uma página Web.

**C)** Controlar servidores.

**D)** Criar sistemas operacionais.

**Resposta:** B

---

## Questão 4

Qual tecnologia é utilizada principalmente para definir a aparência de uma página?

**A)** HTML

**B)** CSS

**C)** SQL

**D)** DNS

**Resposta:** B

---

## Questão 5

O que é DNS?

**A)** Sistema operacional.

**B)** Banco de dados.

**C)** Sistema que relaciona nomes de domínio a endereços IP.

**D)** Linguagem de programação.

**Resposta:** C

---

## Questão 6

Qual é a diferença entre domínio e hospedagem?

### Resposta esperada

O **domínio** é o endereço/nome utilizado para acessar um site, enquanto a **hospedagem** fornece a infraestrutura onde o site ou aplicação fica armazenado e disponibilizado.

---

## Questão 7

Qual alternativa representa melhor a relação entre HTML, CSS e JavaScript?

**A)** HTML = estrutura, CSS = aparência, JavaScript = comportamento.

**B)** HTML = banco de dados, CSS = servidor, JavaScript = domínio.

**C)** HTML = programação, CSS = banco de dados, JavaScript = hospedagem.

**D)** Todos possuem exatamente a mesma função.

**Resposta:** A

---

# 7. Desafio para os Alunos

Para finalizar a aula, proponha:

> **"Vocês receberam a missão de criar uma empresa de tecnologia."**

Cada grupo deverá definir:

## Empresa

```text
Nome:
Área de atuação:
Público-alvo:
```

## Site

```text
Domínio desejado:
Página inicial:
Produtos:
Serviços:
Contato:
```

## Tecnologia

```text
HTML:
CSS:
JavaScript:
Banco de dados:
Backend:
```

## Infraestrutura

```text
Domínio:
Hospedagem:
Servidor:
```

Depois, cada grupo deve apresentar seu projeto explicando:

> **Como o usuário sairia do computador dele e chegaria até o sistema desenvolvido pelo grupo?**

Eles devem tentar explicar algo parecido com:

```text
USUÁRIO
   ↓
NAVEGADOR
   ↓
INTERNET
   ↓
DNS
   ↓
DOMÍNIO
   ↓
SERVIDOR
   ↓
APLICAÇÃO WEB
   ↓
BACK-END
   ↓
BANCO DE DADOS
```

---

# 8. Resumo para o Quadro

```text
LINGUAGENS DE MARCAÇÃO
│
├── HTML
│   └── Estrutura páginas Web
│
├── XML
│   └── Estrutura e transporte de dados
│
├── Markdown
│   └── Documentação
│
└── SVG
    └── Gráficos vetoriais


WORLD WIDE WEB
│
├── Internet ≠ Web
│
├── Navegador
│
├── HTTP / HTTPS
│
├── URL
│
├── DNS
│
├── Domínio
│
├── Hospedagem
│
└── Servidor


DESENVOLVIMENTO WEB
│
├── Front-end
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
├── Back-end
│   ├── Node.js
│   ├── Java
│   ├── Python
│   └── C#
│
├── Banco de Dados
│
├── APIs
│
└── Cloud / Deploy
```

---

# 9. Sugestão de Sequência da Aula

Para uma turma técnica, a aula pode ser organizada em **3 momentos**.

## 1º Momento — Teoria

**Duração aproximada: 40 minutos**

Conteúdos:

* Linguagens de marcação;
* HTML;
* XML;
* Markdown;
* Internet x Web;
* WWW;
* HTTP/HTTPS.

---

## 2º Momento — Web na Prática

**Duração aproximada: 40 minutos**

Conteúdos:

* URL;
* domínio;
* DNS;
* hospedagem;
* servidor;
* Front-end x Back-end;
* demonstração de um `index.html`.

---

## 3º Momento — Prática

**Duração aproximada: 40 minutos**

Os alunos criam uma página HTML simples.

No final, apresentar o desafio da **empresa fictícia**.

Essa sequência prepara a turma para a próxima etapa:

```text
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
Desenvolvimento Front-end
  ↓
Back-end
  ↓
Banco de Dados
  ↓
APIs
  ↓
Deploy
  ↓
Cloud
```

---

# Objetivos da Aula

Ao final da aula, o aluno deverá ser capaz de:

* compreender o conceito de linguagem de marcação;
* diferenciar linguagem de marcação de linguagem de programação;
* identificar diferentes linguagens de marcação;
* compreender o papel do HTML;
* reconhecer a estrutura básica de um documento HTML;
* compreender o conceito de World Wide Web;
* diferenciar Internet e Web;
* compreender o funcionamento básico de uma página Web;
* compreender os conceitos de URL, DNS e domínio;
* compreender o conceito de hospedagem;
* diferenciar site de sistema Web;
* compreender os conceitos de Front-end e Back-end;
* identificar algumas profissões relacionadas ao desenvolvimento Web;
* criar uma página HTML simples;
* compreender, de forma básica, o caminho entre o usuário e um sistema Web.
