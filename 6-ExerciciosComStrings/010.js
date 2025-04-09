const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    readline.question('Digite a letra a contar: ', letra => {
      const regex = new RegExp(letra, 'gi');
      const count = (frase.match(regex) || []).length;
      console.log(`A letra "${letra}" aparece ${count} vezes.`);
      readline.close();
    });
  });
  