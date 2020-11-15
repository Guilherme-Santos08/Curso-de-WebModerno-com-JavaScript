const peso1 = 1.0
const peso2 = Number ('2.0')

console.log(peso1, peso2)
console.log(Number .isInteger(peso1)) // isInteger serve para verificar se o numero e inteiro ou quebrado
console.log(Number.isInteger(peso2))

const avaLiacao1 = 9.871
const avaLiacao2 = 6.871

const total = avaLiacao1 * peso1 + avaLiacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)


console.log(media.toFixed(2)) // Escolhe o tanto de casa decimal você quer 
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof Number)
