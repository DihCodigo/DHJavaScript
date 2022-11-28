const filmes = [
    "Vingadores",
    "Adão Negro",
    "Maverick",
    "Pantera Negra",
    "Homem de Ferro"
];

//console.log(filmes[1]);

const retornarFilmes = (idFilme) => {
    if(filmes[idFilme]){
        return filmes[idFilme];
    }

    return `Filme com id ${idFilme} não encontrado`;
}

module.exports = {
    filmes,
    retornarFilmes
};