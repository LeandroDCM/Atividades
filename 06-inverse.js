/* 06 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...". */


function inverse(arg) {
    if (typeof arg === 'number') {
        return arg * -1;
    } else if (arg === true){
        return false;
    } else if (arg === false){
        return true;
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof arg}`;
    }
}

console.log(inverse(-20))
console.log(inverse(20))
console.log(inverse(true))
console.log(inverse(false))
console.log(inverse('inehoff'));
console.log(inverse(null))


