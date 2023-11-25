function Calculadora(numero1, numero2, operador) {

let resultado
let num1 = parseInt(numero1)
let num2 = parseInt(numero2)


  switch (operador) {
    case "+":
    resultado = num1 + num2
      break;
    case "-":
    resultado = num1 - num2
      break;
    case "*":
    resultado = num1 * num2 
      break;
    case "/":
    resultado = num1 / num2
      break;
    case "e":
      function calcularExponenciacao(base, expoente) {
        if (expoente === 0) {
          return 1; // Qualquer número elevado a 0 é igual a 1
        }
      
        let resultado = 1;
        for (let i = 1; i <= expoente; i++) {
          resultado *= base;
        }
      
        return resultado;
      }

    resultado = calcularExponenciacao(num1, num2)
      break;
  
    default:
      break;
  }

  if (resultado == undefined || resultado > 1000000) {
    resultado = "ERRO"
  }

  return resultado
}



let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}