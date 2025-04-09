class Bichinho {
    constructor(nome) {
      this.nome = nome;
      this.fome = 30;
      this.saude = 80;
    }
  
    humor() {
      const humor = (100 - this.fome + this.saude) / 2;
      return humor;
    }
  
    exibirHumor() {
      console.log(`Humor de ${this.nome}: ${this.humor().toFixed(2)}`);
    }
  }
  
  // Exemplo:
  const pet = new Bichinho('Bolt');
  pet.exibirHumor();
  