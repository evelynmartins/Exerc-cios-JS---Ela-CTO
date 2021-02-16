/**
 * Escreva um programa que utiliza o conteúdo da variável frase e coloca cada uma
 * de suas letras em uma linha do console, com um intervalo de 1 segundo entre
 * o aparecimento de cada letra.
 */

//let frase = "Ei você aí, me dá um dinheiro ai"

//const frase = "Ei você aí, me dá um dinheiro ai"

//const vetorFrase = frase.split("")

//leitura simples sem função
//for (let i = 0; i < vetorFrase.length; i++) {

//    console.log(vetorFrase[i])

const frase = "Ei você aí, me dá um dinheiro ai"
let text = ""
const vetorFrase = frase.split("")

const imprimirCadaSegundo = (s) => {
    for (let i = 0; i < s.length; i++) {
        setTimeout(() => {
            console.log(s[i])
        }, 1000 * i);
    }
}

imprimirCadaSegundo(vetorFrase);