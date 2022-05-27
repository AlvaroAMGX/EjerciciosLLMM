//Variables que voy a utilizar
var y = -2;
var i = -1;
var txt = "";
var pregunta = "";
var boton1 = "";
var boton2 = "";
var boton3 = "";
var boton4 = "";
var puntuacion = 0;
var puntuacio1 = "";
//Cogera con ajax las siguientes preguntas
function siguiente_pregunta() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    i++;
    x = doc.getElementsByTagName("question")[i];
    pregunta = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
    document.getElementById("pregunta").innerHTML = pregunta;
    boton1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
    document.getElementById("boton1").innerHTML = boton1;
    boton2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
    document.getElementById("boton2").innerHTML = boton2;
    boton3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
    document.getElementById("boton3").innerHTML = boton3;
    boton4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
    document.getElementById("boton4").innerHTML = boton4;
  }
  xhttp.open("GET", "quizi.xml");
  xhttp.send();
}
//funciones que veran si lo que respondio el usuario esta correto
function puntuacion1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[0].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizi.xml");
  xhttp.send();
}

function puntuacion2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[1].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizi.xml");
  xhttp.send();
}
function puntuacion3() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[2].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizi.xml");
  xhttp.send();
}
function puntuacion4() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[3].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizi.xml");
  xhttp.send();
}

//Javascript del reloj
window.onload = updateClock;

var totalTime = 120;

function updateClock() {
  document.getElementById('cuentaatras').innerHTML = totalTime;
  if (totalTime == 0) {
    alert('Has perdido');
  } else {
    totalTime -= 1;
    setTimeout("updateClock()", 1000);
  }
}
function reinicio() {
  location.reload();
}


//Las otras 20 preguntas
function siguiente_pregunta1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    i++;
    x = doc.getElementsByTagName("question")[i];
    pregunta = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
    document.getElementById("pregunta").innerHTML = pregunta;
    boton1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
    document.getElementById("boton1").innerHTML = boton1;
    boton2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
    document.getElementById("boton2").innerHTML = boton2;
    boton3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
    document.getElementById("boton3").innerHTML = boton3;
    boton4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
    document.getElementById("boton4").innerHTML = boton4;
  }
  xhttp.open("GET", "quizi1.xml");
  xhttp.send();
}

function puntuacion11() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[0].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizi1.xml");
  xhttp.send();
}

function puntuacion21() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[1].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizi1.xml");
  xhttp.send();
}
function puntuacion31() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[2].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizi1.xml");
  xhttp.send();
}
function puntuacion41() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[3].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizi1.xml");
  xhttp.send();
}
