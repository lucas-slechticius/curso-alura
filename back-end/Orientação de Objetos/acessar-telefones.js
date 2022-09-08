const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"123456789",
    email: "andre@email.com",
    fones:["55912345678","55988228345"]

    // é possível inserir Arrays dentro de objetos!
}

cliente.fones.forEach(fone => console.log(fone))

