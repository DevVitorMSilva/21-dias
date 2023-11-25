let nota = 0
let sexo  
let mediaGeral = 0
let somaNotas = 0 
let quantidadeHomem = 0
let mulherMaior7 = 0
let maiorNotaHomem = 0
let continuar = true
let contador = 0

while (continuar) {
    nota = Number(prompt("Insira a nota do aluno(a)"))
    sexo = prompt("Digite o sexo do aluno:\nM - Masculino\nF - Feminino")
    
    if (sexo == "F" && nota > 7) {
        mulherMaior7++
    }

    if (sexo == "M" && nota > maiorNotaHomem) {
        if (nota > maiorNotaHomem) {
           maiorNotaHomem = nota
        }
        quantidadeHomem++
    }
    
    somaNotas += nota
    mediaGeral = (somaNotas / contador)

    contador++

    let desejaContinuar = prompt("Digite 1 se deseja continuar e 2 se não")
    if (desejaContinuar == "2") {
        continuar = false
    }
}

console.log("A média geral foi de: " + mediaGeral)
console.log(quantidadeHomem + " homens enviaram suas notas")
console.log(mulherMaior7 + " mulheres tiverem a nota acima de 7")
console.log("A maior nota entre os homens foi " + maiorNotaHomem) 