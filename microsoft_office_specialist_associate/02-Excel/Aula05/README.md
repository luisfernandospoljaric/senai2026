
# 📘 Funções Financeiras no Excel

Este documento explica as funções financeiras **TAXA, NPER, PGTO, PGTOCAPACUM, PGTOJURACUM e VF**, com exemplos práticos.

---

## 1. **TAXA**
👉 **Para que serve:**  
Calcula a **taxa de juros** de um investimento ou financiamento, sabendo os valores envolvidos, o tempo e os pagamentos.  

👉 **Sintaxe:**
```excel
=TAXA(nper; pgto; vp; [vf]; [tipo]; [suposição])
```
- **nper** → número total de períodos  
- **pgto** → valor pago a cada período (geralmente negativo)  
- **vp** → valor presente (quanto foi financiado ou investido)  
- **vf** → valor futuro (opcional)  
- **tipo** → 0 (pagamento no final do período) ou 1 (início)  

👉 **Exemplo:**
Você aplicou R$ 10.000,00 e depois de 24 meses terá R$ 14.000,00.  
```excel
=TAXA(24;0;-10000;14000)
```
📌 Resultado: **1,45% ao mês**

---

## 2. **NPER**
👉 **Para que serve:**  
Calcula **quantos períodos (meses/anos)** serão necessários para quitar um empréstimo ou alcançar um valor futuro.  

👉 **Sintaxe:**
```excel
=NPER(taxa; pgto; vp; [vf]; [tipo])
```

👉 **Exemplo:**
Você fez um empréstimo de R$ 20.000,00 com taxa de 2% ao mês e paga R$ 1.200,00 mensais:  
```excel
=NPER(2%;-1200;20000)
```
📌 Resultado: **20 meses**

---

## 3. **PGTO**
👉 **Para que serve:**  
Calcula o **valor da parcela** de um financiamento ou empréstimo.  

👉 **Sintaxe:**
```excel
=PGTO(taxa; nper; vp; [vf]; [tipo])
```

👉 **Exemplo:**
Um carro de R$ 30.000,00 financiado em 36 meses com juros de 1,5% ao mês:  
```excel
=PGTO(1,5%;36;30000)
```
📌 Resultado: **R$ 1.092,13**

---

## 4. **PGTOCAPACUM**
👉 **Para que serve:**  
Mostra o **quanto do capital (valor emprestado/investido)** já foi pago em determinado período de um financiamento.  

👉 **Sintaxe:**
```excel
=PGTOCAPACUM(taxa; nper; vp; período_inicial; período_final; [tipo])
```

👉 **Exemplo:**
Financiamento de R$ 50.000,00 em 60 meses com 1,8% de juros ao mês.  
Quanto do capital foi pago até a 12ª parcela?  
```excel
=PGTOCAPACUM(1,8%;60;50000;1;12)
```
📌 Resultado: **R$ 5.183,23**

---

## 5. **PGTOJURACUM**
👉 **Para que serve:**  
Mostra o **quanto de juros** foi pago em determinado período.  

👉 **Sintaxe:**
```excel
=PGTOJURACUM(taxa; nper; vp; período_inicial; período_final; [tipo])
```

👉 **Exemplo:**
No mesmo financiamento anterior (R$ 50.000 em 60 meses, taxa de 1,8%),  
quanto de juros foi pago até a 12ª parcela?  
```excel
=PGTOJURACUM(1,8%;60;50000;1;12)
```
📌 Resultado: **R$ 12.250,19**

---

## 6. **VF**
👉 **Para que serve:**  
Calcula o **valor futuro** de um investimento com depósitos periódicos.  

👉 **Sintaxe:**
```excel
=VF(taxa; nper; pgto; [vp]; [tipo])
```

👉 **Exemplo:**
Investindo R$ 500,00 por mês durante 36 meses a 1% de juros ao mês:  
```excel
=VF(1%;36;-500)
```
📌 Resultado: **R$ 21.669,05**

---

# 📌 Resumindo:
- **TAXA** → Descobrir qual é a taxa de juros.  
- **NPER** → Descobrir em quantos meses/anos paga.  
- **PGTO** → Descobrir quanto será a parcela.  
- **PGTOCAPACUM** → Saber quanto do **capital** já foi pago.  
- **PGTOJURACUM** → Saber quanto de **juros** já foi pago.  
- **VF** → Saber o valor acumulado ao final de um investimento.  



# 📊 Exercícios de Funções Financeiras no Excel

Este material contém **1 exercício para cada função financeira**: **TAXA, NPER, PGTO, PGTOCAPACUM, PGTOJURACUM e VF**.  
Cada exercício possui **contexto, tabela e gabarito**.

---

## 1. Função **TAXA**
### Contexto:  
Um investidor aplicou R$ 10.000,00 e, após 24 meses, recebeu R$ 14.000,00.  
Qual foi a **taxa de juros mensal** dessa aplicação?

### Tabela:
| Descrição        | Valor    |
|------------------|----------|
| Valor Presente   | 10.000   |
| Valor Futuro     | 14.000   |
| Períodos (meses) | 24       |
| Taxa             | ?        |

<!--
### Fórmula no Excel:
```excel
=TAXA(24;-10000;0;14000)
```

### Gabarito:
**1,45% ao mês**
-->
---

## 2. Função **NPER**
### Contexto:  
Um empréstimo de R$ 20.000,00 foi feito com taxa de 2% ao mês.  
O valor da parcela é de R$ 1.200,00.  
Em quantos meses o empréstimo será quitado?

### Tabela:
| Descrição        | Valor    |
|------------------|----------|
| Valor Presente   | 20.000   |
| Parcela (PMT)    | 1.200    |
| Taxa ao mês      | 2%       |
| NPER             | ?        |

<!--
### Fórmula no Excel:
```excel
=NPER(2%;-1200;20000)
```

### Gabarito:
**20 meses**
-->
---

## 3. Função **PGTO**
### Contexto:  
Um carro de R$ 30.000,00 será financiado em 36 meses com taxa de juros de 1,5% ao mês.  
Qual será o valor da parcela mensal?

### Tabela:
| Descrição        | Valor    |
|------------------|----------|
| Valor Presente   | 30.000   |
| Taxa ao mês      | 1,5%     |
| Períodos (meses) | 36       |
| Parcela (PMT)    | ?        |

<!--
### Fórmula no Excel:
```excel
=PGTO(1,5%;36;30000)
```

### Gabarito:
**R$ 1.092,13**
-->
---

## 4. Função **PGTOCAPACUM**
### Contexto:  
Um financiamento de R$ 50.000,00 foi feito em 60 meses com taxa de 1,8% ao mês.  
Quanto de **capital** foi pago até a 12ª parcela?

### Tabela:
| Descrição        | Valor    |
|------------------|----------|
| Valor Presente   | 50.000   |
| Taxa ao mês      | 1,8%     |
| Períodos (meses) | 60       |
| Parcela inicial  | 1        |
| Parcela final    | 12       |
| Capital pago     | ?        |
<!--
### Fórmula no Excel:
```excel
=PGTOCAPACUM(1,8%;60;50000;1;12)
```

### Gabarito:
**R$ 5.183,23**
-->
---

## 5. Função **PGTOJURACUM**
### Contexto:  
No mesmo financiamento acima (R$ 50.000,00 em 60 meses, taxa de 1,8%),  
quanto de **juros** foi pago até a 12ª parcela?

### Tabela:
| Descrição        | Valor    |
|------------------|----------|
| Valor Presente   | 50.000   |
| Taxa ao mês      | 1,8%     |
| Períodos (meses) | 60       |
| Parcela inicial  | 1        |
| Parcela final    | 12       |
| Juros pagos      | ?        |

<!--
### Fórmula no Excel:
```excel
=PGTOJURACUM(1,8%;60;50000;1;12)
```

### Gabarito:
**R$ 12.250,19**
-->
---

## 6. Função **VF**
### Contexto:  
Você decide investir R$ 500,00 por mês durante 36 meses em uma aplicação que rende 1% ao mês.  
Qual será o valor futuro acumulado?

### Tabela:
| Descrição        | Valor    |
|------------------|----------|
| Pagamento mensal | 500      |
| Taxa ao mês      | 1%       |
| Períodos (meses) | 36       |
| Valor Futuro     | ?        |

<!--
### Fórmula no Excel:
```excel
=VF(1%;36;-500)
```

### Gabarito:
**R$ 21.669,05**
-->