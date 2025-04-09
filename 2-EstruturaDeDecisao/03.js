const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite F para feminino ou M para masculino: ', sexo => {
    const letra = sexo.toUpperCase();
    if (letra === 'F') console.log('Feminino');
    else if (letra === 'M') console.log('Masculino');
    else console.log('Sexo Inválido');
    readline.close();
  });
  