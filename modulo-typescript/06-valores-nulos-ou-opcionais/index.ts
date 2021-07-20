let altura: number | null = 1.6;

altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; //o ponto de interrogacao serve para dizer para o ts que é um campo opcional
}

const contato: Contato = {
    nome: 'Vitor',
    telefone1: '333333333',
}