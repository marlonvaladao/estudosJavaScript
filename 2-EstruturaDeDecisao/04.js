const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma letra: ', letra => {
    const vogais = ['A', 'E', 'I', 'O', 'U'];
    console.log(vogais.includes(letra.toUpperCase()) ? 'Vogal' : 'Consoante');
    readline.close();
  });
  