const span = document.querySelector("span")

const arrNames = ["Developer","Coder","Teacher"]
let arrCount = 0
const word = "Dawood"
let count = 0
let booleanValue = false
setInterval(() => {

    if(!booleanValue){
        span.innerText = span.innerText + arrNames[arrCount][count]
        count++
    }else{
        span.innerText = span.innerText.slice(0,span.innerText.length -1)
    }
    if(arrNames[arrCount].length === count){
        booleanValue = true
    }
    if(span.innerText.length ===0 && booleanValue){
        booleanValue = false;
        arrCount++
        count = 0
        if(arrCount === arrNames.length){
            arrCount = 0
        }
    }
    
    
    
    
}, 100);