const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma palavra: ', palavra => {
    const invertida = palavra.split('').reverse().join('');
    console.log(`Ao contrário: ${invertida}`);
    readline.close();
  });
  