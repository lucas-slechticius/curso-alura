const notas = [10, 7, 8, 5, 10]


// com o notas.pop() vazio, sem parametro
// o js entende que é para tirar o ultimo elemento
// do array


notas.pop()

console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)

