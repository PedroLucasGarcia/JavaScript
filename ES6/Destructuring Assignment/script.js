// Destructuring Assignment() - É um operador de desestruturação, ele retira valores de dentro de uma estrutura

//array = []
let frutas = ['abacaxi', 'uva', 'pêra', 'maçã', 'banana', 'mamão']

let [a, b, , c, d, ,] = frutas //pular um indice
console.log(a, b, c, d)

let [e, f, g, h, i, j, k = 'morango'] = frutas  //caso não tenha esse indice ele faz a adição
console.log(e, f, g, h, i, j, k)

let coisas = [['abacaxi', 'uva', 'pêra', 'maçã', 'banana', 'mamão'], ['José', 'Maria', 'Pedro', 'João']]  //array multidimencional
let [, [, x]] = coisas  //retornará Maria
let [[, , z]] = coisas //retornará pêra

console.log(x)
console.log(z)

//objeto = {}
let produto = {
  descricao: 'Notebook',
  preco: 1800,
  detalhes: {
    fabricante: 'abc',
    modelo: 'xyz'
  }
}

let {descricao, preco:p, desconto = 5} = produto  //basta colocar o nome do atributo, caso queira modificar adiciona :(novo nome) e se não existir o atributo ele faz a adição
console.log(descricao, p, desconto)

let {detalhes: {fabricante, modelo}} = produto  //adiciona : e {} para acessar atributos dentro de outros atributos
console.log(fabricante, modelo)

//função e array
let array = [10, 20, 30, 40]

function teste([a, b, , c, d = 50]){  //utiliza o destructuring para isolar os parâmetros do array
  console.log(a, b, c, d)
}
teste(array)

//função e objeto
let objeto = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}

function teste2({a, b, d, e = 50}){
  console.log(a, b, d, e)
}
teste2(objeto)

//rest e array
let arr = [10, 20, 30, 40]

let [y, ...resto] = arr

console.log(y)
console.log(resto)

//rest e objeto
let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}

let {a:o1, ...o2} = obj

console.log(o1)
console.log(o2)