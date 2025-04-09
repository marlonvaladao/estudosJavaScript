const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    console.log('Frase em maiúsculas:', frase.toUpperCase());
    readline.close();
  });
  