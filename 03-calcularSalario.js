/* 03 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos. O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o 
salário líquido do funcionário no mês. */


const calcSalario = (horas, pagamento) => {
    let bruto = horas * pagamento;
    let resultado = bruto * (1 - .30)
    return Math.ceil(resultado);
}

console.log(calcSalario(180,60));