const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    const vogais = frase.match(/[aeiouáéíóúâêîôûãõ]/gi);
    console.log(`Quantidade de vogais: ${vogais ? vogais.length : 0}`);
    readline.close();
  });
  