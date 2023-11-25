class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    SSD
    constructor(tipo, processador, video, armazenamento, memoriaRam, SSD){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = SSD        
    }

    exibirInformacoes(){
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Processador: ${this.processador}`)
        console.log(`Vídeo: ${this.video}`)
        console.log(`Armazenamento: ${this.armazenamento} GB`)
        console.log(`Memória Ram: ${this.memoriaRam} GB`)
        console.log(`SSD: ${this.ssd}`)
    }
}

let meuComputador = new Computador("Desktop", "i3 9100f", "GTX 1660", 480, 16, true)
meuComputador.exibirInformacoes()