const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma string: ', str => {
    console.log(`Tamanho da string: ${str.length}`);
    readline.close();
  });
  