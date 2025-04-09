const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número de 1 a 7: ', dia => {
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const index = parseInt(dia) - 1;
  
    console.log(dias[index] || 'Valor inválido');
    readline.close();
  });
  