const Increment = document.querySelector(".increment")
const Decrement = document.querySelector(".decrement")
const count = document.querySelector(".count")
const input = document.querySelector(".input")
const reset = document.querySelector(".reset")


Increment.addEventListener("click",()=>{
    let result =  Number(count.innerText )
    let inputValue = Number(input.value)
    count.innerText = result + inputValue

    
})
Decrement.addEventListener("click",()=>{

    let result =  Number(count.innerText )
    let inputValue = Number(input.value)
    count.innerText = result - inputValue
    
})
reset.addEventListener("click",()=>{
    count.innerText = 0
})