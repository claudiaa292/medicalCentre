console.log("hello Alin");

const add = document.getElementById("add");
const nume = document.getElementById("nume");
const lista = document.querySelector("#lista");



const addNewElem = function () {
  const list = document.createElement("li");
  const newText = document.createTextNode("Text adaugat din js");
  list.appendChild(newText);
  lista.appendChild(list);
};

add.addEventListener("click", addNewElem);
