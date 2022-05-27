function borrar() {
    const li = document.getElementById("lista");
    while (li.hasChildNodes()) {
      li.removeChild(li.firstChild);
    }
  }