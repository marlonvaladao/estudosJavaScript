const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let valores = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 10) {
      const maior = Math.max(...valores);
      const ocorrencias = valores.filter(v => v === maior).length;
  
      console.log(`Maior valor: ${maior}`);
      console.log(`Aparece ${ocorrencias} vez(es).`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o valor ${contador + 1}: `, valor => {
      valores.push(parseFloat(valor));
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  