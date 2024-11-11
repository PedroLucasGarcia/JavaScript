// Criando a classe Produto com construtor e método para exibir a descrição do produto
class Produto {
  constructor(descricao, preco) {
    this.descricao = descricao;
    this.preco = preco;
  }

  // Método para exibir a descrição e o preço do produto no console
  verDescricao() {
    console.log(`${this.descricao} por apenas: R$${this.preco}`);
  }
}

// Instanciando um objeto da classe Produto e chamando o método verDescricao
let produto = new Produto('Notebook...', 3200);
produto.verDescricao();

/*--------------------------------------------------------------------------------------------------------*/

// Criando um objeto literal para um produto com atributos e método para exibir a descrição
let produtoLiteral = {
  descricao: 'Geladeira...',
  preco: 4000,
  verDescricao: function () {
    console.log(`${this.descricao} por apenas: R$${this.preco}`);
  }
};

// Chamando o método verDescricao do objeto literal produtoLiteral
produtoLiteral.verDescricao();

/*--------------------------------------------------------------------------------------------------------*/

// Declaração de variáveis para uma pessoa
let nome = 'Pedro';
let idade = 22;
let sexo = 'Masculino';
let profissao = 'Programador';

// Criando um objeto literal para uma pessoa com atributos e método para exibir a descrição
let pessoa = {
  nome: nome,
  idade: idade,
  sexo: sexo,
  profissao: profissao,
  verDescricao: function () {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Sexo: ${this.sexo}, Profissão: ${this.profissao}`);
  }
};

// Exibindo o objeto pessoa e chamando o método verDescricao
console.log(pessoa);
pessoa.verDescricao();

/*--------------------------------------------------------------------------------------------------------*/

// Criando um objeto literal para pessoa com notação simplificada (nomes de variáveis como nomes de atributos)
let pessoa2 = {
  nome,  // equivalente a nome: nome
  idade,
  sexo,
  profissao,
  verDescricao() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Sexo: ${this.sexo}, Profissão: ${this.profissao}`);
  }
};

// Exibindo o objeto pessoa2 e chamando o método verDescricao
console.log(pessoa2);
pessoa2.verDescricao();

/*--------------------------------------------------------------------------------------------------------*/

// Atualizando valores dos atributos de pessoa2
pessoa2.nome = 'Lucas';
pessoa2.idade = 20;
pessoa2.profissao = 'Designer';

// Exibindo o objeto pessoa2 atualizado e chamando o método verDescricao
console.log(pessoa2);
pessoa2.verDescricao();

/*--------------------------------------------------------------------------------------------------------*/

// Adicionando um novo atributo ao objeto pessoa2
pessoa2.nacionalidade = 'Brasileiro';

// Exibindo o objeto pessoa2 com o novo atributo e chamando o método verDescricao
console.log(pessoa2);
pessoa2.verDescricao();

/*--------------------------------------------------------------------------------------------------------*/

// Criando uma nova referência para o objeto pessoa2
let x = pessoa2;  // x não cria uma cópia do objeto, apenas uma nova referência para pessoa2
console.log(x);
x.verDescricao();