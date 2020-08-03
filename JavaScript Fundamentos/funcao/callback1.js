const fabricantes = ["Mercendes", "Audi", "Bmw"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach (fabricante => console.log(fabricante))
