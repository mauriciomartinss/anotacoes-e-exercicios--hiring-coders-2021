class User {
   constructor(name, email) { //sendo que o contructor eh um método que eh obrigatorio da classe. isso seria as propriedades/ variaveis de uma funcao
        this.name = name
        this.email = email
    }
    sendMesage(mesage) {
        console.log(message)
    }
}

const user = new User;

// user.sendMesage("hello hiring coders");
// console.log(user);


class Admin extends User { //a classe admin herda as caracteristicas de user e recebe caracteristicas próprias
    constructor(name, email) {
        super(name, email);
        this.isAdmin = true;
        this.id;
    }
}


const objetoUser = new Admin("karla santos", "karla@santos.com");

console.log(objetoUser.id);