function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    } 
       
}

/*
usar Crase eu consigo fazer template `#som_${variável}`
Cara tem muito nisso.

*/