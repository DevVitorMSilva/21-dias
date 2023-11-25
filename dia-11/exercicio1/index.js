let nomes = [] 
let notas = [] 
let continuar = true
let index = 0
let somaNotas = 0
let media = 0
do {
    let nome = prompt("Qual o nome do aluno?")
    let nota = Number(prompt("Qual a nota do aluno?"))
    
    somaNotas += nota
    
    nomes[index] = nome
    notas[index] = nota
    index++
    
    media = (somaNotas / index)

    let desejaContinuar = prompt("Digite 1 se deseja continuar 2 se deseja parar")
    if (desejaContinuar != 1) {
        continuar = false
    }
} while (continuar);

console.log("Nota dos alunos")
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + " - " + notas[i])
    
}

console.log("A média geral foi de: " + media)
console.log("A soma das notas deu um total de: " + somaNotas)