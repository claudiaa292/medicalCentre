console.log("hello Alin");

const add = document.getElementById("add");
const nume = document.getElementById("nume");
const lista = document.querySelector("#lista");

const addNewElem = function () {
    
  const list = document.createElement("li");
  const newText = document.createTextNode(nume.value);

  list.appendChild(newText);
  lista.appendChild(list);
  nume.value = "";
};

add.addEventListener("click", addNewElem);
