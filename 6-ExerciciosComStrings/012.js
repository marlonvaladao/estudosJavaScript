const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite a primeira palavra: ', p1 => {
    readline.question('Digite a segunda palavra: ', p2 => {
      console.log(`Palavra combinada: ${p1 + p2}`);
      readline.close();
    });
  });
  