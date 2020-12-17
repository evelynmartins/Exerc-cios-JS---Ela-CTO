// DESAFIO 4:

// Crie um programa que receba um número inteiro e imprima na tela seu sucessor e antecessor. A resposta deve ser: "Analisando o número x, seu antecessor é y e seu sucessor é z".

let num = 0
let ant= 0
let suc=0

num= Number(prompt("Digite um número: "))
ant= num -1
suc= num +1

console.log("Analisando o número "+num+", seu antecessor é "+ ant+"  e seu sucessor é "+suc)