// boolean

const contaPaga: boolean = false;

// number

const idade: number = 23;
const avaliacao: number = 4.5;

// string

const nome: string = 'mauricio';

// array

const idades: number[] = [23, 24];

// tuple: parecido com o array, a diferenca é que ele é definido

let jogadores: [ string, string, string];

// enum

enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003',
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any: quando não se sabe qual é o tipo do valor que irá receber/retornar
const retornoDaAPI: any[] = [ 1, 'mauricio', false ];
const retornoDaAPI2: any = {
    // ...
}

// void

function printawrNaTela (msg: string): void {
    console.log(msg);// funcao nao retorna, portanto, um procedimento.
}

// Null e Undefined

const u: undefined = undefined;

const n: null = null;

// object: quando nao é um tipo primitivo

function criar(objecto: object) {
    // ...
}

criar({
    propriedade: 1,
})