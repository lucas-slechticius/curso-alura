//parametros de função
// function () <= !!! Isso ai, é o parametro, é
// o que ela vai receber.


function soma (num1, num2){
    return num1 + num2
}
console.log(soma(2, 2))
console.log(soma(10, 1))
console.log(soma(10, 3))

function nomeIdade(nome, idade){
    
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("Lucas", 19))


// function de multiplicação

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 2)))


