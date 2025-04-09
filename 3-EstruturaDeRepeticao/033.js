const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function pedirNota() {
    readline.question('Digite uma nota entre 0 e 10: ', nota => {
      const n = parseFloat(nota);
      if (n >= 0 && n <= 10) {
        console.log('Nota válida!');
        readline.close();
      } else {
        console.log('Nota inválida!');
        pedirNota();
      }
    });
  }
  
  pedirNota();
  