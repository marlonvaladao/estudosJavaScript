const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function perguntar() {
    readline.question('Digite um número entre 10 e 20: ', n => {
      const num = parseInt(n);
      if (num >= 10 && num <= 20) {
        console.log('Valor aceito!');
        readline.close();
      } else {
        console.log('Valor inválido. Tente novamente.');
        perguntar();
      }
    });
  }
  
  perguntar();
  