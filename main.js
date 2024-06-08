function tocaSom (idElementoAuio){
    const elemento = document.querySelector(idElementoAuio)

    if(elemento && elemento.localName ==='audio'){
        elemento.play();
    }
    else{
        alert('Elemento ou Seletor Invalido')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');


// Enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}` //Template String

    tecla.onclick = function(){
        tocaSom(idAudio)
    };

    tecla.onkeydown = function(evento){


        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }

}

