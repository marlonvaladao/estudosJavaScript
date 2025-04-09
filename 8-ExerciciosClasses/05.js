class Circulo {
    constructor(raio) {
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio ** 2;
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.raio;
    }
  }
  
  // Exemplo:
  const c = new Circulo(4);
  console.log('Área:', c.calcularArea
  