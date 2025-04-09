class Motor {
    ligar() {
      console.log('Motor ligado.');
    }
  }
  
  class Carro {
    constructor(modelo) {
      this.modelo = modelo;
      this.motor = new Motor();
    }
  
    ligarCarro() {
      console.log(`Ligando o carro ${this.modelo}...`);
      this.motor.ligar();
    }
  }
  
  // Exemplo:
  const carro = new Carro('Civic');
  carro.ligarCarro();
  