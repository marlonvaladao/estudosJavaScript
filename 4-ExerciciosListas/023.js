const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];
  
  readline.question('Digite um nome para buscar: ', nome => {
    if (nomes.includes(nome)) {
      console.log(`${nome} está na lista!`);
    } else {
      console.log(`${nome} não encontrado.`);
    }
    readline.close();
  });
  