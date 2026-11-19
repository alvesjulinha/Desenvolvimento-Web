// Objetos
// let pessoa = {
//     nome: "Ana",
//     idade: 25,
//     falar: function(){
//         console.log("Olá")
//     }
// }

// console.log(pessoa.nome)
// pessoa.idade = 26
// console.log(pessoa.idade)
// console.log(pessoa.falar)

// //Arrays
// let frutas = ["maçã", "banana", "uva"];
// frutas.push("laranja");
// frutas.push("abacaxi");

// Atividade

let livro = {
    titulo: "Battle Royale",
    autor: "Koushun Takami",
    anoPublicacao: 1999,
    apresentar: function () {
        return
        "O livro " + this.titulo + ", escrito pelo autor "
            + this.autor + " foi originalmente finalizado em 1996, mas sua primeira publicação ocorreu em "
            + this.anoPublicacao;

    }
}

console.log(livro.apresentar)

let numeros = [0, 1, 2, 3, 4]

function somarPrimeiroUltimo(numeros) {
    return numeros[0] + numeros[numeros.lenght - 1];
}

console.log(somarPrimeiroUltimo(numeros))

//

let aluno = {
    nome: "Ana",
    idade: 25,
    notas: [7.0, 9.2, 8.6],
    mostrarDados: function () {
        return "Nome: " + nome;
    }
}

function calcularMedia(x) {
    for (let i = 0; i < this.notas.lenght; i++) {
        soma += this.notas.lenght[i];
    }
    return soma / this.notas.lenght;
}

function classificarmedia(x) {

}

