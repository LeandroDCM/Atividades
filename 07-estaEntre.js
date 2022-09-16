/* 07 - Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o
parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre"
como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não
seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
é igual a minimo ou a maximo. */


function estaEntre(numero, minimo, maximo, inclusivo) {
    if(inclusivo === true) {
        if(numero >= minimo && numero <= maximo) {
            return true;
        } else {
            return false;
        }
    } else {
        if(numero > minimo && numero < maximo) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(estaEntre(9,10,100));
console.log(estaEntre(101,10,100));
console.log(estaEntre(11,10,100));
console.log(estaEntre(99,10,100));