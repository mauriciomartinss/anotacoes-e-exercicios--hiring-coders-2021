interface Usuario { //pesquisar por interface x type alias
    nome: string;
    email: string;
    address?: string;

}

function getUser(): Usuario {
    return {
        nome: 'mauricio',
        email: 'mauricio@mau.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}