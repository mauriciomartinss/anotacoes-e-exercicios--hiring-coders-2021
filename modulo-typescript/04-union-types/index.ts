// union types
// number or string => union types

const nota: string | number = 5; //pode ser qualquer outro tipo de variavel para unir valores
function exibirNota(nota: number | string): void {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);