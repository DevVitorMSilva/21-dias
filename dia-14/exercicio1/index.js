var nome
var salario


function perguntarColaborador() {
    nome = prompt("Informe o nome do colaborador")
    salario = Number(prompt("Informe o salário do colaborador"))
    aumentoSalario(nome, salario)
}

function aumentoSalario(nome, salario) {
    var aumento = 0

    if (salario <= 1500) {
        aumento = 0.2
    }else if (salario > 1500 && salario <= 2000) {
        aumento = 0.15
    }else if (salario > 2000 && salario <= 3000) {
        aumento = 0.10
    }else{
        aumento = 0.05
    }

    var novoSalario = (salario * aumento)

    console.log("Nome do colaborador: " + nome)
    console.log("Salário R$" + salario)
    console.log("Aumento: " + (aumento * 100) + "%")
    console.log("Salário reajustado: R$" + novoSalario)

    perguntarNovamente()
}

function perguntarNovamente() {
    var resposta = prompt("Deseja continuar, insira 1 para sim 2 para não")
    if (resposta == 1) {
        perguntarColaborador()
    }else{
        console.log("Programa encerrado.")
    }
}


