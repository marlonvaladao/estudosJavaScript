const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', n => {
    const num = parseInt(n);
    console.log(num % 2 === 0 ? 'Par' : 'Ímpar');
    readline.close();
  });
  