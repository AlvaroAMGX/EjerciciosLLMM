var fotos = [
'coche1.jpg',
'coche2.jpg',
'coche3.jpg',
'coche4.jpeg',
'coche5.jpg',
'coche6.jpg',
]

var contador = 0

function cambiacoched() {
    contador = contador + 1;
    if (contador > 5){
        contador = 0;
        document.getElementById('miImagen').src = fotos[contador]; 
    }
    document.getElementById('miImagen').src = fotos[contador];
}
function cambiacochei() {
    contador= contador - 1;
    if (contador < 0){
        contador = 5;
        document.getElementById('miImagen').src = fotos[contador]; 
    }
    document.getElementById('miImagen').src = fotos[contador];
}
