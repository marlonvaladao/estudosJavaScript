const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', num => {
    const n = parseInt(num);
    let ehPrimo = true;
  
    if (n <= 1) ehPrimo = false;
    else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          ehPrimo = false;
          break;
        }
      }
    }
  
    console.log(ehPrimo ? 'É primo' : 'Não é primo');
    readline.close();
  });
  