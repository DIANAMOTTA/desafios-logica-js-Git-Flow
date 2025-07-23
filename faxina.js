/* 1. Criar a função que recebe um objeto como parâmetro.
   2. Dentro da função, percorrer cada propriedade do objeto.
   3. Verificar se o valor da propriedade é null.
   4. Irei usar a propriedade delete para deletar 
   5. Retornar ou exibir o novo objeto.*/


function limpa(pessoa) {
  for (let percorre in pessoa) { //for (let percorre in pessoa) → percorre cada chave do objeto.
    if (pessoa[percorre] === null) { // (pessoa[percorre] === null) → verifica se o valor da chave é null.
      delete pessoa[percorre]; // delete pessoa[percorre] → remove a chave do objeto se for null.
    }
  }
  return pessoa;
}

let obPessoa = {
  nome: null,
  sobrenome: "Motta",
  idade: 30
};

let percorre = limpa(obPessoa);
console.log(percorre);
