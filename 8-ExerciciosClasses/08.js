class ContaBancaria {
    constructor(titular) {
      this.titular = titular;
      this.saldo = 0;
      this.transacoes = [];
    }
  
    depositar(valor) {
      this.saldo += valor;
      this.transacoes.push(`Depósito: R$ ${valor.toFixed(2)}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        this.transacoes.push(`Saque: R$ ${valor.toFixed(2)}`);
      } else {
        this.transacoes.push('Tentativa de saque sem saldo suficiente');
      }
    }
  
    extrato() {
      console.log(`Extrato de ${this.titular}:`);
      this.transacoes.forEach(t => console.log(t));
      console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  // Exemplo:
  const conta = new ContaBancaria('Marlon');
  conta.depositar(1000);
  conta.sacar(300);
  conta.extrato();
  