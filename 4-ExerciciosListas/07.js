const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let nomes = [];
  let alturas = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 5) {
      let max = Math.max(...alturas);
      let min = Math.min(...alturas);
      let maisAlto = nomes[alturas.indexOf(max)];
      let maisBaixo = nomes[alturas.indexOf(min)];
  
      console.log(`Mais alto: ${maisAlto} (${max}m)`);
      console.log(`Mais baixo: ${maisBaixo} (${min}m)`);
      readline.close();
      return;
    }
  
    readline.question(`Nome da pessoa ${contador + 1}: `, nome => {
      readline.question(`Altura de ${nome} (em metros): `, altura => {
        nomes.push(nome);
        alturas.push(parseFloat(altura));
        contador++;
        perguntar();
      });
    });
  }
  
  perguntar();
  