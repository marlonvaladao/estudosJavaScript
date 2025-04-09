class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    repor(qtd) {
      this.quantidade += qtd;
    }
  
    retirar(qtd) {
      if (qtd <= this.quantidade) {
        this.quantidade -= qtd;
      } else {
        console.log('Estoque insuficiente');
      }
    }
  
    valorEmEstoque() {
      return this.preco * this.quantidade;
    }
  
    status() {
      console.log(`${this.nome}: ${this.quantidade} unidades - Total: R$ ${this.valorEmEstoque().toFixed(2)}`);
    }
  }
  
  // Exemplo:
  const p = new Produto('Notebook', 2500, 10);
  p.retirar(2);
  p.repor(5);
  p.status();
  