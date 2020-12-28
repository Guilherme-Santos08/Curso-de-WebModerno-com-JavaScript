let valor // Não iniciada
console.log(valor) // Valor vai ser undefined, porque não atribui nada para essa variavel

valor = null // ausência de valor. Quando quisermos zerar um valor, vamos colocar o null
console.log(valor)
// console.log(valor.toString()) //Vai dar Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50 
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Produto sem preço, preço que não esta definido
console.log(!!produto.preco) // false
console.log(produto)

// Deixe o undefined para quando você esquecer de atribuir a variavel, quando você quiser zerar algum valor use o null