const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    const modificada = frase.replace(/[aeiouáéíóúâêîôûãõ]/gi, '*');
    console.log('Frase modificada:', modificada);
    readline.close();
  });
  