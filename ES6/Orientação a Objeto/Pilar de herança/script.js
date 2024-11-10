class Animal{  //Classe pai - propriedades em comum das classes filhas
  constructor(cor, tamanho, peso){
    this.cor = cor
    this.tamanho = tamanho
    this.peso = peso
  }

  dormir(){
    console.log('dormir')
  }
}

class Cachorro extends Animal{  //Classe filha - herda as propriedades da classe pai
  constructor(){
    super()  //Esse operdor precisa ser declarado em todas as classes filhas e deve ficar antes de qualquer atributo
    this.orelha = 'Grandes e caídas'
  }

  correr(){
    console.log('correr')
  }

  rosnar(){
    console.log('rosnar')
  }
}

class Passaro extends Animal{  //Classe filha - herda as propriedades da classe pai
  constructor(bico, cor, tamanho, peso){
    super(cor, tamanho, peso)  //Esse operdor precisa ser declarado em todas as classes filhas e deve ficar antes de qualquer atributo
    this.bico = bico
  }

  voar(){
    console.log('voar')
  }
}

class Papaguaio extends Passaro{  //Classe filha - herda as propriedades da classe pai
  constructor(sabeFalar, bico, cor, tamanho, peso){
    super(bico, cor, tamanho, peso)  //Esse operdor precisa ser declarado em todas as classes filhas e deve ficar antes de qualquer atributo. Pode ter parâmetros ou não, caso tenha, será o valor dos atributos da classe pai
    this.sabeFalar = sabeFalar
  }

  falar(){
    console.log('falar')
  }
}

let cachorro = new Cachorro()

let passaro = new Passaro('Curto', 'azul', 35, 450)
console.log(passaro)

let papaguaio = new Papaguaio(true, 'médio', 'verde', 25, 350)
console.log(papaguaio)

let papaguaio2 = new Papaguaio(false, 'pequeno', 'branco', 10, 80)
console.log(papaguaio2)

cachorro.dormir()
papaguaio.voar()
passaro.dormir()
papaguaio.falar()
papaguaio.dormir()

