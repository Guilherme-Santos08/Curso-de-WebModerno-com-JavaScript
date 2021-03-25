function Pessoa() {
  this.idade = 01

  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000)
}

new Pessoa