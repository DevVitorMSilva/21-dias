let nomes = []
let senhas = []

function solicitarOpcao() {
    let opcao = prompt("Insira 1 para Cadastrar, 2 para fazer login, 3 para excluir cadastro e 4 para encerrar o programa")
    return opcao
}


function cadastroUsuario() {
    nomes.push(prompt("Digite seu nome"))
    senhas.push(prompt("Digite a sua senha"))
}


function fazerLogin(nome, senha) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1 && senhas[indice] == senha) {
        return true
    }else{
        return false
    }
}



function excluirCadastro(nome) {
    let indice = nomes.indexOf(nome)
    if (indice !== -1) {
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Cadastro excluído com sucesso!")
    }else{
        console.log("Usuário não encontrado")
    }
}

let continuar = true

while (continuar) {
    let opcao = solicitarOpcao()
    
    switch (opcao) {

        case "1":
            cadastroUsuario()
            break;
        case "2":
            let nome = prompt("Digite seu nome")
            let senha = prompt("Digite sua senha")
            let login = fazerLogin(nome, senha)
            if (login) {
                console.log("Login feito com sucesso!")
            }else{
                console.log("Nome ou senha incorretos!")
            }
            break;
        case "3":
            let nomeExcluir = prompt("Digite seu nome")
            excluirCadastro(nomeExcluir)
            break;
        case "4":
            continuar = false
            break;    
        default:
            console.log("Opção inválida, tente novamente")
            break;
    }
}