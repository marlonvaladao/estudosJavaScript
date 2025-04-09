const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', numero => {
    console.log(`O número informado foi ${numero}`);
    readline.close();
  });
  