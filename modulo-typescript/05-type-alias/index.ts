// alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
} //acho que é como se fosse o struct do c++

// type Funcionarios = Array<Funcionario>; //um array de string (poderia ser também "Funcionario[]")

// const funcionarios: Funcionarios = [{
//     nome: 'mauricio',
//     sobrenome: 'martins',
//     dataNascimento: new Date() 
// }];

// poderia ser também assim:
// ao invés de criar um tipo funcionarios fazer:

const funcionarios: Funcionario[] = [{
    nome: 'mauricio',
    sobrenome: 'martins',
    dataNascimento: new Date() 
}];

