const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let notas = [];
  let pesos = [];
  
  function perguntar(n) {
    readline.question(`Digite a nota ${n}: `, nota => {
      readline.question(`Digite o peso ${n}: `, peso => {
        notas.push(parseFloat(nota));
        pesos.push(parseInt(peso));
        if (n === 3) {
          const somaNotas = notas.reduce((acc, val, i) => acc + val * pesos[i], 0);
          const somaPesos = pesos.reduce((acc, val) => acc + val, 0);
          const media = somaNotas / somaPesos;
          console.log(`Média ponderada: ${media.toFixed(2)}`);
          readline.close();
        } else {
          perguntar(n + 1);
        }
      });
    });
  }
  
  perguntar(1);
  