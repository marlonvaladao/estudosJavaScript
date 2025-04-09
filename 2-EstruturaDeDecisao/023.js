const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', n => {
    const num = parseFloat(n);
    console.log(Number.isInteger(num) ? 'Inteiro' : 'Decimal');
    readline.close();
  });
  