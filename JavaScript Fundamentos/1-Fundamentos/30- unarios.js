let num1 = 1
let num2 = 2

num1++ // o "++" acrescenta uma unidade ao valor da variavel
console.log(num1)
--num1 // "--" vai tirar o valor da variavel. O "-- em primeiro" esta mais apressado em tirar algo da variavel
console.log(num1)

console.log(++num1 === num2--) // O "--" so começa ser contado na proxima linha. Entao aqui e true e na linha 10 e false
console.log(num1 === num2)