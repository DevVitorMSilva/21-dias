
let peso = parseFloat(prompt("Insira seu peso para calcularmos seu IMC"))
let altura = parseFloat(prompt("Insira sua altura"))
let imc = peso / (altura * altura)

if (imc <= 18.5) {
    console.log("Magreza")
}else if(imc >= 18.6 && imc <= 24.9){
    console.log("Normal")
}else if (imc > 24.9 && imc <= 30) {
    console.log("Sobrepeso")
}else{
    console.log("Obesidade")
}

