class Livro{
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoDePublicacao){
    this.Titulo = titulo
    this.Autor = autor
    this.Editora = editora
    this.AnoDePublicacao = anoDePublicacao
    }
}

let livros = []
livros.push(new Livro("Livro1", "Vitor", "Editora A", 2005))
livros.push(new Livro("Livro2", "Eder", "Editora B", 1972))
livros.push(new Livro("Livro3", "Mônica", "Editora C", 1978))
livros.push(new Livro("Livro4", "Gabryella", "Editora D", 2006))
livros.push(new Livro("Livro5", "Lavinia", "Editora E", 2016))

class Biblioteca{
    Nome 
    Endereco
    Telefone
    AcervoDeLivros
    constructor(nome, endereco, telefone, acervoDeLivros){
        this.Nome = nome 
        this.Endereco = endereco 
        this.Telefone = telefone
        this.AcervoDeLivros = []

    }

    BuscarLivro(titulo){
        this.AcervoDeLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo){
        let emprestado = false 
        this.AcervoDeLivros.forEach(livro =>{
            if (livro.titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }

        })
        if (emprestado) {
            return true
        }else{
            return false
        }

    }

    DevolverLivro(titulo){
            livros.forEach(livro =>{
                if (livro.titulo == titulo) {
                    livro.Disponibilidade = false
                    console.log("Livro devolvido")
                }
            })
    }

}

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2")

biblioteca.BuscarLivro("livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1")