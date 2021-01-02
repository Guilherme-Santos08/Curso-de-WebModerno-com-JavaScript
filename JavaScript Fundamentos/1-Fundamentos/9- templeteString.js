const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // so posso quebrar linha usando templeteString

const template = `
  Olá 
  ${nome}`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Essa funcao faz que acada vez que usarmos o up, uma palavra ficara toda em maiúscula, olhe o exemplo abaixo
console.log(`Ei... ${up('cuidado')}!`)