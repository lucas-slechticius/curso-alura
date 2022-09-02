const alunos = ['João', 'Juliana', 'Caio', 'Anna']
const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // VAI VIRAR UM NÚMERO! Armazenado no Indice
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Caio"))
console.log(exibeNomeNota("Juliana"))
console.log(exibeNomeNota("João"))
console.log(exibeNomeNota("Nemo"))

//o Includes, sempre retorna um Booleano, (linha 7)
// agora indexOf => número | Ele sempre retornara um número, dentro da váriavel indice.

