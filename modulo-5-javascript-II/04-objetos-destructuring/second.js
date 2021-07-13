// parece muito com JSON

const filmes = [
    {
        id: 1,
        titulo: "dilema das redes",
        descricao: "documentario sobre tecnologia",
        duracao: 120
    },
    {
        id: 2,
        titulo: "us",
        descricao: "um filme de terro legal demais",
        duracao: 120
    },
    {
        id: 3,
        titulo: "corra",
        descricao: "um filme de suspense",
        duracao: 120
    }
]


const [{ id, titulo, descricao, duracao }] = filmes;


console.log(titulo); //vai printar o primeiro elemento do array

filmes.map(filme => console.log(filme.descricao));