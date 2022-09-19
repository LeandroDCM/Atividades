/* 10 - Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function plusSymbol(num) {
    let result = '';
    for(let i = 0; i < num; i++) {
        result += '+';
    }
    return result;
}

console.log(plusSymbol(5));