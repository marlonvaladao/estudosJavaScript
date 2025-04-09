const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let notas = [];
  
  function perguntar(n) {
    readline.question(`Digite a nota ${n}: `, nota => {
      notas.push(parseFloat(nota));
      if (n === 3) {
        const media = notas.reduce((a, b) => a + b) / 3;
        if (media === 10) console.log(`Aprovado com Distinção! Média: ${media}`);
        else if (media >= 7) console.log(`Aprovado. Média: ${media}`);
        else console.log(`Reprovado. Média: ${media}`);
        readline.close();
      } else {
        perguntar(n + 1);
      }
    });
  }
  
  perguntar(1);
  