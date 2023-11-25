let array = []
let arrayModificado = []
let contadorArray = 0
let quantidadeNumero = parseInt(prompt("Quanto números ira digitar?"))

for (let i = 0; i < quantidadeNumero; i++) {
    const element = parseInt(prompt("Digite o numero: " + (i + 1)))
    array[i] = element
}

let contador = quantidadeNumero - 1
for (let i = 0; i < array.length; i++) {
    arrayModificado[i] = array[contador]
    contador--
    
}
console.log(arrayModificado)