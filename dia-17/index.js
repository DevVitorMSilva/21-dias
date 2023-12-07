class Hotel{
    Id
    Nome 
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva{
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, nomeResponsavel, diaEntrada, diaSaida){
        this.Id = id
        this.IdHotel = idHotel
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel:")
    let categoria = prompt("Digite a categoria do hotel:")
    let endereco = prompt("Digite o endereço do hotel:")
    let telefone = prompt("Digite o telefone do hotel:")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

function CriarReserva(){
    let idHotel
    let existe = false
    do {
        idHotel = prompt("Qual o id do hotel")
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true
            }else if(i == hoteis.length - 1){
                console.log("Hotel não cadastrado")
            }
            
        }
    } while (!existe);
    let nome = prompt("Digite seu nome")
    let diaEntrada = parseInt(prompt("Digite o dia da entrada"))
    let diaSaida
    do{
        diaSaida = prompt("Digite o dia de saida")
        if (diaSaida < diaEntrada) {
            console.log("O dia de saída não pode ser maior que o dia de entrada")
        }
    } while(diaSaida > diaEntrada){
        let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    }
}

function ExibirReservas(nome) {
    let nome = prompt("Digite o nome que deseja ver as reservas")
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].NomeResponsavel) {
            console.log("Id da reserva: " + reservas[i].id)
            console.log("Hotel: " + hoteis[(reservas[i].IdHotel) - 1].nome)
        }
        
    }
}

function ProcuparPorCategoria(categoria) {
    
}