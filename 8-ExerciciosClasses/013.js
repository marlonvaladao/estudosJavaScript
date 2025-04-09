class TV {
    constructor() {
      this.canal = 1;
      this.volume = 10;
    }
  
    aumentarVolume() {
      if (this.volume < 100) this.volume++;
    }
  
    diminuirVolume() {
      if (this.volume > 0) this.volume--;
    }
  
    trocarCanal(novoCanal) {
      if (novoCanal > 0 && novoCanal <= 999) this.canal = novoCanal;
    }
  
    status() {
      console.log(`Canal: ${this.canal} | Volume: ${this.volume}`);
    }
  }
  
  // Exemplo:
  const tv = new TV();
  tv.trocarCanal(45);
  tv.aumentarVolume();
  tv.status();
  