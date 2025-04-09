const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let pares = 0;
  let impares = 0;
  
  function perguntar(n) {
    if (n > 10) {
      console.log(`Pares: ${pares}, Ímpares: ${impares}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${n}: `, valor => {
      const numero = parseInt(valor);
      if (numero % 2 === 0) pares++;
      else impares++;
      perguntar(n + 1);
    });
  }
  
  perguntar(1);
  