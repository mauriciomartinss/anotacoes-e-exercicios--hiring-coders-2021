var valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function ordena() {
    let inicio = 0;
    let fim = 10;
    let tmp;

    for (let i = 0; i < 9; i++) { // fazer o teste de mesa
        for(pos = inicio; pos < fim - 1 - i; pos++) {
            if (valores[pos] > valores[pos + 1]) {
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tmp;
            }
        }
    }
}

ordena();
console.log(valores);
 