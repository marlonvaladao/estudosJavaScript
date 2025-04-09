class Carro {
    constructor(consumoKmPorLitro) {
      this.consumo = consumoKmPorLitro;
      this.gasolina = 0;
    }
  
    andar(distancia) {
      const litrosNecessarios = distancia / this.consumo;
      if (litrosNecessarios <= this.gasolina) {
        this.gasolina -= litrosNecessarios;
      } else {
        console.log('Gasolina insuficiente para percorrer essa distância.');
      }
    }
  
    obterGasolina() {
      console.log(`Gasolina restante: ${this.gasolina.toFixed(2)} litros`);
    }
  
    adicionarGasolina(litros) {
      this.gasolina += litros;
    }
  }
  
  // Exemplo:
  const meuFusca = new Carro(15);
  meuFusca.adicionarGasolina(20);
  meuFusca.andar(100);
  meuFusca.obterGasolina();
  