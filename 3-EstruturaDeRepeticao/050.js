const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let negativos = 0;
  let contador = 0;
  
  function perguntar() {
    if (contador === 10) {
      console.log(`Quantidade de números negativos: ${negativos}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      if (parseFloat(valor) < 0) negativos++;
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  