const nomes = ['João', 'Juliana', 'Anna', 'Caio', 'Lara', 
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícios', 'Renan', 
'Renata', 'Daisy', 'Camilo' ]

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1 são ${sala1}`)
console.log(`Alunos da sala 2 são ${sala2}`)