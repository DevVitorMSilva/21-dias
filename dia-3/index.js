let nome = prompt("Digite seu nome:")
let idade = Number(prompt("Insira sua idade:"))
let altura = Number(prompt("Insira sua altura:"))
let peso = Number(prompt("Insira seu peso:"))
let anoNasc = (2023 - idade)
let imc = peso / (altura * altura)

console.log("Olá "+  nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + " tem " + altura + " de altura, pesa " + peso + " seu IMC é " + imc + "kg/m2")