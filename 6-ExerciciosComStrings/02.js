const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma palavra: ', palavra => {
    for (let i = 0; i < palavra.length; i++) {
      console.log(palavra[i]);
    }
    readline.close();
  });
  