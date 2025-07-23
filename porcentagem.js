/*1. Receber os números a e b.
2. Dividir b por a.
3. Multiplicar o resultado por 100.
4. Retornar esse valor como a porcentagem.

/*var readline = require('readline-sync');
var numero1 = readline.questionFloat('Digite o primeiro número: ');
var numero2 = readline.questionFloat('Digite o segundo número: ');
let porcentagem = (numero2 / numero1) * 100;
console.log(`${numero2} é ${porcentagem.toFixed(2)}% de ${numero1}`);*/


var readline = require('readline-sync');
let numerador = readline.questionFloat('Digite o valor que voce quer saber a porcentagem (por ex: 30): ');
let denomidador = readline.questionFloat('Digite o valor total (por ex: 80): ');
// Criada função para calcular porcentagem
function porcentagem (numerador, denomidador){
      let valores = (numerador / denomidador) * 100;
      return valores;
}
// Chamando da função e saída
let totporcentagem = porcentagem(numerador, denomidador);
console.log(`O valor ${numerador} representa ${totporcentagem.toFixed
    (2)}% de ${denomidador}`);