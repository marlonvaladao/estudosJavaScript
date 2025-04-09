const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite M (matutino), V (vespertino) ou N (noturno): ', turno => {
    const letra = turno.toUpperCase();
    if (letra === 'M') console.log('Bom Dia!');
    else if (letra === 'V') console.log('Boa Tarde!');
    else if (letra === 'N') console.log('Boa Noite!');
    else console.log('Valor Inválido!');
    readline.close();
  });
  