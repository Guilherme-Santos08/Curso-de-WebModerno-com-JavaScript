const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro  /pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Versta') // push adiciona um nove elemnto no seu array, na última posição
console.log(pilotos)

pilotos.shift() // shift tira da primeira posição 
console.log(pilotos)

pilotos.unshift('Hamilton') // unshift coloca no inicio
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array gerado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)