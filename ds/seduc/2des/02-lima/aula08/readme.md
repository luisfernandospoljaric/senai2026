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

# Atividade – Controle de Ventilador com JavaScript

## Objetivo

Criar uma página web utilizando **HTML, CSS e JavaScript** que simule o funcionamento de um **ventilador**.

A atividade tem como objetivo praticar:

* Estrutura HTML;
* Estilização com CSS;
* Seleção de elementos com JavaScript;
* Eventos de clique;
* Alteração de classes;
* Alteração de textos;
* Uso de `if` e `else`;
* Interação entre HTML, CSS e JavaScript.

---

## Desafio

Você deverá criar uma página contendo um **ventilador desligado** e um **botão para ligá-lo**.

Quando o usuário clicar no botão:

* O ventilador deverá ficar visualmente **ligado**;
* O botão deverá mudar de texto para **"Desligar"**;
* O ventilador deverá apresentar alguma indicação visual de funcionamento.

Quando clicar novamente:

* O ventilador deverá voltar ao estado **desligado**;
* O botão deverá voltar para **"Ligar"**.

---

## Requisitos

### 1. HTML

Crie uma página contendo:

* Um título: **Controle do Ventilador**
* Uma representação visual de um ventilador;
* Um botão para ligar e desligar.

Você pode criar o ventilador utilizando apenas elementos HTML e CSS.

---

### 2. CSS

Crie dois estados para o ventilador:

#### Ventilador desligado

Quando estiver desligado, ele deverá apresentar uma aparência que indique que está parado.

Exemplo:

```text
      _______
     /       \
    |   🌀    |
     \_______/

     [ Ligar ]
```

#### Ventilador ligado

Quando estiver ligado, ele deverá apresentar alguma alteração visual.

Por exemplo:

* mudar de cor;
* adicionar uma sombra;
* mostrar uma mensagem;
* fazer as hélices girarem;
* ou utilizar outra ideia criada por você.

Exemplo:

```text
      _______
     /       \
    |  🌀🌀   |  ← funcionando
     \_______/

    [ Desligar ]
```

---

## 3. JavaScript

O botão deverá possuir um evento de clique.

Ao clicar:

```text
DESLIGADO
     ↓
   clique
     ↓
 LIGADO
```

Ao clicar novamente:

```text
LIGADO
   ↓
 clique
   ↓
DESLIGADO
```

Utilize JavaScript para controlar essa mudança.

Você deverá utilizar:

* `document.getElementById()`;
* `addEventListener()`;
* `classList`;
* `if` e `else`.

---

## Desafio extra

Depois de fazer o funcionamento básico, adicione **três velocidades** ao ventilador:

```text
┌─────────────────────────┐
│   CONTROLE DO VENTILADOR │
│                          │
│        🌀                │
│                          │
│ [ Ligar/Desligar ]       │
│                          │
│ Velocidade:              │
│ [ 1 ] [ 2 ] [ 3 ]        │
└─────────────────────────┘
```

### Velocidade 1

O ventilador deverá funcionar lentamente.

### Velocidade 2

O ventilador deverá funcionar em uma velocidade intermediária.

### Velocidade 3

O ventilador deverá funcionar rapidamente.

---

## Desafio adicional

Adicione um texto informando o estado atual:

```text
Status: Desligado
```

Quando o usuário ligar:

```text
Status: Ligado
```

E quando desligar:

```text
Status: Desligado
```

---

## Regras da atividade

1. Utilize **HTML, CSS e JavaScript**.
2. Não utilize bibliotecas externas.
3. O botão deve funcionar através de JavaScript.
4. O estado do ventilador deve ser alterado dinamicamente.
5. Organize o projeto em arquivos separados:

```text
ventilador/
│
├── index.html
├── style.css
└── script.js
```

6. O código deve estar organizado e identado.
7. Utilize nomes de classes e IDs que façam sentido.

---

## O que será avaliado

| Critério                         |   Pontos |
| -------------------------------- | -------: |
| Estrutura HTML                   |      2,0 |
| Estilização CSS                  |      2,0 |
| Funcionamento do botão           |      2,0 |
| Utilização correta do JavaScript |      2,0 |
| Organização do código            |      1,0 |
| Criatividade                     |      1,0 |
| **Total**                        | **10,0** |

---

## Perguntas para responder após a atividade

1. Qual é a função do HTML no projeto?
2. Qual é a função do CSS?
3. Qual é a função do JavaScript?
4. Para que serve o `addEventListener()`?
5. O que acontece quando utilizamos `classList`?
6. Por que precisamos utilizar `if` e `else`?
7. Como o JavaScript consegue alterar a aparência do ventilador?
8. O que aconteceria se retirássemos o JavaScript da aplicação?

---

### Dica

Não tente fazer tudo de uma vez.

Primeiro faça:

```text
HTML
 ↓
Criar ventilador e botão
 ↓
CSS
 ↓
Deixar o ventilador bonito
 ↓
JavaScript
 ↓
Fazer o botão funcionar
 ↓
Desafios extras
```

**O objetivo principal não é copiar um código pronto, mas entender como HTML, CSS e JavaScript trabalham juntos para criar uma página interativa.**

## CSS

- Como ajuda vou deixar meu CSS pronto pra vocês:

```css

* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;

    background-color: #222;

    color: white;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    height: 100vh;
}

h1 {
    margin-bottom: 40px;
}

.container {
    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 20px;
}

/* Corpo do ventilador */

.ventilador {
    width: 220px;
    height: 220px;

    border-radius: 50%;

    background-color: #555;

    border: 10px solid #888;

    display: flex;

    align-items: center;

    justify-content: center;
}

/* Parte interna */

.grade {
    width: 180px;
    height: 180px;

    border-radius: 50%;

    background-color: #333;

    position: relative;

    display: flex;

    align-items: center;

    justify-content: center;
}

/* Hélices */

.helice {
    position: absolute;

    width: 25px;
    height: 75px;

    background-color: #aaa;

    border-radius: 50%;
}

/* Posicionamento das hélices */

.helice1 {
    transform: rotate(0deg) translateY(-35px);
}

.helice2 {
    transform: rotate(120deg) translateY(-35px);
}

.helice3 {
    transform: rotate(240deg) translateY(-35px);
}

/* Classe adicionada quando o ventilador estiver ligado */

.ventilador.ligado .grade {
    animation: girar 0.5s linear infinite;
}

/* Animação */

@keyframes girar {

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

}

/* Status */

#status {
    font-size: 20px;
}

/* Botão */

#botao {
    width: 130px;

    height: 50px;

    border: none;

    border-radius: 10px;

    background-color: #444;

    color: white;

    font-size: 18px;

    cursor: pointer;
}

#botao:hover {
    background-color: #666;
}
```