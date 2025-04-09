const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let maior = -Infinity;
  let posicao = 0;
  
  function perguntar(n) {
    if (n > 5) {
      console.log(`Maior número: ${maior} na posição ${posicao}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${n}: `, valor => {
      const numero = parseFloat(valor);
      if (numero > maior) {
        maior = numero;
        posicao = n;
      }
      perguntar(n + 1);
    });
  }
  
  perguntar(1);
  