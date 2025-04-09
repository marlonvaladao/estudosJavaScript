class Pessoa {
    constructor(nome, idade, profissao) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
    }
  
    apresentar() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Profissão: ${this.profissao}`);
    }
  }
  
  // Exemplo de uso:
  const pessoa = new Pessoa('Marlon', 46, 'Analista de Riscos');
  pessoa.apresentar();
  