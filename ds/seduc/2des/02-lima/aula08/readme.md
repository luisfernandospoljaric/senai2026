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
/* Configuração geral da página */
body {
    font-family: Arial, sans-serif;
    background-color: #222;
    color: white;
    text-align: center;
}

/* Caixa principal */
.container {
    width: 400px;
    margin: 50px auto;
}

/* Desenho do ventilador */
#ventilador {
    position: relative;

    width: 300px;
    height: 300px;

    margin: 30px auto;

    background-color: #444;

    border: 10px solid #777;
    border-radius: 50%;
}

/* Conjunto das hélices */
.helices {
    position: absolute;

    width: 180px;
    height: 180px;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    
}

/* Cada hélice */
.helice {
    position: absolute;

    width: 35px;
    height: 80px;

    background-color: #ddd;

    top: 10px;
    left: 72px;

    border-radius: 50%;

    transform-origin: center 80px;
}

/* Primeira hélice */
.helice:nth-child(1) {
    transform: rotate(0deg);
}

/* Segunda hélice */
.helice:nth-child(2) {
    transform: rotate(120deg);
}

/* Terceira hélice */
.helice:nth-child(3) {
    transform: rotate(240deg);
}

/* Centro do ventilador */
.centro {
    position: absolute;

    width: 45px;
    height: 45px;

    background-color: #222;

    border-radius: 50%;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    z-index: 10;
}

/* Animação das hélices */
@keyframes girar {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

/* Quando o ventilador está ligado */
#ventilador.ligado {
    box-shadow: 0 0 30px #00aaff;
}

#ventilador.ligado .helices {
    animation: girar 1s linear infinite;
}

/* Botões */
button {
    padding: 10px 20px;

    margin: 5px;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    font-size: 16px;
}

button:hover {
    opacity: 0.8;
}
```

---

### Link para envio: https://forms.cloud.microsoft/r/tRRuu3D38L