const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    const consoantes = frase.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    console.log(`Consoantes: ${consoantes ? consoantes.length : 0}`);
    readline.close();
  });
  