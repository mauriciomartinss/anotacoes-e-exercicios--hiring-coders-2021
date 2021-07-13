// biblioteca readline-sync
const livros = require('./database');

// pegar o input

const readline = require('readline-sync');

const entradaInicial = readline.question("deseja buscar um livro? (S/N)");

// se caso seja sim, mostra as categorias disponiveis

// senao, mostra todos os livros em ordem crescente pela quantidade paginas

if(entradaInicial.toLocaleUpperCase() == "S") {
    console.log("essas sao as categorias disponiveis: ");
    console.log("produtividade", "terror", "americas", "tecnologia");

    const entradaCategoria = readline.question("qual categoria vc escolhe? ");
    console.log(entradaCategoria);
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log("esses sao todos os livros disponiveis: ");
    console.table(livrosOrdenados);
    
}