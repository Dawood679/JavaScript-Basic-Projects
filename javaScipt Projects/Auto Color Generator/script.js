const getcolor = () => {
    const newColor = Math.floor(Math.random() *16777215);
    const newCode = "#" + newColor.toString(16);
    document.body.style.backgroundColor = newCode;
    document.getElementById("heading").innerHTML = newCode;

    navigator.clipboard.writeText(newCode)
    console.log(newColor,newCode)

}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();