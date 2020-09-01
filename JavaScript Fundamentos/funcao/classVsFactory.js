class Pessoa {
  constructor(nome) {
    this.nome = nome // Depois que eu coloqueis this. essa variavel passou a ser publica
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)  // preciso do ${this.nome para acessar a classe Pessoa
  }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const p2 = criarPessoa ('João')
p2.falar()