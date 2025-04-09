const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Função que converte bytes para megabytes
function bytesParaMB(bytes) {
  return bytes / (1024 * 1024);
}

// Função que calcula percentual
function calcularPercentual(valor, total) {
  return (valor / total) * 100;
}

// Função que calcula o tamanho de uma pasta (simulação de uso em disco)
function calcularTamanhoDaPasta(pasta) {
  let tamanhoTotal = 0;
  const arquivos = fs.readdirSync(pasta, { withFileTypes: true });

  arquivos.forEach(arq => {
    const caminho = path.join(pasta, arq.name);
    if (arq.isFile()) {
      const stats = fs.statSync(caminho);
      tamanhoTotal += stats.size;
    } else if (arq.isDirectory()) {
      tamanhoTotal += calcularTamanhoDaPasta(caminho);
    }
  });

  return tamanhoTotal;
}

// 1️⃣ Geração do arquivo usuarios.txt com base nas pastas
const pastaUsuarios = './usuarios';
const pastas = fs.readdirSync(pastaUsuarios, { withFileTypes: true }).filter(d => d.isDirectory());

let conteudoUsuarios = '';
pastas.forEach(p => {
  const caminho = path.join(pastaUsuarios, p.name);
  const tamanho = calcularTamanhoDaPasta(caminho);
  conteudoUsuarios += `${p.name} ${tamanho}\n`;
});

fs.writeFileSync('usuarios.txt', conteudoUsuarios);
console.log('✔ Arquivo "usuarios.txt" gerado com base nas pastas.\n');

// 2️⃣ Interface para perguntar quantos usuários mostrar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantos usuários com maior uso você quer ver? ', resposta => {
  const n = parseInt(resposta);

  fs.readFile('usuarios.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler usuarios.txt:', err);
      rl.close();
      return;
    }

    const linhas = data.trim().split('\n');
    const usuarios = [];
    let totalEspacoMB = 0;

    linhas.forEach(linha => {
      const [nome, espacoBytes] = linha.trim().split(/\s+/);
      const espacoMB = bytesParaMB(Number(espacoBytes));
      totalEspacoMB += espacoMB;
      usuarios.push({ nome, espacoMB });
    });

    usuarios.sort((a, b) => b.espacoMB - a.espacoMB);
    const topUsuarios = isNaN(n) ? usuarios : usuarios.slice(0, n);
    const media = totalEspacoMB / usuarios.length;

    // Gera relatorio.txt
    let relTxt = 'ACME Inc.               Uso do espaço em disco pelos usuários\n';
    relTxt += '------------------------------------------------------------------------\n';
    relTxt += 'Nr.  Usuário        Espaço utilizado     % do uso\n';

    topUsuarios.forEach((usuario, index) => {
      const percentual = calcularPercentual(usuario.espacoMB, totalEspacoMB);
      relTxt += `${String(index + 1).padEnd(4)} ${usuario.nome.padEnd(15)} ${usuario.espacoMB.toFixed(2).padStart(10)} MB ${percentual.toFixed(2).padStart(10)}%\n`;
    });

    relTxt += `\nEspaço total ocupado: ${totalEspacoMB.toFixed(2)} MB\n`;
    relTxt += `Espaço médio ocupado: ${media.toFixed(2)} MB\n`;

    fs.writeFileSync('relatorio.txt', relTxt);
    console.log('✔ Arquivo "relatorio.txt" gerado.');

    // Gera relatorio.html
    let relHtml = `
<html>
  <head>
    <meta charset="utf-8">
    <title>Relatório de Uso de Disco</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      h1 { color: #444; }
      table { width: 100%; border-collapse: collapse; margin-top: 10px; }
      th, td { border: 1px solid #aaa; padding: 8px; text-align: left; }
      th { background-color: #eee; }
    </style>
  </head>
  <body>
    <h1>Relatório de Uso de Disco - ACME Inc.</h1>
    <table>
      <tr>
        <th>Nº</th>
        <th>Usuário</th>
        <th>Espaço utilizado (MB)</th>
        <th>% do uso</th>
      </tr>
`;

    topUsuarios.forEach((usuario, index) => {
      const percentual = calcularPercentual(usuario.espacoMB, totalEspacoMB);
      relHtml += `
      <tr>
        <td>${index + 1}</td>
        <td>${usuario.nome}</td>
        <td>${usuario.espacoMB.toFixed(2)}</td>
        <td>${percentual.toFixed(2)}%</td>
      </tr>
`;
    });

    relHtml += `
    </table>
    <p><strong>Espaço total ocupado:</strong> ${totalEspacoMB.toFixed(2)} MB</p>
    <p><strong>Espaço médio ocupado:</strong> ${media.toFixed(2)} MB</p>
  </body>
</html>
`;

    fs.writeFileSync('relatorio.html', relHtml);
    console.log('✔ Arquivo "relatorio.html" gerado.');

    rl.close();
  });
});
