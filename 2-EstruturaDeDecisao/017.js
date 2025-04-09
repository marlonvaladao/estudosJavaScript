const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um ano: ', ano => {
    const a = parseInt(ano);
    const bissexto = (a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0);
    console.log(bissexto ? 'Ano bissexto' : 'Não é bissexto');
    readline.close();
  });
  