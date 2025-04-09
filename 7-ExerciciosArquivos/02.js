const fs = require('fs');

// Função para converter bytes em megabytes
function bytesParaMB(bytes) {
  return bytes / (1024 * 1024);
}

// Função para calcular percentual
function calcularPercentual(valor, total) {
  return (valor / total) * 100;
}

fs.readFile('usuarios.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  const linhas = data.split('\n').filter(l => l.trim() !== '');
  const usuarios = [];

  let totalEspaco = 0;

  linhas.forEach(linha => {
    const [nome, espaco] = linha.trim().split(/\s+/);
    const mb = bytesParaMB(Number(espaco));
    totalEspaco += mb;
    usuarios.push({ nome, mb });
  });

  let saida = 'ACME Inc. Uso do espaço em disco pelos usuários\n';
  saida += '------------------------------------------------------------\n';
  saida += 'Nr. Usuário     Espaço utilizado     % do uso\n';

  usuarios.forEach((u, i) => {
    const percentual = calcularPercentual(u.mb, totalEspaco);
    saida += `${(i + 1).toString().padEnd(3)} ${u.nome.padEnd(12)} ${u.mb.toFixed(2).padStart(12)} MB ${percentual.toFixed(2).padStart(8)}%\n`;
  });

  const media = totalEspaco / usuarios.length;

  saida += `\nEspaço total ocupado: ${totalEspaco.toFixed(2)} MB\n`;
  saida += `Espaço médio ocupado: ${media.toFixed(2)} MB`;

  fs.writeFile('relatorio.txt', saida, err => {
    if (err) {
      console.error('Erro ao salvar o relatório:', err);
    } else {
      console.log('Relatório gerado com sucesso: relatorio.txt');
    }
  });
});
