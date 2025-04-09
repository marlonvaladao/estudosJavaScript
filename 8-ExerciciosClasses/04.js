class Livro {
    constructor(titulo, autor, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
    }
  
    exibirInformacoes() {
      console.log(`"${this.titulo}", de ${this.autor} (${this.ano})`);
    }
  }
  
  // Exemplo:
  const livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899);
  livro.exibirInformacoes();
  