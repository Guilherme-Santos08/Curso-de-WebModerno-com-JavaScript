const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice,) {
  console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // <-- se eu não quiser ter acesso ao indice 

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)