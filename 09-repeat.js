/* 09 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repeat(a, num) {
    return Array(a).fill(num);
}

console.log(repeat(5, 5)); 
console.log(repeat(5, 15)); 
console.log(repeat(15, 5)); 