const apresentacao = 'Ola'

function exec() {
   const apresentacao = "Tudo-Bem?"
   return apresentacao
}

function loja() {
   const lojadz = "Bem vindo a loja do Dz"
   return lojadz
}

const dadosDoCliente = {
   nome: 'Guilherme',
   idade: 17,
   peso: 72,
   endereco: {
      logradouro: 'Rua Tamo ai',
      numero: 00,
   },
}

const Loja = {
   AindaCompraNaLoja:'Não',
   QuantoTempoQueNaoCompraNaLoja:'2 Meses',
   ComproMaisDe2Un: 'Sim, ele compro 5 unidades',
   BoletoOuCartao: 'Cartão',
   CreditoOuDebeito: 'Credito',
}


console.log(apresentacao)
console.log(exec())
console.log(dadosDoCliente)
console.log(Loja)