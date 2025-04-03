const NewContainer = document.getElementById("taskinput");
const newitems = document.getElementById("list-container");

function addtask(){
    if(NewContainer.value ===""){
        alert("Plz enter some text")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = NewContainer.value;
        newitems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    NewContainer.value = '';
    saveData()
}

newitems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("uncheked");
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})


function saveData(){
    localStorage.setItem("Data", newitems.innerHTML);
}
function showData(){
    newitems.innerHTML = localStorage.getItem("Data")
}
showData();