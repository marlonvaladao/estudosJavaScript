class Funcionario {
    constructor(nome, salario, cargo) {
      this.nome = nome;
      this.salario = salario;
      this.cargo = cargo;
    }
  
    aplicarAumento(percentual) {
      this.salario += this.salario * (percentual / 100);
    }
  
    exibirSalario() {
      console.log(`${this.nome} - ${this.cargo}: R$ ${this.salario.toFixed(2)}`);
    }
  }
  
  // Exemplo:
  const f = new Funcionario('Marlon', 5000, 'Analista');
  f.aplicarAumento(10);
  f.exibirSalario();
  