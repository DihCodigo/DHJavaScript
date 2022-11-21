let pais = {
    nome: "Diego",
    cidade: "Cruzeiro",
    dizerNacionalidade: function() {
        return "Sou do Brasil e meu nome é " + this.nome; 
    }
};

console.log(pais.nome + " e " + pais.cidade);

console.log(pais['nome']);

console.log(pais.dizerNacionalidade());