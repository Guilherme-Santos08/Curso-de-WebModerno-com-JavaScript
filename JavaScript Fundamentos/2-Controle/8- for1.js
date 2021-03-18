let contador = 1
while(contador <= 10){
  console.log(`Contador = ${contador}`)
  contador++ // Cada vez ele faz uma repetição aqui, ele adiciona uma unidade ao contador até chegar no número 10.
  // Quando ele chegou no 11, ele viro falso porque passou o 10.
}

for(let i = 1; i <=10; i++){// o ponto e virgula é o separador da primeira parte
  console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length; i++){
  console.log(`notas = ${notas[i]}`)
}

// Link que pode ajudar 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for