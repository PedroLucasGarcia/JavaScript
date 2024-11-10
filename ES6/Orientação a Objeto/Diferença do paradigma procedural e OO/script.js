/*
Problema: Criar um programa que gerencie contas bancárias, permitindo que o usuário consulte o saldo, deposite e 
saque valores.
*/
//-------------------------------------------------------------------------------------------------------------------

/*
Paradigma procedural: No paradigma procedural, o código é organizado em funções que manipulam diretamente os dados 
(variáveis). Não há uso de classes ou objetos para encapsular dados e comportamentos; em vez disso, as funções operam 
diretamente sobre estruturas de dados.
*/

// Variável global para armazenar o saldo da conta
let saldo = 1000;

// Função para consultar o saldo
function consultarSaldo() {
  return `Saldo: R$${saldo}`;
}

// Função para depositar um valor na conta
function depositar(valor) {
  if (valor > 0) {
    saldo += valor;
  }
}

// Função para sacar um valor da conta
function sacar(valor) {
  if (valor > 0 && valor <= saldo) {
    saldo -= valor;
  }
}

// Uso das funções
depositar(500);
console.log(consultarSaldo()); // Saída: Saldo: R$1500

sacar(200);
console.log(consultarSaldo()); // Saída: Saldo: R$1300

//-------------------------------------------------------------------------------------------------------------------

/*
Paradigma OO: No paradigma orientado a objetos, os dados e as operações que manipulam esses dados são agrupados em 
objetos. As classes definem os atributos e métodos que os objetos terão. Isso facilita o encapsulamento dos dados e 
evita acesso direto a variáveis globais.
*/

// Classe ContaBancaria que encapsula as operações de saldo
class ContaBancaria {
    constructor(saldoInicial) {
      this.saldo = saldoInicial; // Atributo que representa o saldo da conta
    }
  
    // Método para consultar o saldo
    consultarSaldo() {
      return `Saldo: R$${this.saldo}`;
    }
  
    // Método para depositar um valor
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
      }
    }
  
    // Método para sacar um valor
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
      }
    }
  }
  
  // Criando uma instância da classe ContaBancaria
  const conta = new ContaBancaria(1000);
  
  // Usando os métodos da instância conta
  conta.depositar(500);
  console.log(conta.consultarSaldo()); // Saída: Saldo: R$1500
  
  conta.sacar(200);
  console.log(conta.consultarSaldo()); // Saída: Saldo: R$1300
  