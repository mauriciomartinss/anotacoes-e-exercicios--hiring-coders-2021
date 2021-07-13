const alunasGama = ["paula", "maria", "estela", "clara"];

// informações num array
console.log(alunasGama[2]);

// operador spread (...): ele copia/ espalha/ trás os elementos constantes de um array para outro sem modificar/ altarar o array original

const alunasXp = [...alunasGama, "simara"];

console.log(alunasXp);

// metodos de iteracao

// for (let i = 0; i < alunasXp.length; i++) { iterando com a estrutura de repeticao for
//     console.log(alunasXp[i]);
// }

/*
  metodo map(): ele recebe como argumento uma funcao. em cada iteracao que sera realizada de acordo
               com o tamanho do array, ele executara essa callback
*/ 

let i = 1;

alunasXp.map(aluna => {
    console.log(`[${aluna}] eh a ${i}°`);
    i++
});

// metodo filter

const numeros = [1, 34, 35];

const numerosImpares = numeros.filter(numero => numero%2 != 0);

numerosImpares.map(oddNumbers => console.log(oddNumbers));

const numerosOrdenados = numeros.sort((a,b) => b-a)

console.log(numerosOrdenados);

// metodo  find 

// metodo reduce: reduz o array a um resultado de uma operação matemática

const soma = numeros.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0); //o zero eh para ter certeza de que nao ha lixo ou também pode ser um valor que a variavel "valorAnterior" vai comecar

console.log(soma);


