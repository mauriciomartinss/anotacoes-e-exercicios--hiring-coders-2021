//classes


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
    read() {
        return `estou lendo ${this.title}`;
    }
}

// let book = new Book("algoritmos para viver", "brian", 500);
// let otherBook = new Book("um exu em new your", "cidinha da silava", 100);

// console.log(book, otherBook);


// class ITBook extends Book { //mostra como pode herdar campos de outras classes
//     constructor(title, author, pages, technology) {
//         super(title, author, pages); //herdando os atributos da classe anterior
//         this.technology = technology;
//     }
// }

// let itBook = new ITBook("algoritmos para viver", "brain", 500, "algoritmos");


// console.log(itBook.title);


// encapsulamento (nunca entendi essa parte kkkkk - vamo ver se é hoje!)

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { //torna a variavel _name "publico" (como se fosse)
        return this._name;
    }
    set name(value) { //posso reatribuir um valor
        this._name = value;
    }
}

let person = new Person("mauricio");

console.log(person.nome)