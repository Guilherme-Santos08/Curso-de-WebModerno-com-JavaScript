function teste1(num) {
  if(num > 7)
  console.log(num)

  console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
  if(num > 7); { // não use ponto e virgula em estrutras if ou de controles, por conta de ponto e virgula, eles esta lendo o 6 e 8
    console.log(num)
  }
}

teste2(6)
teste2(8)