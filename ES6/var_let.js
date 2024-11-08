var serie = 'Friends';  // Variável `var` declarada no escopo global. Pode ser acessada de qualquer lugar no código, tanto no escopo global quanto dentro de funções e blocos.

function x() {
    var serie = 'How I Met Your Mother';  // Variável `var` declarada dentro da função `x`. Essa variável só pode ser acessada dentro da função `x`, mas também será visível em qualquer bloco (como `if`) dentro dessa função.

    if (true) {
        var serie = 'Dexter';  // Embora esteja dentro do bloco `if`, `var` ignora o escopo de bloco, então esta variável também estará acessível em toda a função `x`, substituindo a `serie` de `How I Met Your Mother`.
    }
}
x()

if (true) {
    var serie = 'Suits';  // Variável `var` declarada dentro de um bloco `if` no escopo global. `var` ignora o escopo de bloco, então essa declaração substitui o valor global de `serie`, afetando todas as referências globais a `serie`.
}

let serie1 = 'The Silo';  // Variável `let` declarada no escopo global. Diferente de `var`, `let` respeita o escopo de bloco e não pode ser acessada antes de sua declaração.

if (true) {
    let serie1 = 'The Walking Dead';  // `let` cria uma nova variável apenas dentro desse bloco `if`, sem afetar o valor global de `serie1`.
}
