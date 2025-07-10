# 🏎️ Simulador de Corrida do Mario

Este é um projeto **Node.js** simples criado para praticar lógica de programação em **JavaScript**, inspirado no universo do Mario Kart. O objetivo é simular corridas entre dois personagens, considerando atributos como **velocidade**, **manobrabilidade** e **poder**.

---

## 🚀 Objetivo

Praticar:
- **Lógica de programação**
- Manipulação de objetos em JavaScript
- Estruturas de repetição e condicionais
- Entrada no ambiente **Node.js**

---

## 🕹️ Como funciona

- Dois jogadores são representados como **objetos**, com os seguintes atributos:
  - **nome**
  - **velocidade**
  - **manobrabilidade**
  - **poder**

- Cada corrida tem **5 rodadas**. Em cada rodada:
  - É escolhida aleatoriamente uma **pista** com um critério principal:  
    - **Reta:** velocidade  
    - **Curva:** manobrabilidade  
    - **Confronto:** poder
  - Cada jogador **rola um dado (1-6)**.
  - O valor do dado é somado ao atributo relacionado com a pista.

- O jogador com o **maior total** vence a rodada e ganha 1 ponto.

- Após as 5 rodadas, quem tiver mais pontos vence a corrida! 🏁

---

## ⚙️ Tecnologias

- [Node.js](https://nodejs.org/)
- JavaScript puro

---

## ▶️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/simulador-corrida-mario.git

2. Instale o Node.js, se ainda não tiver:
- [Node.js](https://nodejs.org/)

3. Execute o arquivo principal:
    node index.js

✨ Exemplo de rodada

🏁 Pista: Reta (velocidade)
Mario: velocidade base 3 + dado 6 = 9
Luigi: velocidade base 3 + dado 5 = 8
➡️ Mario vence a rodada!

