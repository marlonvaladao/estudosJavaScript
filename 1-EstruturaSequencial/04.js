const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let notas = [];
  let contador = 0;
  
  function perguntarNota() {
    readline.question(`Digite a nota ${contador + 1}: `, nota => {
      notas.push(parseFloat(nota));
      contador++;
  
      if (contador < 4) {
        perguntarNota();
      } else {
        const media = notas.reduce((acc, val) => acc + val, 0) / 4;
        console.log(`A média das notas é: ${media.toFixed(2)}`);
        readline.close();
      }
    });
  }
  
  perguntarNota();
  