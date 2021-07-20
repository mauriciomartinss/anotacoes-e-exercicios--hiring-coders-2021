// class Data {
//     dia: number; //sao publicas por padrao, mas podem ser restringidas
//     mes: number;
//     ano: number;

//     constructor(dia: number, mes: number, ano: number) {
//         this.dia = dia;
//         this.mes = mes;
//         this.ano = ano;
//     }
// }

// class Data {
//     public dia: number; // pode ser utilizada por outras classes/instancias
//     private mes: number;// pode ser usada apenas pela própria classe
//     ano: number;

//     constructor(dia: number, mes: number, ano: number = 1970) { //pode ser definido um valor padrao
//         this.dia = dia;
//         this.mes = mes;
//         this.ano = ano;
//     }
// }

class Data {
    // dia: number; 
    // mes: number;
    // ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

const data = new Data(1,1,2020);
console.log(data.dia);
// console.log(data.mes)//dá erro

const data2 = new Data(1, 1);