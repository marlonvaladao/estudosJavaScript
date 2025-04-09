class Macaco {
    constructor(nome) {
      this.nome = nome;
      this.barriga = [];
    }
  
    comer(comida) {
      this.barriga.push(comida);
    }
  
    verBarriga() {
      console.log(`${this.nome} comeu: ${this.barriga.join(', ')}`);
    }
  
    digerir() {
      this.barriga = [];
    }
  }
  
  // Exemplo:
  const m1 = new Macaco('Kiko');
  m1.comer('banana');
  m1.comer('maçã');
  m1.verBarriga();
  m1.digerir();
  m1.verBarriga();
  