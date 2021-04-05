// pessoa -> 123 -> {...}
const pessoa = { nome: 'joao'}
pessoa.nome = 'Pedro' // estou atribuindo para pessoa.nome, estou mudando o "nome" e não a "pessoa"
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'} Não posso atribuir novamente para constante pessoa

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
