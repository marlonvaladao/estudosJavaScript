const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let maior = -Infinity;
  let contador = 0;
  
  function perguntar() {
    if (contador === 5) {
      console.log(`Maior número: ${maior}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      const num = parseFloat(valor);
      if (num > maior) maior = num;
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  