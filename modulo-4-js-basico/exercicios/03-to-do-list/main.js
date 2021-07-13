// o da prof eh muito mais foda!!
// o melhor é voltar nos exercícios e ver como ela fez!!


let textValue = document.getElementById("textBar");
let addTask = document.getElementById("addTask");
let listElement = document.getElementById("list");

addTask.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(textValue.value));
    listElement.appendChild(newItem);
    textValue.value = '';
});