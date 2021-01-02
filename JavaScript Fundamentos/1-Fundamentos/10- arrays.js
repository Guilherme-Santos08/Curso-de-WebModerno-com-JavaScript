const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores [0], valores[3]) //vai pegar o primeiro(7.7) e o terceiro numero (9.2)
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.lenght)

valores.push({id: 3}, false, null)
console.log(valores)

console.log(valores.pop()) // .pop vai tirar o ultimo valor do array
delete valores [0] // delete vai tirar algum valor do array
console.log(valores)

console.log(typeof valores)