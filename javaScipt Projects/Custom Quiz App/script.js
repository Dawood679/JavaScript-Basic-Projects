let questions = [
    {
        que: "What's your name?",
        a:"Dawood",
        b:"Ahtisham",
        c:"Jhanzaib",
        d:"Mehmood",
        correct:"a"
    },
    {
        que: "This is second question",
        a:"option 1",
        b:"option 2",
        c:"option 3",
        d:"option 4",
        correct:"b"
    },
    {
        que: "This is third question",
        a:"option 1",
        b:"option 2",
        c:"option 3",
        d:"option 4",
        correct:"b"
    },
];
let index = 0;
let total = questions.length;
const optionsElement = document.querySelectorAll(".options");
let right = 0, wrong = 0;
const questionLoader = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    let data = questions[index];
    document.getElementById('heading').innerText = `${index+1}) ${data.que}`;
    optionsElement[0].nextElementSibling.innerHTML = data.a;
    optionsElement[1].nextElementSibling.innerHTML = data.b;
    optionsElement[2].nextElementSibling.innerHTML = data.c;
    optionsElement[3].nextElementSibling.innerHTML = data.d;
}

const sumbitQuiz = ()=>{
    let data = questions[index];
    let ans = process()
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    questionLoader();
    return;
}


const process = ()=>{
    let Answer;
    optionsElement.forEach(
        (input)=>{
            if(input.checked){
                Answer = input.value
            }
        }
    )
    return Answer;
}
const reset = ()=>{
    optionsElement.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}


const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center; color:red; border-radius:10px">
    <h2>.....Your Score is.....</h2>
    <h3>${right}/ ${total} are Correct</h3>
    </div>
    `
}

questionLoader()