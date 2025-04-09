const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let notas = [];
  
  function pedirNota(n) {
    readline.question(`Digite a nota ${n}: `, nota => {
      notas.push(parseFloat(nota));
      if (n === 2) {
        const media = (notas[0] + notas[1]) / 2;
        if (media === 10) console.log('Aprovado com Distinção');
        else if (media >= 7) console.log('Aprovado');
        else console.log('Reprovado');
        readline.close();
      } else {
        pedirNota(n + 1);
      }
    });
  }
  
  pedirNota(1);
  