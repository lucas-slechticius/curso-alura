const notas = [10,  6.5, 8, 7.5]

let somaDasNotas = 0

// Sempre cuidar para não inserir uma váriavel dentro
// do for, pois a váriavel pode se alterar e bagunçar o código
// é uma boa prática sempre mander as váriaveis com um valor, fora
// do for, para evitar esses bugs! =)

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length

console.log(media)