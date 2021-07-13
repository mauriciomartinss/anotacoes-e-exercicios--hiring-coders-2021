// arrows functions serao priorizadas quando formos usar funcoes anonimas ou funcoes por callbacks

// function antes de 2015

function soma(a, b) {
    return a + b;
}

console.log(soma(3,5)) //8

const soma = (num1, num2) => {
    return num1 + num2;
}

// ou

const soma = (num1, num2) => num1 + num2; //forma abreviada, o js entende que eh pra retornar a soma

const sayHello = nome => `hello ${nome}`; //quando a funcao recebe so um parametro nao eh necessario usar parenteses