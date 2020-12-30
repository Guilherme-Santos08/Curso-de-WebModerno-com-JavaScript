console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome // nome associado ao objeto que for criado apartir dessa funcao
  this.nome = nome //Vou deixar a funcao publica
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)