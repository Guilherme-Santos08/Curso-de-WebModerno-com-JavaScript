Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <=fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9.10)) {
        console.log('Quadro de Honra') // tomar cuidado que se não tiver o "else if" ele vai parar aqui e não vai mais imprimir
    
    }else if (nota.entre(7, 8.99)){
        console.log('aprovado')
    
    }else if (nota.entre((4, 6.99))) {
        console.log('Recuperação')
    
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    
    }else {
        console.log('Nota inválida')
    }
    // console.log('Fim') // Sempre que ele sair de um bloco, irar aparecer "Fim"
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)