const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

// Eu escrevi "nota++", porém o JavaScript nessa situação, primeiro lê o valor
// da váriavel, sendo 10, e depois adiciona uma unidade, totalizando 11, porém!
// por causa disso, ele acaba "atualizando" o array, mas não mostra o valor
// atualizado no console.log, só se eu por acaso colocar "nota++ , nota"
// Por isso, sempre é importante nessa situação, fazer o JavaScript primeiro
// adicionar o valor, que assim aparece, resultando em "++nota"

console.log(notasAtualizadas)