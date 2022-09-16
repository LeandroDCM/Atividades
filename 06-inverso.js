/* 06 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...". */


function inverso(arg) {
    if (typeof arg === 'boolean' && arg === true) {
        return false;
    } else if (typeof arg === 'boolean' && arg === false) {
        return true;
    } else if (typeof arg === 'number' && arg >= 0) {
        return -Math.abs(arg);
    } else if (typeof arg === 'number' && arg < 0) {
        return Math.abs(arg);
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof arg}`;
    }
}

console.log(inverso(20))