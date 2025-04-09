const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let pares = 0;
  let contador = 0;
  
  function perguntar() {
    if (contador === 5) {
      console.log(`Quantidade de números pares: ${pares}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      const num = parseInt(valor);
      if (num % 2 === 0) pares++;
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  