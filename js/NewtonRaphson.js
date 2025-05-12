// Calculando o instante em que a velocidade é igual a N e usando o resultado para calcular a raiz pelo Método de Newton-Raphson
// Entrada de dados
const input = require("fs").readFileSync("data/numMatricula.txt", "utf-8");
const lines = input.split("\r\n");

// ETAPA 1 --> encontrar o último dígito da matrícula de 7 dígitos de três alunos e calcular o valor de N
function encontrarUltimoDigito(matricula) {
    return matricula.split("")[6];
}

const digito1 = parseInt(encontrarUltimoDigito(lines[0]));
const digito2 = parseInt(encontrarUltimoDigito(lines[1]));
const digito3 = parseInt(encontrarUltimoDigito(lines[2]));

const N = (10 + (digito1 + digito2 + digito3)) / 10;
// ETAPA 2 --> Calcular a função da posição, da velocidade e da aceleração 
// Declarando a variável que reúne os coeficientes

const coef = [
    -0.0000001750396,  // x^9
     0.0000178745381,  // x^8
    -0.0007609298948,  // x^7
     0.0174910455729,  // x^6
    -0.2349343802181,  // x^5
     1.8634879254384,  // x^4
    -8.3919317039247,  // x^3
    19.1956694353518,  // x^2
   -14.2440194418222   // x^1
];

// Definindo a função da posição s(x) para melhorar a ilustração da derivação
function s(x) {
    let resultado = 0;
    for (let i = 0; i < coef.length; i++) {
        resultado += coef[i] * Math.pow(x, 9 - i);
    }
    return resultado;
}

// Definindo a função da velocidade v(x) a partir da derivação de s(x)
function v(x) {
    let resultado = 0;
    for (let i = 0; i < coef.length; i++) {
        let expoente = 9 - i;
        resultado += coef[i] * expoente * Math.pow(x, expoente - 1);
    }
    return resultado;
}

// Definindo a função da aceleração a(x) a partir da derivação de v(x)
function a(x) {
    let resultado = 0;
    for (let i = 0; i < coef.length; i++) {
        let expoente = 9 - i;

     // if (expoente - 2 >= 0)
        if (expoente >= 2) {
            resultado += coef[i] * expoente * (expoente - 1) * Math.pow(x, expoente - 2);
        }
    }
    return resultado;
}

// ETAPA 3 --> Definindo a função que calcula o instante em que v(x) será igual a N
function f(x) {
    // v(x) = N
    return v(x) - N
}

// ETAPA 4 --> Definindo a função que calcula com o Método de Newton Raphson
function NewtonRaphson(f, fDerivada, x0, tol, nIteracoes) {
    let x = x0;
    for (let i = 0; i <= nIteracoes; i ++) {
        let fx = f(x);
        let fDx = fDerivada(x);
        let raiz = x - (fx/fDx);
        let delta = raiz - x;
        x = raiz
        
        if (Math.abs(delta) <= tol) {
            break;
        }
    }
    return raiz;
}

// ETAPA 5 --> chamando a função e imprimindo o resultado
const raiz = NewtonRaphson(f, a, 14, 0.000001, 100);

// Imprimindo o resultado
console.log(`Velocidade N: ${N.toFixed(2)} m/s`);
console.log(`Instante em que o objeto atinge essa velocidade: ${raiz.toFixed(6)} s`);
