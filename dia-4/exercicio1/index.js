let fome = prompt("Digite 1 se você está com fome e 2 se não")
let dinheiro = prompt("Digite 1 se você tem dinheiro e 2 se não")
let restaurante = prompt("Digite 1 se o restaurante está aberto e 2 se não")

if (fome == 2 || dinheiro == 2) {
    console.log("Hoje a janta será em casa")
}else if (fome == 1 && dinheiro && restaurante == 2) {
    console.log("Peça um delivery")
}else{
    console.log("Hoje o jantar será no seu restaurante favorito!")
}

