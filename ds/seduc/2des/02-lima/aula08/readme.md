# Exercício – Alterando o CSS com JavaScript

## Objetivo

Criar uma página onde o usuário possa clicar em um botão e **alterar a aparência de um texto utilizando JavaScript**.

---

## 1. HTML

Crie uma página contendo:

* Um título escrito **"Minha Página"**;
* Um botão escrito **"Mudar Aparência"**.

Exemplo:

```text
        Minha Página

    [ Mudar Aparência ]
```

Utilize IDs para conseguir acessar os elementos através do JavaScript.

---

## 2. JavaScript

Quando o usuário clicar no botão, o título deverá mudar sua aparência.

Depois do clique, o título deverá:

* Ficar vermelho;
* Ficar com tamanho de `40px`;
* Ter fundo amarelo;
* Ficar centralizado.

---

## Dicas

Primeiro encontre o título:

```javascript
const titulo = document.getElementById("...");
```

Depois encontre o botão:

```javascript
const botao = document.getElementById("...");
```

Para detectar o clique:

```javascript
botao.addEventListener("click", function() {

});
```

Para alterar o CSS:

```javascript
titulo.style.color = "...";
```

```javascript
titulo.style.fontSize = "...";
```

```javascript
titulo.style.backgroundColor = "...";
```

```javascript
titulo.style.textAlign = "...";
```

---

## Resultado esperado

### Antes do clique

```text
        Minha Página

    [ Mudar Aparência ]
```

### Depois do clique

```text
       MINHA PÁGINA
       (vermelho)
       (fundo amarelo)

    [ Mudar Aparência ]
```

---

