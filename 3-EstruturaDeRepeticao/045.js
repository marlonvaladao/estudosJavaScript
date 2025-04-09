const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número para sequência de Collatz: ', valor => {
    let n = parseInt(valor);
  
    while (n !== 1) {
      console.log(n);
      n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }
  
    console.log(1);
    readline.close();
  });
  