const alunos = [
    { nome: 'Ana', notas: [8, 9, 7] },
    { nome: 'Bruno', notas: [6, 5, 7] },
    { nome: 'Carla', notas: [10, 9, 10] }
  ];
  
  alunos.forEach(aluno => {
    const media = aluno.notas.reduce((a, b) => a + b) / aluno.notas.length;
    console.log(`${aluno.nome}: Média = ${media.toFixed(2)}`);
  });
  