let array = []
let indice = []
let contadorIndice = 0

const numeroProcurado = parseInt(prompt("Digite o número a ser procurado:"))

for (let i = 0; i < 5; i++) {
    const elemento = parseInt(prompt("Digite o elemento " + (i + 1)))
    array[i] = elemento
    
}

for (let i = 0; i < 5; i++) {
    if (array[i] === numeroProcurado) {
        indice[contadorIndice] = i
        contadorIndice++
    }
    
}

console.log('O número procurado ' + numeroProcurado + " foi encontrado nos índices? " + indice)