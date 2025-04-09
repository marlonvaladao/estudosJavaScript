const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let alunos = [];
  let contador = 0;
  let aprovados = 0;
  
  function perguntar() {
    if (contador === 5) {
      alunos.forEach((a, i) => {
        const media = (a.n1 + a.n2) / 2;
        console.log(`Aluno ${i + 1} - Média: ${media.toFixed(2)} - ${media >= 7 ? 'Aprovado' : 'Reprovado'}`);
        if (media >= 7) aprovados++;
      });
      console.log(`Total de aprovados: ${aprovados}`);
      readline.close();
      return;
    }
  
    readline.question(`Nota 1 do aluno ${contador + 1}: `, nota1 => {
      readline.question(`Nota 2 do aluno ${contador + 1}: `, nota2 => {
        alunos.push({ n1: parseFloat(nota1), n2: parseFloat(nota2) });
        contador++;
        perguntar();
      });
    });
  }
  
  perguntar();
  