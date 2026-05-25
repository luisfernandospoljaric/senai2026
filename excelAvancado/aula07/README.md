# Funções de Texto

| Função em Português | Função em Inglês | Descrição da Função |
|---|---|---|
| CONCATENAR | CONCATENATE | Junta dois ou mais textos em uma única célula. |
| DIREITA | RIGHT | Retorna uma quantidade específica de caracteres da direita do texto. |
| ESQUERDA | LEFT | Retorna uma quantidade específica de caracteres da esquerda do texto. |
| EXT.TEXTO | MID | Extrai caracteres do meio de um texto a partir de uma posição definida. |
| ARRUMAR | TRIM | Remove espaços extras de um texto, mantendo apenas espaços simples entre palavras. |
| SUBSTITUIR | REPLACE | Substitui parte de um texto por outro texto. |

---

# O que são Funções de Texto?

As funções de texto do Excel são utilizadas para:

- manipular textos;
- separar informações;
- juntar conteúdos;
- limpar dados;
- padronizar informações;
- automatizar cadastros.

Essas funções são extremamente utilizadas em:

- bancos de dados;
- dashboards;
- relatórios;
- automações;
- importação de dados;
- tratamento de informações vindas de sistemas.

---

# Funções que iremos aprender

| Função | Objetivo |
|---|---|
| CONCATENAR | Junta textos |
| DIREITA | Retorna caracteres da direita |
| ESQUERDA | Retorna caracteres da esquerda |
| EXT.TEXTO | Extrai texto do meio |
| ARRUMAR | Remove espaços extras |
| SUBSTITUIR | Substitui parte de um texto |

---

# 1. CONCATENAR (CONCATENATE)

## Objetivo

Juntar textos em uma única célula.

---

# Sintaxe

```excel
=CONCATENAR(texto1; texto2; ...)
```

---

# Exemplo Básico

| Nome | Sobrenome |
|---|---|
| Ana | Silva |

Fórmula:

```excel
=CONCATENAR(A2;" ";B2)
```

---

# Resultado

```text
Ana Silva
```

---

# Forma Moderna

Nas versões mais recentes do Excel:

```excel
=A2 & " " & B2
```

Ou:

```excel
=CONCAT(A2;" ";B2)
```

---

# Exemplo Empresarial

## Criando código automático

| Produto | Código |
|---|---|
| Mouse | MOU-001 |

Fórmula:

```excel
=CONCATENAR(ESQUERDA(A2;3);"-001")
```

---

# 2. DIREITA (RIGHT)

## Objetivo

Retornar caracteres da direita do texto.

---

# Sintaxe

```excel
=DIREITA(texto; núm_caract)
```

---

# Exemplo

| Código |
|---|
| PED-2026 |

Fórmula:

```excel
=DIREITA(A2;4)
```

---

# Resultado

```text
2026
```

---

# Uso Empresarial

Muito usado para:

- pegar anos;
- finais de códigos;
- sufixos;
- números de pedidos.

---

# 3. ESQUERDA (LEFT)

## Objetivo

Retornar caracteres da esquerda do texto.

---

# Sintaxe

```excel
=ESQUERDA(texto; núm_caract)
```

---

# Exemplo

| Código |
|---|
| PED-2026 |

Fórmula:

```excel
=ESQUERDA(A2;3)
```

---

# Resultado

```text
PED
```

---

# Uso Empresarial

Muito usado para:

- identificar categorias;
- extrair prefixos;
- separar setores.

---

# 4. EXT.TEXTO (MID)

## Objetivo

Extrair parte do texto do meio.

---

# Sintaxe

```excel
=EXT.TEXTO(texto; posição_inicial; núm_caract)
```

---

# Exemplo

| Código |
|---|
| PED-2026-BR |

Fórmula:

```excel
=EXT.TEXTO(A2;5;4)
```

---

# Resultado

```text
2026
```

---

# Explicando

| Parte | Valor |
|---|---|
| PED- | 4 caracteres |
| 2026 | começa na posição 5 |

---

# Uso Empresarial

Muito usado para:

- separar CPF;
- extrair datas;
- pegar códigos internos;
- tratar importações.

---

# 5. ARRUMAR (TRIM)

## Objetivo

Remover espaços extras.

---

# Sintaxe

```excel
=ARRUMAR(texto)
```

---

# Exemplo

Texto original:

```text
   Ana     Silva
```

Fórmula:

```excel
=ARRUMAR(A2)
```

---

# Resultado

```text
Ana Silva
```

---

# O que o ARRUMAR faz?

- Remove espaços duplicados  
- Remove espaços antes  
- Remove espaços depois

---

# Uso Empresarial

Muito usado em:

- limpeza de banco de dados;
- importação de sistemas;
- cadastros;
- tratamento de planilhas.

---

# 6. SUBSTITUIR (REPLACE)

## Objetivo

Substituir parte de um texto.

---

# Sintaxe

```excel
=SUBSTITUIR(texto_antigo; núm_inicial; núm_caract; novo_texto)
```

---

# Exemplo

| Texto |
|---|
| PED-2025 |

Fórmula:

```excel
=SUBSTITUIR(A2;5;4;"2026")
```

---

# Resultado

```text
PED-2026
```

---

# Explicando

| Argumento | Valor |
|---|---|
| 5 | posição inicial |
| 4 | quantidade de caracteres |
| 2026 | novo texto |

---

# Exemplo Avançado

## Atualizando DDD automaticamente

| Telefone |
|---|
| 11999999999 |

Fórmula:

```excel
=SUBSTITUIR(A2;1;2;"19")
```

---

# Resultado

```text
19999999999
```

---

# Combinação de Funções

No Excel avançado é comum combinar funções.

---

# Exemplo

## Separar nome e sobrenome

| Nome Completo |
|---|
| Carlos Oliveira |

Primeiro nome:

```excel
=ESQUERDA(A2;PROCURAR(" ";A2)-1)
```

Sobrenome:

```excel
=DIREITA(A2;NÚM.CARACT(A2)-PROCURAR(" ";A2))
```

---

# Cenário Empresarial Completo

Imagine um sistema exportando:

```text
PED-2026-SUL-0001
```

Você pode:

| Informação | Função |
|---|---|
| PED | ESQUERDA |
| 2026 | EXT.TEXTO |
| 0001 | DIREITA |

---

# Erros Mais Comuns

---

# 1. Quantidade de caracteres errada

Exemplo:

```excel
=DIREITA(A2;50)
```

Pode retornar valores inesperados.

---

# 2. EXT.TEXTO iniciando em posição errada

Sempre conte os caracteres corretamente.

---

# 3. Espaços ocultos

Use ARRUMAR antes de análises importantes.

---

# Dica Profissional

Combine funções de texto com:

- PROCV;
- ÍNDICE;
- CORRESP;
- FILTRO;
- SOMASES;
- Tabelas Dinâmicas.

---

# Exercício 1 — Básico

Crie uma tabela com:

| Nome | Sobrenome |
|---|---|

Faça:

- CONCATENAR;
- ESQUERDA;
- DIREITA.

---

# Exercício 2 — Intermediário

Utilize:

```text
PED-2026-SUL
```

Extraia:

- PED;
- 2026;
- SUL.

---

# Exercício 3 — Avançado

Crie uma planilha de funcionários contendo:

```text
001-MARIA-SILVA-RH
```

Extraia:

- código;
- nome;
- sobrenome;
- setor.

---

# Resumo Final

| Função | Objetivo |
|---|---|
| CONCATENAR | Junta textos |
| DIREITA | Pega caracteres da direita |
| ESQUERDA | Pega caracteres da esquerda |
| EXT.TEXTO | Extrai texto do meio |
| ARRUMAR | Remove espaços extras |
| SUBSTITUIR | Troca parte do texto |

---

# Quando usar?

Use funções de texto quando precisar:

- Limpar dados  
- Separar informações  
- Automatizar planilhas  
- Tratar bancos de dados  
- Padronizar relatórios  
- Trabalhar com dashboards  
- Automatizar importações de sistemas