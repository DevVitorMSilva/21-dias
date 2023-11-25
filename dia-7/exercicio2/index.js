let saldo = 1000
let maiorValorInserido = 0
let somaValoresInseridos = 0 
let totalTransacoes = 0
let continuar = true 

do {
    const nome = prompt("Digite seu nome")
    const cpf = prompt("Digite seu cpf")
    const operacao = prompt("Digite 1 para saque e 2 para depósito")
    const valor = Number(prompt("Qual o valor da transação?"))

    if (valor < 0) {
        console.log("Insira um valor válido")
    }else if (operacao == 1 && valor > saldo) {
        console.log("Saldo insuficiente, a transação não foi realizada")
    }else if (operacao == 1) {
        console.log('Olá, ' + nome + " cpf número " + cpf + ', seu saldo é R$' + saldo)
        saldo -= valor
        totalTransacoes++
        somaValoresInseridos += valor
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        console.log('Transação realizada com sucesso, seu saldo atual é de R$' + saldo)
    }else{
        console.log('Olá, ' + nome +" cpf número, " + cpf + " seu saldo é de R$" + saldo)
        saldo += valor
        totalTransacoes++
        somaValoresInseridos += valor
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        console.log("Transação realizada com sucesso, seu saldo é de R$" + saldo )
    }

    const opcao = prompt("Deseja continuar? (1 para continuar 2 para parar)")
    if (opcao == "1") {
        continuar = true
    }else if(opcao == "2"){
        continuar = false
    }else{
        console.log("Opcão inválida")
        continuar = false
    }

} while (continuar)

console.log("Saldo final: R$" + saldo)
console.log("Maior valor inserido: R$" + maiorValorInserido)
console.log("Média dos valores inseridos: R$" + (somaValoresInseridos / totalTransacoes))
