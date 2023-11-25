let nome
let idade
let salarioAtual
let previsao = 0.15
let ano = 2023
let continuar = "n"

while (continuar != "s") {
    nome = prompt("Digite seu nome")
    idade = prompt("Digite sua idade")
    salarioAtual = Number(prompt("Insira o seu salário atual"))
    continuar = prompt("As informações estão corretas? (s/n)")
    
}

for (let i = 0; i <= 10; i++) {
    console.log(ano + " - R$" + (salarioAtual += previsao))
    previsao *= 2
    ano++
}