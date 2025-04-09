const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Tamanho do arquivo (MB): ', tamanho => {
    readline.question('Velocidade da internet (Mbps): ', velocidade => {
      const tempoMin = (parseFloat(tamanho) * 8) / parseFloat(velocidade) / 60;
      console.log(`Tempo aproximado de download: ${tempoMin.toFixed(2)} minutos`);
      readline.close();
    });
  });
  