let num1 = Number(prompt("Insira um número")) 
let num2 = Number(prompt("Insira o segundo número"))
let opcao = prompt("Digite:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão")
 
switch (opcao) {
    case "1":
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case "2":
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case "3":
        console.log(num1 + " x " + num2 + " = " + (num1 * num2))
        break;
    case "4":
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;

    default:
        break;
}