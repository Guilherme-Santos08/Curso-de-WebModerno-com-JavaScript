const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) { // Essa estrutura é a mais recomendada
  if(x == 5) {
    break
  }
  console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
  if(y == 5) {
    continue
  }
  console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { //Evitar ao maximo usar esta estrutura
  for (b in nums) {
    if(a == 2 && b == 3) break externo
    console.log(`Par = ${a}, ${b}`)
  }
}

console.log('Fim!')