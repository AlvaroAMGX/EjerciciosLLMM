function cambiaimg(nombre) {
    var x = document.getElementById("img").value;
    document.getElementById('miImagen').src = x;   
}

function cambiafont(nombre) {
    var x = document.getElementById("font").value;
    document.getElementById('parrafo').style.fontFamily = x;   
}

function escribir(){
    var x = document.getElementById("opc").value
    document.getElementById("div").innerHTML = x
}