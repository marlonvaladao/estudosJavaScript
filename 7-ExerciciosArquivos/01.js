const fs = require('fs');

// Expressão regular para IP válido: 4 blocos de 0 a 255
function ehIpValido(ip) {
  const partes = ip.trim().split('.');
  if (partes.length !== 4) return false;

  return partes.every(parte => {
    const num = Number(parte);
    return !isNaN(num) && num >= 0 && num <= 255;
  });
}

const ipsValidos = [];
const ipsInvalidos = [];

fs.readFile('ips.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  const linhas = data.split('\n').map(l => l.trim()).filter(l => l !== '');
  linhas.forEach(ip => {
    ehIpValido(ip) ? ipsValidos.push(ip) : ipsInvalidos.push(ip);
  });

  const saida = [
    '[Endereços válidos:]',
    ...ipsValidos,
    '',
    '[Endereços inválidos:]',
    ...ipsInvalidos
  ].join('\n');

  fs.writeFile('relatorio_ips.txt', saida, err => {
    if (err) {
      console.error('Erro ao salvar o relatório:', err);
    } else {
      console.log('Relatório gerado com sucesso: relatorio_ips.txt');
    }
  });
});
