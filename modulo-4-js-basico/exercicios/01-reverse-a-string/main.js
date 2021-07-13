let reverseAString = (str) => {
    let varAux = "";
    for(let i = str.length - 1; i >= 0; i--) {
        varAux += str[i];
    }
    return varAux;
}

let resultado = reverseAString("isso eh um teste");

console.log(resultado);