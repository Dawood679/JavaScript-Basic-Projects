const inputBox = document.getElementById("taskinput");
const listContainer = document.getElementById("list-container");

function addtask(){
    if (inputBox.value === '') {
        alert("You must write Something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        
    }
    inputBox.value = '';
    saveDate();
}
listContainer.addEventListener("click", function(e) {
    console.log(e.target); // Debugging
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("uncheked");
        saveDate();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDate();
    }
}, false);

function saveDate() {
    localStorage.setItem("Date", listContainer.innerHTML);  
}

function showdata() {
    listContainer.innerHTML = localStorage.getItem("Date");  
}

showdata();

