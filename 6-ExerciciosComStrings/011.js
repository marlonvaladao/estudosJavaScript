const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    const semEspacos = frase.replace(/\s+/g, '');
    console.log('Frase sem espaços:', semEspacos);
    readline.close();
  });
  