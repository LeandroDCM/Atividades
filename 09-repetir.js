/* 09 - Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(a, num) {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(a);
    }
    return result;
}

console.log(repetir(7, 3));