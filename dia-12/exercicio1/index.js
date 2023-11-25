let nomes = []
let senhas = []
let contador = 0
let continuar = true

while(continuar){
    let opcao = prompt("Digite\n1 - Cadastrar\n2 - Login\n3 - excluir\n4 - parar")

    switch (opcao) {
        case "1":
            nomes[contadorArray] = prompt("Insira o usuario do cadastro")
            senhas[contadorArray] = prompt("Insira a senha do cadastro")
            contadorArray++ 

            break;
        case "2":
            let nome = prompt("Insira o usuario do login")
            let senha = prompt("Insira a senha do login")
            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]) {
                    console.log("Login feito com sucesso")
                }else{
                    console.log("Usuário ou senha incorretos")
                }
            }

            break;

        case "3":
            let nomeExcluir = prompt("Insira o usuario que deseja excluir")
            let nomeAux = []
            let senhaAux = []
            let contadorAux = 0 
            for (let i = 0; i < nomes.length; i++){
                if (nomeExcluir == nomes[i]) {
                    alert("Cadastro excluído com suceso")
                }else{
                    nomeAux[contadorAux] = nomes[i]
                    senhaAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }
                
            nomes = nomeAux
            senhas = senhaAux
            contador--

            break;
        case "4":
            continuar = false
            break;
    
        default:
            console.log("Opção inválida, escolha outra!")
            break;
    }
}
    
