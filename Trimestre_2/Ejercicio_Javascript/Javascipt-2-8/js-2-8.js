document.getElementById("pantalla").value = ''
//uno
function uno() {
    document.getElementById("pantalla").value += '1'
}
//dos
function dos() {
    document.getElementById("pantalla").value += '2'
}
//tres
function tres() {
    document.getElementById("pantalla").value += '3'
}
//cuatro
function cuatro() {
    document.getElementById("pantalla").value += '4'
}
//cinco
function cinco() {
    document.getElementById("pantalla").value += '5'
}
//seis
function seis() {
    document.getElementById("pantalla").value += '6'
}
//siete
function siete() {
    document.getElementById("pantalla").value += '7'
}
//ocho
function ocho() {
    document.getElementById("pantalla").value += '8'
}
//nueve
function nueve() {
    document.getElementById("pantalla").value += '9'
}
//cero
function cero() {
    document.getElementById("pantalla").value += '0'
}
//suma
function suma() {
    document.getElementById("pantalla").value += '+'
}
//resta
function resta() {
    document.getElementById("pantalla").value += '-'
}
//multiplicacion
function multiplicacion() {
    document.getElementById("pantalla").value += '*'
}
//division
function division() {
    document.getElementById("pantalla").value += '/'
}
//igual
function igual() {
    res = eval(pantalla.value)
    document.getElementById("pantalla").value = res
}
//borrar
function borrar() {
    document.getElementById("pantalla").value = ''
}
//celsius a kelvin
function celciusk() {
    var res = eval(pantalla.value) + 273
    document.getElementById("pantalla").value = res
}
//celsius a farenheit
function celciusf() {
    var res = (pantalla.value * 9 / 5) + 32
    document.getElementById("pantalla").value = res
}
//kelvin a celsius
function kelvinc() {
    var res = pantalla.value - 273
    document.getElementById("pantalla").value = res
}
//punto
function farenheitc() {
    var res = (pantalla.value - 32 ) * 5/9
    document.getElementById("pantalla").value = res
}