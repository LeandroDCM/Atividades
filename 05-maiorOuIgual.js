/* 05 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings. */


function maiorOuIgual(num1, num2){
    if(num1 >= num2) {
        return true;
    }else {
        return false;
    }
}

console.log(maiorOuIgual(2,"3"));
console.log(maiorOuIgual(2,2));
console.log(maiorOuIgual(2,4));
console.log(maiorOuIgual(6,4));