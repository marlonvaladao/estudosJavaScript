const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let soma = 0;
  let quantidade = 0;
  
  function pedirNota(n) {
    if (n > 3) {
      const media = soma / quantidade;
      console.log(`Média das notas: ${media.toFixed(2)}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite a nota ${n}: `, nota => {
      soma += parseFloat(nota);
      quantidade++;
      pedirNota(n + 1);
    });
  }
  
  pedirNota(1);
  