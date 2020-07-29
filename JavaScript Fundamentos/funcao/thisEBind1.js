const pessoa = {
  sudacao: 'Bom dia!',
  falar() {
    console.log(this.sudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional 00

const falarDePessoa = pessoa.falar.bind(pessoa)// bind você passa um objeto no qual vc quer que seja resolvido no this
falarDePessoa()