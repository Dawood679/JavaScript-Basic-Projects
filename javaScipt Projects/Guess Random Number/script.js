function Counter(){
    const form = document.querySelector("form")
let Input = document.querySelector(".input-field")
const result = document.querySelector('.result')
const YourGuess = document.querySelector('.Your-Guess')
const sumbitbtn = document.querySelector('.sumbit')
const restGame = document.querySelector('.reestGame')
const cheetBtn = document.querySelector('.cheet-btn')
const cheetPara = document.querySelector('.cheet-p')

let numberArr = []
let randomNumber = Math.floor(Math.random()*100)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let InputValue = Input.value
    if(InputValue > randomNumber){
        result.innerText = "To High!"
    }
    else if(InputValue < randomNumber){
       result.innerText = "To Low!"
    }else{
        result.innerText = "You Win"
        sumbitbtn.disabled = true
        restGame.disabled = false

        

    }
    numberArr.push(InputValue)
    YourGuess.innerText = "Your Guesses: " + numberArr.join(", ")
    Input.value = ""


})
restGame.addEventListener("click",()=>{
    Input.value = ""
    YourGuess.innerText = ""
    result.innerText = ""
    numberArr = []
    randomNumber = Math.floor(Math.random()*100)
    sumbitbtn.disabled = false
    restGame.disabled = true


})
cheetBtn.addEventListener("click",()=>{
    cheetPara.innerText = randomNumber
})
}
Counter()