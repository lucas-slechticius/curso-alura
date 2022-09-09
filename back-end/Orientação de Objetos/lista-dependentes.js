const cliente = {
    nome: "Andre",
    idade: 36,
    cpf:"123456789",
    email: "andre@email.com",
    fones:["55912345678","55988228345"],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc: '23/05/2014'
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="23/05/2014")

console.log(filhaMaisNova[0].nome)