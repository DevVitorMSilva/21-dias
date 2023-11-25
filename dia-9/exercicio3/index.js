
let idade = 0
let continuar = true

do {
    let anoNascimento = Number(prompt("Insira sua data de nascimento"))

    for (let i = anoNascimento; i <= 2023; i++) {
        console.log(i + " - " + idade + " anos de idade")
        idade++
    }
    let desejaContinuar = prompt("1 para continuar 2 para parar")
    if (desejaContinuar != 1) {
        continuar = false
    }else{
        idade = 0
    }
} while (continuar);