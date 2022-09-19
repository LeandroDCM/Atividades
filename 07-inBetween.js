/* 07 - Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o
parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre"
como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não
seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
é igual a minimo ou a maximo. */


function isBetween(number, minimum, maximum, inclusive) {
    if(inclusive === true) {
        if(number >= minimum && number <= maximum) {
            return true;
        } else {
            return false;
        }
    } else {
        if(number > minimum && number < maximum) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isBetween(9,10,100,false));
console.log(isBetween(101,10,100,false));
console.log(isBetween(11,10,100,false));
console.log(isBetween(99,10,100,false));
console.log('----------------------');
console.log(isBetween(9,10,100,true));
console.log(isBetween(101,10,100,true));
console.log(isBetween(10,10,100,true));
console.log(isBetween(100,10,100,true));