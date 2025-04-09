class Retangulo {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.base * this.altura;
    }
  
    calcularPerimetro() {
      return 2 * (this.base + this.altura);
    }
  }
  
  // Exemplo:
  const r = new Retangulo(5, 3
  