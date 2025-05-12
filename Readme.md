# Cálculo do Instante de Velocidade Específica com Newton-Raphson

Este projeto tem como objetivo encontrar o instante em que um objeto atinge uma velocidade específica `N`, utilizando um polinômio de grau 9 gerado a partir de uma sequência de pontos no geogebra que forma uma funcao s(x) = [(0.0, 0.0), (1.6, 2.0), (2.783, 7.915), (5.183, 10.915), (12.993, 18.725), (14.593, 20.725), (15.775, 23.682), (18.975, 27.682), (19.993, 30.51), (23.593, 34.51)].
 Para isso, é aplicado o método de Newton-Raphson.


## Como funciona

1. **Entrada de Dados**
   - Lê três matrículas de alunos (7 dígitos) de um arquivo `data/numMatricula.txt`.
   - Usa o último dígito de cada matrícula para calcular a velocidade `N` com a fórmula:  
     ```
     N = (10 + (digito1 + digito2 + digito3)) / 10
     ```

2. **Modelagem da Função s(x)**
   - Utiliza um polinômio de grau 9 obtido a partir de dados experimentais de posição ao longo do tempo.
   - Deriva `s(x)` para obter `v(x)` (velocidade) e `a(x)` (aceleração), diretamente no código.

3. **Cálculo da Raiz**
   - Define `f(x) = v(x) - N`, ou seja, o instante onde a velocidade atinge `N`.
   - Aplica o método de Newton-Raphson para encontrar a raiz dessa função (o instante procurado).

## Exemplo de Saída

```
Velocidade N: 3.20 m/s
Instante em que o objeto atinge essa velocidade: 19.625524 s
```

## Requisitos

- Node.js instalado
- Um arquivo `numMatricula.txt` com três linhas, cada uma contendo uma matrícula de 7 dígitos.

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/rafaelmendes007/MetodoNewtonRaphson
   ```

2. Adicione o arquivo `numMatricula.txt` na pasta `data` com três matrículas.

## Observações

- O polinômio foi ajustado com base em dados fornecidos pelo Geogebra.
- As derivadas são calculadas manualmente, termo a termo.