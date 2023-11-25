let nome = prompt("Insira seu nome")
let idade = prompt("Insira sua idade")
let carteira = prompt("Digite 1 se possui carteira de motorista e 2 se não")
let carro = prompt("Digite 1 se possui carro e 2 se não")

if (idade < 18 || carteira == 2 ) {
    console.log(nome + ", você não pode dirigir")
}else if (idade >= 18 && carteira == 1 && carro == 2) {
    console.log(nome + ", você pode dirigir mas não tem um carro")
}else{
    console.log(nome + ", você será motorista")
}
