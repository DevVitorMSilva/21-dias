let array = []
let arrayModificado = []
let contadorArray = 0

for (let i = 0; i < 5; i++) {
    const element = parseInt(prompt("Digite o numero: " + (i + 1)))
    array[i] = element
}

for (let i = 0; i < 5   ; i++) {
    arrayModificado[i] = array[4 - i]
    
}
console.log(arrayModificado)