# Ferramentas de Seleção no Canva

As ferramentas de seleção são utilizadas para **selecionar partes específicas de uma imagem**.

Depois de selecionar uma determinada área, podemos realizar diferentes ações, como:

- Recortar;
- Remover;
- Mover;
- Alterar;
- Aplicar efeitos;
- Copiar;
- Editar;
- Substituir;
- Trabalhar apenas em uma parte da imagem.

Neste conteúdo vamos conhecer dois grupos de ferramentas:

### Seleção automática

1. Varinha;
2. Seleção Rápida;
3. Seleção de Objeto.

### Seleção manual ou geométrica

4. Laço;
5. Seleção Geométrica.

---

# 1. O que é uma seleção?

Antes de conhecer as ferramentas, precisamos entender o conceito de seleção.

Imagine uma fotografia de uma pessoa em frente a uma parede.

```text id="q1z9sk"
┌─────────────────────────┐
│                         │
│       FUNDO              │
│                         │
│         O                │
│        /|\               │
│        / \               │
│                         │
│       FUNDO              │
└─────────────────────────┘
```

Se queremos editar somente a pessoa, precisamos primeiro selecioná-la.

Depois da seleção:

```text id="4r4m9j"
┌─────────────────────────┐
│                         │
│       FUNDO              │
│                         │
│       [ PESSOA ]         │
│                         │
│       FUNDO              │
└─────────────────────────┘
```

A seleção informa ao programa:

> "Quero trabalhar somente nesta região."

---

# 2. Por que utilizar ferramentas de seleção?

As ferramentas de seleção são muito importantes na edição de imagens.

Imagine que você possui uma fotografia de um carro e deseja alterar somente o carro.

Sem seleção:

```text
ALTERAÇÃO
    ↓
Imagem inteira
```

Com seleção:

```text
ALTERAÇÃO
    ↓
Somente o carro
```

Isso proporciona muito mais controle sobre a edição.

---

# 3. Seleção automática

As ferramentas de seleção automática utilizam recursos inteligentes para tentar identificar partes da imagem.

Isso significa que, em vez de desenhar toda a seleção manualmente, podemos deixar o Canva identificar determinadas áreas.

As principais ferramentas que vamos estudar são:

```text
Seleção automática

├── Varinha
├── Seleção Rápida
└── Seleção de Objeto
```

Cada uma funciona melhor em situações diferentes.

---

# 4. Varinha

A **Varinha** é uma ferramenta utilizada para selecionar áreas que possuem características semelhantes, principalmente em relação à cor.

Imagine uma imagem com um fundo branco:

```text id="3td4sl"
┌─────────────────────────┐
│                         │
│       FUNDO BRANCO      │
│                         │
│        [OBJETO]         │
│                         │
│       FUNDO BRANCO      │
│                         │
└─────────────────────────┘
```

Ao utilizar a Varinha sobre uma região branca, a ferramenta pode identificar e selecionar áreas semelhantes.

---

# 5. Quando utilizar a Varinha?

A Varinha funciona melhor quando existe uma diferença clara entre as cores.

Por exemplo:

- Objeto escuro em fundo claro;
- Texto sobre fundo uniforme;
- Fundo de uma única cor;
- Áreas com cores semelhantes.

Exemplo:

```text id="w8c3ra"
Fundo branco
       +
Objeto colorido
       ↓
Boa situação para seleção por cor
```

---

# 6. Exemplo prático com a Varinha

Imagine uma imagem com um objeto vermelho sobre um fundo branco.

```text id="p7wz5d"
┌──────────────────┐
│                  │
│                  │
│      🔴          │
│                  │
│                  │
└──────────────────┘
```

Podemos utilizar a ferramenta para selecionar a área do fundo.

Depois da seleção, podemos trabalhar somente naquela região.

### Passos

1. Abra a imagem.
2. Acesse as ferramentas de seleção.
3. Escolha a **Varinha**.
4. Clique sobre a área que deseja selecionar.
5. Observe a área selecionada.
6. Faça os ajustes necessários.
7. Aplique a alteração desejada.

---

# 7. Cuidado com a Varinha

A Varinha trabalha principalmente com características visuais semelhantes.

Por isso, se duas áreas possuem cores muito parecidas, elas podem acabar sendo selecionadas juntas.

Exemplo:

```text
Área A → azul claro
Área B → azul claro
```

A ferramenta pode ter dificuldade para diferenciar as duas.

Por isso, sempre observe cuidadosamente a seleção antes de aplicar uma alteração.

---

# 8. Seleção Rápida

A **Seleção Rápida** permite selecionar uma região da imagem de maneira mais prática, utilizando um pincel.

Em vez de desenhar precisamente todo o contorno, você passa o pincel sobre o objeto ou região desejada.

Exemplo:

```text id="3n0w5r"
      PESSOA

       ███
      █████
       ███

← Passe o pincel sobre a pessoa
```

O Canva tenta identificar automaticamente os limites da área.

---

# 9. Quando utilizar a Seleção Rápida?

Ela pode ser útil quando queremos selecionar:

- Pessoas;
- Objetos;
- Animais;
- Produtos;
- Elementos do cenário;
- Regiões maiores da fotografia.

Ela é especialmente interessante quando o objeto possui um contorno relativamente bem definido.

---

# 10. Exemplo com uma pessoa

Imagine:

```text id="p4c8qx"
┌─────────────────────┐
│                     │
│       FUNDO         │
│                     │
│        O            │
│       /|\           │
│       / \           │
│                     │
│       FUNDO         │
└─────────────────────┘
```

Com a Seleção Rápida, podemos passar o pincel sobre a pessoa.

O Canva tentará identificar:

```text
Cabeça
  +
Corpo
  +
Braços
  +
Pernas
```

e criar uma seleção ao redor dela.

---

# 11. Como melhorar uma seleção rápida

Uma seleção automática nem sempre fica perfeita.

Podemos encontrar situações como:

```text
┌────────────────────┐
│                    │
│    [ PESSOA ]      │
│       █████        │ ← área que deveria
│                    │   estar fora da seleção
└────────────────────┘
```

Nesse caso, precisamos corrigir a seleção.

Uma boa prática é utilizar pincel menor e trabalhar cuidadosamente nas áreas mais difíceis.

---

# 12. Seleção de Objeto

A **Seleção de Objeto** tem como objetivo identificar um objeto específico dentro da imagem.

Por exemplo:

```text id="myq4au"
┌─────────────────────────┐
│                         │
│       CARRO             │
│      🚗                 │
│                         │
│          PESSOA         │
│                         │
└─────────────────────────┘
```

Se queremos selecionar o carro, a ferramenta tenta identificar automaticamente o objeto.

---

# 13. Exemplo de Seleção de Objeto

Imagine uma fotografia de uma loja:

```text id="3fj3fy"
┌─────────────────────────┐
│                         │
│    👜       👟          │
│                         │
│    📱       🎧          │
│                         │
└─────────────────────────┘
```

Podemos tentar selecionar um objeto específico.

Por exemplo:

```text
Selecione → 👜
```

A ferramenta tentará identificar o objeto inteiro.

---

# 14. Quando utilizar Seleção de Objeto?

Ela é interessante quando precisamos trabalhar com um elemento específico.

Por exemplo:

- Produto;
- Pessoa;
- Carro;
- Animal;
- Móvel;
- Objeto de decoração;
- Elemento de uma fotografia.

---

# 15. Comparando as ferramentas automáticas

| Ferramenta | Principal característica | Melhor utilização |
|---|---|---|
| Varinha | Seleciona áreas semelhantes | Cores e fundos uniformes |
| Seleção Rápida | Seleção utilizando pincel | Regiões maiores e objetos |
| Seleção de Objeto | Identifica um objeto | Produtos, pessoas e elementos específicos |

Podemos resumir:

```text
VARINHA
↓
Cor semelhante


SELEÇÃO RÁPIDA
↓
Pincel + identificação automática


SELEÇÃO DE OBJETO
↓
Identificação de um objeto
```

---

# 16. Ferramentas de Seleção Manual

Agora vamos conhecer ferramentas que oferecem maior controle.

São elas:

```text
Ferramentas manuais

├── Laço
└── Seleção Geométrica
```

Essas ferramentas são úteis quando precisamos definir exatamente uma região.

---

# 17. Ferramenta Laço

O **Laço** permite desenhar manualmente o contorno da região que queremos selecionar.

Imagine:

```text id="0tjx0p"
       ______
     /        \
    /  OBJETO  \
   |            |
    \__________/
```

Nós podemos desenhar ao redor do objeto.

A seleção seguirá o caminho realizado pelo usuário.

---

# 18. Quando utilizar o Laço?

O Laço é útil quando:

- A seleção automática não funcionou bem;
- Precisamos selecionar uma região específica;
- O objeto possui um formato irregular;
- Queremos maior controle;
- Precisamos selecionar somente uma parte do objeto.

---

# 19. Exemplo com o Laço

Imagine uma fotografia de uma pessoa.

Queremos selecionar somente o rosto.

```text id="b6by8t"
       _______
      /       \
     |  ROSTO  |
      \_______/
```

Podemos utilizar o Laço para contornar manualmente a região.

### Passos

1. Selecione a ferramenta **Laço**.
2. Comece em um ponto da imagem.
3. Desenhe ao redor da área desejada.
4. Feche a seleção.
5. Observe o resultado.
6. Faça a edição desejada.

---

# 20. Vantagem do Laço

A principal vantagem é o controle.

Enquanto uma ferramenta automática tenta descobrir o que você deseja selecionar, o Laço permite que você diga exatamente qual região deve ser selecionada.

Por isso:

```text
Seleção automática
       ↓
Mais rapidez


Laço
       ↓
Mais controle
```

---

# 21. Seleção Geométrica

A **Seleção Geométrica** é utilizada para selecionar áreas utilizando formas geométricas.

Dependendo da ferramenta disponível, podemos trabalhar com formatos como:

- Retângulos;
- Quadrados;
- Elipses;
- Círculos.

Exemplo:

```text
Retângulo

┌───────────────┐
│               │
│   SELEÇÃO     │
│               │
└───────────────┘
```

---

# 22. Quando utilizar a Seleção Geométrica?

Ela é muito útil quando queremos selecionar uma área regular.

Por exemplo:

- Parte de um banner;
- Área retangular;
- Fotografia;
- Região de uma tela;
- Elemento quadrado;
- Área circular.

---

# 23. Exemplo com seleção retangular

Imagine uma fotografia:

```text id="5t6xpc"
┌─────────────────────────┐
│                         │
│      ÁREA 1             │
│                         │
│      ÁREA 2             │
│                         │
└─────────────────────────┘
```

Queremos selecionar somente a parte superior.

Podemos utilizar uma seleção retangular:

```text id="89cz6y"
┌─────────────────────────┐
│█████████████████████████│
│█████████████████████████│
│█████████████████████████│
│                         │
│                         │
└─────────────────────────┘
```

---

# 24. Laço x Seleção Geométrica

As duas ferramentas permitem realizar seleções manuais, mas possuem finalidades diferentes.

| Ferramenta | Característica |
|---|---|
| Laço | Seleção livre |
| Seleção Geométrica | Seleção baseada em formas |

Podemos pensar:

```text
LAÇO
↓
"Vou desenhar o formato que preciso."


SELEÇÃO GEOMÉTRICA
↓
"Vou utilizar uma forma regular."
```

---

# 25. Seleção automática x seleção manual

Agora podemos comparar os dois grupos.

| Tipo | Ferramentas | Principal vantagem |
|---|---|---|
| Automática | Varinha, Seleção Rápida, Seleção de Objeto | Velocidade |
| Manual | Laço, Seleção Geométrica | Controle |

### Seleção automática

```text
Imagem
 ↓
Ferramenta identifica
 ↓
Seleção
```

### Seleção manual

```text
Imagem
 ↓
Usuário define
 ↓
Seleção
```

---

# 26. Qual ferramenta devo escolher?

Uma maneira simples de decidir é observar a imagem.

### Fundo com uma cor predominante

Use:

**Varinha**

### Objeto grande ou região ampla

Use:

**Seleção Rápida**

### Objeto específico

Use:

**Seleção de Objeto**

### Formato irregular

Use:

**Laço**

### Formato quadrado, retangular ou circular

Use:

**Seleção Geométrica**

---

# 27. Exemplo completo

Imagine uma fotografia de um produto sobre uma mesa.

```text id="8kh3xn"
┌────────────────────────────┐
│                            │
│          PRODUTO           │
│             ███            │
│            █████           │
│             ███            │
│                            │
│          MESA              │
└────────────────────────────┘
```

Queremos selecionar o produto.

Podemos tentar:

### Opção 1

**Seleção de Objeto**

O Canva tenta identificar o produto.

### Opção 2

**Seleção Rápida**

Passamos o pincel sobre o produto.

### Opção 3

**Laço**

Contornamos manualmente o produto.

Depois podemos comparar os resultados.

---

# 28. Dica importante

Não existe uma única ferramenta que seja sempre a melhor.

Um editor de imagens precisa analisar a fotografia.

Por exemplo:

```text
Imagem simples
     ↓
Seleção automática
     ↓
Resultado rápido
```

Enquanto:

```text
Imagem complexa
     ↓
Seleção automática
     ↓
Resultado incompleto
     ↓
Correção manual
```

Por isso, é comum utilizar mais de uma ferramenta durante uma edição.

---

# 29. Atividade prática — Seleção automática

## Desafio

Escolha uma fotografia que contenha pelo menos três objetos diferentes.

Por exemplo:

```text
Produto
Pessoa
Objeto
```

Tente selecionar cada elemento utilizando:

1. Varinha;
2. Seleção Rápida;
3. Seleção de Objeto.

Depois compare os resultados.

### Responda:

- Qual ferramenta foi mais rápida?
- Qual ferramenta identificou melhor o objeto?
- Alguma seleção ficou incompleta?
- Qual ferramenta você escolheria para essa fotografia?

---

# 30. Atividade prática — Seleção manual

Escolha uma fotografia com diferentes elementos.

Faça três seleções:

### Seleção 1

Utilize o **Laço** para selecionar uma área irregular.

### Seleção 2

Utilize a **Seleção Geométrica** para selecionar uma área retangular.

### Seleção 3

Utilize uma seleção circular ou outra forma geométrica disponível.

Compare os resultados.

---

# 31. Atividade final — Desafio de seleção

Escolha uma fotografia complexa.

Por exemplo:

- Uma rua;
- Uma loja;
- Uma sala;
- Uma fotografia de grupo;
- Uma fotografia de produtos.

Agora escolha um objeto específico.

Tente selecioná-lo utilizando:

```text
1. Seleção de Objeto
        ↓
2. Seleção Rápida
        ↓
3. Laço
```

Depois compare:

```text
VELOCIDADE
PRECISÃO
FACILIDADE
RESULTADO
```

---

# 32. Checklist da atividade

Antes de finalizar, verifique:

- [ ] Testei a Varinha;
- [ ] Testei a Seleção Rápida;
- [ ] Testei a Seleção de Objeto;
- [ ] Testei o Laço;
- [ ] Testei a Seleção Geométrica;
- [ ] Comparei as ferramentas;
- [ ] Observei a precisão das seleções;
- [ ] Corrigi as seleções quando necessário;
- [ ] Escolhi a ferramenta mais adequada para cada situação.

---

# 33. Resumo da aula

As ferramentas de seleção permitem escolher uma determinada área da imagem para trabalhar somente nela.

## Seleção automática

### Varinha

Ideal para:

**Áreas com cores semelhantes.**

### Seleção Rápida

Ideal para:

**Selecionar regiões utilizando um pincel.**

### Seleção de Objeto

Ideal para:

**Identificar objetos específicos.**

---

## Seleção manual

### Laço

Ideal para:

**Seleções livres e irregulares.**

### Seleção Geométrica

Ideal para:

**Áreas com formatos regulares.**

---

# 34. Mapa mental

```text
FERRAMENTAS DE SELEÇÃO
│
├── AUTOMÁTICAS
│   │
│   ├── Varinha
│   │   └── Seleção por características semelhantes
│   │
│   ├── Seleção Rápida
│   │   └── Pincel + identificação automática
│   │
│   └── Seleção de Objeto
│       └── Identificação de objetos
│
└── MANUAIS
    │
    ├── Laço
    │   └── Seleção livre
    │
    └── Seleção Geométrica
        └── Seleção por formas
```

O principal objetivo é aprender a **escolher a ferramenta certa para cada tipo de imagem**.
