const alunos = ['Jõao', 'Juliana', 'Caio', 'Anna']

const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(listaDeNotasEAlunos)
                    // primeiro é o indice, a ordem da lista, depois, é a ordem que
                    // inicia essa lista, ou seja [0] <= lista Alunos [0] <= ordem 0
console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)


const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)

/*
const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)

*/