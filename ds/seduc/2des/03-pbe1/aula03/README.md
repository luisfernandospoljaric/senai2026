# Objetos 

## Introdução

Um **objeto** em JavaScript é uma estrutura utilizada para armazenar várias informações relacionadas dentro de uma única variável.

Por exemplo:

```javascript
let nome = "Carlos";
let idade = 25;
let cidade = "Campinas";
```

Com um objeto, podemos organizar tudo:

```javascript
let pessoa = {
    nome: "Carlos",
    idade: 25,
    cidade: "Campinas"
};
```

Cada informação armazenada dentro de um objeto é chamada de **propriedade**.

---

# 1. Criando um objeto

A sintaxe básica de um objeto é:

```javascript
let objeto = {
    propriedade: valor,
    propriedade: valor,
    propriedade: valor
};
```

### Exemplo

```javascript
let aluno = {
    nome: "João",
    idade: 18,
    curso: "Desenvolvimento de Sistemas"
};
```

---

# 2. Acessando propriedades

Podemos acessar as propriedades usando a **notação com ponto**:

```javascript
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
```

---

# 3. Notação com ponto

A estrutura é:

```javascript
objeto.propriedade
```

Exemplo:

```javascript
let pessoa = {
    nome: "Carlos",
    idade: 25,
    cidade: "Campinas"
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
```

---

# 4. Notação com colchetes

Outra maneira de acessar propriedades é utilizando colchetes:

```javascript
objeto["propriedade"]
```

Exemplo:

```javascript
let aluno = {
    nome: "Maria",
    idade: 20,
    curso: "Informática"
};

console.log(aluno["nome"]);
console.log(aluno["idade"]);
console.log(aluno["curso"]);
```

Os colchetes são especialmente úteis quando o nome da propriedade está armazenado em uma variável:

```javascript
let propriedade = "nome";

console.log(aluno[propriedade]);
```

---

# 5. Alterando propriedades

Podemos alterar uma propriedade depois que o objeto foi criado:

```javascript
let aluno = {
    nome: "João",
    idade: 18,
    curso: "Desenvolvimento de Sistemas"
};

aluno.idade = 19;

console.log(aluno.idade);
```

Também podemos alterar outras propriedades:

```javascript
aluno.nome = "Pedro";
aluno.curso = "Informática";
```

---

# 6. Adicionando propriedades

Podemos adicionar novas propriedades depois de criar o objeto:

```javascript
let aluno = {
    nome: "João",
    idade: 18
};

aluno.nota = 8.5;
aluno.cidade = "Campinas";
aluno.curso = "Desenvolvimento de Sistemas";
```

---

# 7. Removendo propriedades

Para remover uma propriedade utilizamos `delete`:

```javascript
let aluno = {
    nome: "João",
    idade: 18,
    curso: "Desenvolvimento de Sistemas"
};

delete aluno.idade;
```

Agora a propriedade `idade` não existe mais no objeto.

---

# 8. Objetos podem armazenar diferentes tipos de dados

As propriedades podem armazenar diferentes tipos de dados:

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- entre outros

Exemplo:

```javascript
let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 10,
    disponivel: true
};
```

Podemos utilizar propriedades booleanas em condições:

```javascript
let usuario = {
    nome: "Carlos",
    ativo: true
};

if (usuario.ativo) {
    console.log("Usuário ativo");
} else {
    console.log("Usuário inativo");
}
```

---

# 9. Objetos dentro de objetos

Um objeto pode possuir outro objeto como propriedade.

Exemplo:

```javascript
let pessoa = {
    nome: "Carlos",
    idade: 30,

    endereco: {
        rua: "Rua das Flores",
        numero: 100,
        cidade: "Campinas"
    }
};
```

Para acessar propriedades do objeto interno:

```javascript
console.log(pessoa.endereco.rua);
console.log(pessoa.endereco.numero);
console.log(pessoa.endereco.cidade);
```

Também podemos alterar:

```javascript
pessoa.endereco.cidade = "Sumaré";
```

---

# 10. Arrays dentro de objetos

Um objeto também pode possuir um **array** como propriedade:

```javascript
let aluno = {
    nome: "Lucas",
    idade: 19,
    notas: [8, 7, 9]
};
```

Para acessar o array:

```javascript
console.log(aluno.notas);
```

Para acessar uma posição específica:

```javascript
console.log(aluno.notas[0]);
console.log(aluno.notas[1]);
console.log(aluno.notas[2]);
```

Também podemos alterar uma posição:

```javascript
aluno.notas[0] = 10;
```

---

# 11. Funções dentro de objetos

Objetos também podem possuir funções.

Quando uma função está dentro de um objeto, normalmente chamamos essa função de **método**.

```javascript
let pessoa = {
    nome: "Carlos",

    falar: function() {
        console.log("Olá!");
    }
};
```

Para executar:

```javascript
pessoa.falar();
```

---

## Forma moderna de escrever métodos

Podemos escrever de forma mais curta:

```javascript
let pessoa = {
    nome: "Carlos",

    falar() {
        console.log("Olá!");
    }
};
```

Depois:

```javascript
pessoa.falar();
```

---

# 12. Utilizando propriedades dentro de métodos

Podemos fazer um método utilizar propriedades do próprio objeto.

Para isso, utilizamos:

```javascript
this
```

Exemplo:

```javascript
let pessoa = {
    nome: "Carlos",

    apresentar() {
        console.log("Meu nome é " + this.nome);
    }
};
```

Executando:

```javascript
pessoa.apresentar();
```

Resultado:

```text
Meu nome é Carlos
```

## O que é `this`?

Nesse contexto, `this` representa o **próprio objeto**.

Portanto:

```javascript
this.nome
```

representa a propriedade `nome` do objeto que está executando o método.

---

# 13. Exemplo completo

```javascript
let aluno = {
    nome: "João",
    idade: 18,
    curso: "Desenvolvimento de Sistemas",
    notas: [8, 7, 9],

    apresentar() {
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
        console.log("Curso: " + this.curso);
    }
};

aluno.apresentar();
```

Resultado:

```text
Nome: João
Idade: 18
Curso: Desenvolvimento de Sistemas
```

---

# Resumo

| Conceito | Exemplo |
|---|---|
| Criar objeto | `let pessoa = {};` |
| Criar propriedade | `nome: "João"` |
| Acessar com ponto | `pessoa.nome` |
| Acessar com colchetes | `pessoa["nome"]` |
| Alterar propriedade | `pessoa.nome = "Maria"` |
| Adicionar propriedade | `pessoa.idade = 20` |
| Remover propriedade | `delete pessoa.idade` |
| Objeto dentro de objeto | `pessoa.endereco.cidade` |
| Array dentro de objeto | `pessoa.notas[0]` |
| Método | `pessoa.falar()` |
| Referenciar o próprio objeto | `this.nome` |

---

# Exemplo final

Juntando os principais conceitos:

```javascript
let aluno = {
    nome: "Carlos",
    idade: 18,
    curso: "Desenvolvimento de Sistemas",

    endereco: {
        rua: "Rua das Flores",
        numero: 100,
        cidade: "Campinas"
    },

    notas: [8, 7, 9],

    apresentar() {
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
        console.log("Curso: " + this.curso);
        console.log("Cidade: " + this.endereco.cidade);
        console.log("Notas: " + this.notas);
    }
};

aluno.apresentar();
```

Resultado:

```text
Nome: Carlos
Idade: 18
Curso: Desenvolvimento de Sistemas
Cidade: Campinas
Notas: 8,7,9
```

---
