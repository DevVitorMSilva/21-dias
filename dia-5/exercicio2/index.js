let quantidade
let valor
let opcao = prompt("Bem vindo ao DoDev-thru, você deseja: " + "\n1 - Gasolina\n2 - Álcool\n3 - Calibrar pneus")

switch (opcao) {
    case "1":
        quantidade = parseInt(prompt("Quantos reais de gasolina você deseja colocar?"))
        console.log("Seu carro foi abastecido com " + (quantidade / 5) + "L de gasolina")
        break;
    case "2":
        quantidade = parseInt(prompt("Quantos reais de álcool você deseja colocar?"))
        console.log("Seu carro foi abastecido com " + (quantidade / 3) + "L de álcool")
        break;
    case "3":
       console.log("Pneus calibrados com sucesso")
        break;


    default:
        break;
}