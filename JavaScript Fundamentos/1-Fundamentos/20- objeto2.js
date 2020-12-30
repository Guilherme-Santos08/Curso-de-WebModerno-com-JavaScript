console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function () {}
console.log(typeof Cliente) // vai ser uma função
console.log(typeof new Cliente) // um object

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) // uma function
console.log(typeof new Produto()) // um object