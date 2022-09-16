/* 08 - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplicar(num1,num2) {
    total = 0;
    for(let i = 0; i < num2; i++) {
        total += num1;
    }
    return total;
}

console.log(multiplicar(3,7));