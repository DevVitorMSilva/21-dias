let numeroUsuario = parseInt(prompt("Insira um número"))
let array = []
array[0] = (numeroUsuario - 1)
array[1] = numeroUsuario
for (let i = 2; i < 8; i++) {
    array[i] = array[i - 1] + array[i - 2] 
    
}

console.log("Fibonacci: " + array)