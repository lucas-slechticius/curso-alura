/*
let x = "";
    console.log(x);
    x = "oi";
    */

// DECLARAÇÃO DE FUNÇÃO 

    //1) declarar a função

                            //string
    function imprimeTexto (texto) {
        console.log(texto)
    }

//2) executa a função (1 ou + vezes)

imprimeTexto("oi")

// da para colocar função dentro de função
imprimeTexto(soma())

//3) três formas de escrever funções 

function soma() {
 // o Return sempre deve (se existir na f) no final do bloco de código.
 
    return 2 + 2
}




//console.log(soma())