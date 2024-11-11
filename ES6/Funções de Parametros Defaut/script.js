function contarHistória(personagem = 'Fubá', atividade = 'correr no parque', nomeDono = 'Pedro') {
    // Atribui valores padrão aos parâmetros para evitar que eles fiquem como `undefined`, se nenhum valor for passado ao chamar a função. 
    // Se um valor for passado, ele substitui o valor padrão.
    
    document.write(
        `Era uma vez um cachorro chamado ${personagem}. 
        Ele adorava ${atividade} e seu dono se chamava ${nomeDono}.`
    );
}

contarHistória(undefined, undefined, 'Lucas'); 
// Quando um argumento é passado como `undefined`, o valor padrão do parâmetro é mantido.
// Ao passar um valor específico, esse valor substitui o padrão apenas para aquele parâmetro.
