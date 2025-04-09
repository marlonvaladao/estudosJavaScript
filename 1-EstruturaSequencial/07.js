const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o lado do quadrado: ', lado => {
    const area = Math.pow(parseFloat(lado), 2);
    console.log(`O dobro da área do quadrado é: ${2 * area}`);
    readline.close();
  });
  