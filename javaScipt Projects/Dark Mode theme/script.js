const fullDarkMode = document.querySelector("#full-dark-mode");
const containerDarkMode = document.querySelector("#Conatiner-dark-mode");
const container = document.querySelector(".container");


let newvalue =  (JSON.parse(localStorage.getItem("fullDarkMode")))
let firstvalue = JSON.parse(localStorage.getItem("containerDarkMode"))
if(fullDarkMode){
    fullDarkMode.checked = newvalue
}
if(containerDarkMode){
    containerDarkMode.checked = firstvalue
}
Changetheme(fullDarkMode,document.body,"fullDarkMode")
Changetheme(containerDarkMode,container,"containerDarkMode")

fullDarkMode.addEventListener("change", () => {
    Changetheme(fullDarkMode,document.body,"fullDarkMode")
});

containerDarkMode.addEventListener("change", () => {
    Changetheme(containerDarkMode,container,"containerDarkMode")
});

function Changetheme(first,elementName,third){
    if (first.checked) {
        elementName.classList.add("dark");
        localStorage.setItem(third,true)
    } else {
        localStorage.setItem(third,false)
        elementName.classList.remove("dark"); // Remove dark class when unchecked
    }
}