const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma palavra: ', palavra => {
    const limpa = palavra.toLowerCase().replace(/\s+/g, '');
    const inversa = limpa.split('').reverse().join('');
    console.log(limpa === inversa ? 'É palíndromo' : 'Não é palíndromo');
    readline.close();
  });
  