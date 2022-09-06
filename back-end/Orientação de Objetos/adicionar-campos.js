const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"123456789",
    email: "andre@email.com"
}

console.log(cliente)
cliente.fone = "934512345"

console.log(cliente)

/*
é possível atualizar apenas adicionando o nome
do objeto + o que deve ser adicionado e o valor desse
novo objeto da lista, nesse caso, utilizei da seguinte
forma:

cliente.fone = "num"

Desse jeito ele atualiza e cria um novo objeto da lista,
depois disso para atualizar é apenas chamar essa função
novamente, por exemplo:

cliente.fone= "num2"
*/

cliente.fone = "111111111"

console.log(cliente.fone)