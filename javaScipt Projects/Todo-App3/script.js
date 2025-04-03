const itemElement = document.querySelector("#input_box");
const ulElement = document.querySelector("#box-for-ul");

itemElement.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addtodo(this.value);
    this.value = "";
  }
});

let getdata = () => {};

const addtodo = (text) => {
  const lisitem = document.createElement("li");
  lisitem.innerHTML = `
    ${text}
    <i class="fas fa-times"></i>
    `;
  lisitem.addEventListener("click", function () {
    lisitem.classList.toggle("done");
  });
  lisitem.querySelector("i").addEventListener("click", function () {
    lisitem.remove();
  });
  ulElement.appendChild(lisitem);
};
