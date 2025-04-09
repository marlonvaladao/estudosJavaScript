function contarVogais(str) {
    const vogais = str.match(/[aeiouáéíóúãõâêîôû]/gi);
    return vogais ? vogais.length : 0;
  }
  
  console.log(contarVogais('Marlon Valadão')); // Exemplo
  