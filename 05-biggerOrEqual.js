/* 05 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings. */


function biggerOrEqual(num1, num2){
    if(Number(num1) >= Number(num2)) {
        return true;
    }else {
        return false;
    }
}

console.log(biggerOrEqual(2,"3"));
console.log(biggerOrEqual(2,2));
console.log(biggerOrEqual(2,4));
console.log(biggerOrEqual(6,4));
console.log(biggerOrEqual("6",4));