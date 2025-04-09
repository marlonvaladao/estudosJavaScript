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
        let conceito, status;
  
        if (media >= 9) conceito = 'A';
        else if (media >= 7.5) conceito = 'B';
        else if (media >= 6) conceito = 'C';
        else if (media >= 4) conceito = 'D';
        else conceito = 'E';
  
        status = ['A', 'B', 'C'].includes(conceito) ? 'APROVADO' : 'REPROVADO';
  
        console.log(`Notas: ${notas[0]}, ${notas[1]}`);
        console.log(`Média: ${media.toFixed(2)}`);
        console.log(`Conceito: ${conceito}`);
        console.log(status);
        readline.close();
      } else {
        pedirNota(n + 1);
      }
    });
  }
  
  pedirNota(1);
  