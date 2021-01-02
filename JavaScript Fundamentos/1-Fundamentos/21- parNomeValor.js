// par nome/valor
const saudacao = 'Iaee' // contexto léxico 1

function exec() {
  const saudacao = 'Falaa' // contexto léxico 2
  return saudacao
}

// Obejtos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Guilherme',
  idade: 17,
  peso: 72,
  endereco: {
    logradouro: 'Rua Muito',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec()) // Vai puxar tudo que esta dentro da funcao exec
console.log(cliente) //Puxa todo que esta dentro da const