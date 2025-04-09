class Aluno {
    constructor(nome, notas) {
      this.nome = nome;
      this.notas = notas;
    }
  
    calcularMedia() {
      const soma = this.notas.reduce((a, b) => a + b, 0);
      return soma / this.notas.length;
    }
  }
  
  // Exemplo:
  const aluno = new Aluno('Marlon', [8, 7, 9]);
  console.log(`Média de ${aluno.nome}: ${aluno.calcularMedia().toFixed(2)}`);
  