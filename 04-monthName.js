/* 04 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
    exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function monthName (num) {
    if(typeof num !== 'number' || num < 1 || num > 12) {
        return console.log('Número não válido ou não é número.');
    }
    let months = {
        1: 'janeiro',
        2: 'fevereiro',
        3: 'março',
        4: 'abril',
        5: 'maio',
        6: 'junho',
        7: 'julho',
        8: 'agosto',
        9: 'setembro',
        10: 'outubro',
        11: 'novembro',
        12: 'dezembro',
    };
    return console.log(months[num]); 
}

monthName('inehoff')
monthName(5)
monthName(10)
monthName(12)
monthName(13)