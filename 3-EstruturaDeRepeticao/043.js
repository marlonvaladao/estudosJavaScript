const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', num => {
    const soma = num.split('').reduce((acc, val) => acc + parseInt(val), 0);
    console.log(`Soma dos dígitos: ${soma}`);
    readline.close();
  });
  