const pessoa = {    // <-- notação literal
    nome: 'Rebeca',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa)) // pego todas as chaves do objeto pesso
console.log(Object.values(pessoa)) // ele pega os numero do objeto pessoa
console.log(Object.entries(pessoa)) // vai me dar um array com todos os subarray que vai ter a chave e o valor

// Object.entries(pessoa).forEach(e => { // apartir desse forEach eu vou percorrer os elementos do array que foi gerado apartir de object.entries
//     console.log(`${e[0]}: ${e[1]}`)
// })

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // passiva(false) ou listada(true)
  writable: false,  // propriedade não vai aceitar ser mudada
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // forma de contatenar todos os objetos em um so, ultimos elementos vão sobreescrevendo se tiver propriedade com mesmo nome

Object.freeze(obj)
obj.c = 1234
console.log(obj)