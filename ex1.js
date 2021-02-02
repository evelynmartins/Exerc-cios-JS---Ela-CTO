/**
* 1- Crie um programa que utilize as 3 dimensões de uma piscina para
* calcular quantos litros de água ela comporta. (1000 litros = 1m³)
* 
* 2- Faça com que o programa imprima o resultado de forma amigável.
* Ex:
*      A piscina comporta 50000 litros de água      
*/

let comprimento = 10;
let largura = 4;
let profundidade = 2;

function volume(comprimento,largura,profundidade) {

return comprimento*largura*profundidade ;

}

vol = volume(25,8,12)

console.log("A piscina comporta "+ vol + " litros de água.")