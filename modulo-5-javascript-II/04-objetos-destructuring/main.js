// formas diferentes de acessar os campos de um objeto

const pessoa = {
    nome: "mauricio",
    idade: 20,
    cidade: "boa esperanca"
}


// notacao de ponto
console.log(pessoa.nome); //"mauricio"

// notacao de colchetes
console.log(pessoa['idade']); //20

//notacao de destructiring
const {nome, idade, cidade} = pessoa;

console.log(nome); //mauricio