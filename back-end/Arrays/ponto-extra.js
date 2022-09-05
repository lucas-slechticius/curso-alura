const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

// Eu escrevi "nota++", porém o JavaScript não carregou pois veio depois do valor
// da váriavel, então o correto nessa situação, dentro de funções,
// é sempre testar primeiro "++var" que funciona.

console.log(notasAtualizadas)