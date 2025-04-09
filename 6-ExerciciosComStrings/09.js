const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    const comHifen = frase.replace(/ /g, '-');
    console.log('Frase com hífens:', comHifen);
    readline.close();
  });
  