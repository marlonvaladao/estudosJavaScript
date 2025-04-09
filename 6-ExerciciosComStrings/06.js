const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma frase: ', frase => {
    const vogais = (frase.match(/[aeiou]/gi) || []).length;
    const consoantes = (frase.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
    const numeros = (frase.match(/[0-9]/g) || []).length;
    const espacos = (frase.match(/ /g) || []).length;
  
    console.log(`Vogais: ${vogais}`);
    console.log(`Consoantes: ${consoantes}`);
    console.log(`Números: ${numeros}`);
    console.log(`Espaços: ${espacos}`);
    readline.close();
  });
  