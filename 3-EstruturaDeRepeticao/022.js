const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let soma = 0;
  let contador = 0;
  
  function perguntar() {
    if (contador === 10) {
      console.log(`Soma dos números positivos: ${soma}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      const n = parseFloat(valor);
      if (n > 0) soma += n;
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  