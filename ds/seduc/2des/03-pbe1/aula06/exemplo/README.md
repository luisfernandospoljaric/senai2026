## Passo-a-passo

segue as estruturas da página.

```
npm init -y
npm install express

para rodar:
npm run dev
```

## Get
```
http://localhost:3000

Colocar apenas a URL e enviar
```

## Post

```
http://localhost:3000

body/json

{
  "id": 4,
  "nome": "Mouse",
  "unidade": "unidade",
  "precoUnitario": 150,
  "quantidade": 5
}

```

## Delete

```
Encaminhar o id pela URL

http://localhost:3000/4


```

## Put

```
Encaminhar o id pela URL

http://localhost:3000/4

atualizações desejadas:

{
  "nome": "Mouse Gamer",
  "unidade": "unidade",
  "precoUnitario": 200,
  "quantidade": 6
}

```