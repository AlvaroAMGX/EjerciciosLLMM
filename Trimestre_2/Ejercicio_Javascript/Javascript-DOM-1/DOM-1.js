function relleno(){
const x = document.getElementsByTagName('p');
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x[i].innerHTML + "<br>";
}
document.getElementById("div").innerHTML = text;
}
function borrar(){
    document.getElementById("div").innerHTML = "";
}