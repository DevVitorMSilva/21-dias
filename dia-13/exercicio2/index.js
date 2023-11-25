class Carro{
  nome
  potencia
  velocidadeMaxima
  aceleracao
  constructor(nome, potencia, velocidadeMaxima, aceleracao){
    this.nome = nome
    this.potencia = potencia
    this.velocidadeMaxima = velocidadeMaxima
    this.aceleracao = aceleracao
  }

  calcularDistancia(distancia){
    let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
    return resultado
  }
}

let meuCarro = new Carro("Ferrari", 300, 350, 3)
let distancia = 1000 
console.log(meuCarro.calcularDistancia(distancia))

class Corrida{
  nome
  tipo
  distancia
  participantes
  vencedor
  constructor(nome, tipo, distancia, participantes, vencedor){
    this.nome = nome
    this.tipo = tipo 
    this.distancia = distancia 
    this.participantes = []
    this.vencedor = ""
  }

  definirVencedor(){
    let menorTempo = this.participantes[0].calcularDistancia(this.distancia)
    let vencedor = this.participantes[0]

    for (let index = 1; index < this.participantes.length; index++) {
      let tempo = this.participantes[index].calcularDistancia(this.distancia)
      if (tempo < menorTempo) {
        menorTempo = tempo
        vencedor = this.participantes[index]
      }      
    }

    return this.vencedor = vencedor
  }

  exibirVencedor(){
    alert("O vencedor é: " + this.vencedor.nome)
  }
}

let corrida = new Corrida("Interlagos", "F1", 3000)

corrida.participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

corrida.definirVencedor()
corrida.exibirVencedor()
