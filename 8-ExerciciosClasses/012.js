class Tamagochi {
    constructor(nome) {
      this.nome = nome;
      this.fome = 50;
      this.saude = 100;
      this.idade = 0;
    }
  
    alterarFome(valor) {
      this.fome = Math.max(0, Math.min(100, this.fome + valor));
    }
  
    alterarSaude(valor) {
      this.saude = Math.max(0, Math.min(100, this.saude + valor));
    }
  
    envelhecer() {
      this.idade++;
      this.fome += 5;
      this.saude -= 5;
    }
  
    exibirEstado() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Fome: ${this.fome}`);
      console.log(`Saúde: ${this.saude}`);
      console.log(`Idade: ${this.idade}`);
    }
  }
  
  // Exemplo:
  const bicho = new Tamagochi('Pikachu');
  bicho.envelhecer();
  bicho.exibirEstado();
  