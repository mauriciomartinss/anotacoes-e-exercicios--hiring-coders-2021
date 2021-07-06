var valores = [5, 8, 10, 22, 45, 48];

function busca(num) {
    for(let i = 0; i < 6; i++) {
        if(num == valores[i]) {
            return "posicao " + i;
        }
    }
    return "valor nao encontrado";
}

// usando a ferramenta de busca

console.log(busca(10));
console.log(busca(50));



// parte dois da aula de busca (provavelmente é busca binaria)

function buscaBinaria(num) {
    let inicio, fim;
    let meio;
    inicio = 0;
    fim = 9;
    while (inicio < meio) {
        meio = (inicio + fim) / 2;
        if (num == valores[meio]) {
            return meio;
        } else {
            if(num > valores[meio]) {
                inicio = meio + 1;
            } else {
                fim = meio -1;
            }
        }
    }
    return -1;
}

// usando busca binaria

console.log(buscaBin(10));
console.log(buscaBinaria(60));