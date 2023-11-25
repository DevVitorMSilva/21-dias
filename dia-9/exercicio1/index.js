let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let peso = Number(prompt("Informe seu peso:"))
let altura = Number(prompt("Informe sua altura:"))
let profissao = prompt("Qual sua profissão?")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + " de altura e pesa " + peso + "KG")

if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas")
}else{
    console.log("Sem gelada para você")
}

console.log("Sua idade em meses é " + (idade * 12))
console.log("Sua idade em semanas é " + (idade * 30))
console.log("Sua idade em dias é " + (idade * 365))