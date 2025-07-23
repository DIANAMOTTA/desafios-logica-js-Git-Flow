/* 1. Receber uma letra e uma frase.
 2. Criar um contador iniciando em zero.
 Para cada letra da frase: *Verficar se essa letra é igual à letra informada.
 *Se for, aumentar o contador
 4. No final, retornar o valor do contador

inicialização; condição; incremento
for (let i = 0; i < frase.length; i++) {
 if (frase[i] === letra) {
   quantidade++;
 }
}
console.log(`A letra '${letra}' aparece ${quantidade} vezes na frase.`); */

let readlineSync = require("readline-sync");
let letra = readlineSync.question("Digite uma letra para contar:  ");
let frase = readlineSync.question("Digite uma frase: ");
//Cria função para contar número de letras em uma frase
function cacaLetras(letra, frase) {
  let quantidade = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
      quantidade++;
    }
  }
  return quantidade;
}
// chama função cacaLetras
let quantidadeTot = cacaLetras(letra, frase);
console.log(`A letra "${letra}" aparece ${quantidadeTot} vezes na frase.`);
