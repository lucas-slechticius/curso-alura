const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"123456789",
    email: "andre@email.com"
}
/*
    Nesse exemplo, usamos um Array para acassar as chaves
*/
const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])

/*
    Aqui usamos de exemplo, uma string para encontrar a key
*/

const chave = "idade"

console.log(cliente[chave])

/*
    Aqui utilizamos forEach
*/

chaves.forEach(info=>console.log(cliente[info]))