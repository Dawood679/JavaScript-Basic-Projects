const uppercase = document.querySelector('#uppercase label')
const lowercase = document.querySelector('#lowercase label')
const camelCase = document.querySelector('#camelCase label')
const Pascalcase = document.querySelector('#Pascalcase label')
const KababCase = document.querySelector('#KababCase label')
const trim = document.querySelector('#trim label')
const SnakeCase = document.querySelector('#SnakeCase label')

const input = document.querySelector("input")


function trims(str){
    const triemss =  str.split(" ")
    return triemss.join("")

}

function SnakeCasefunc(str){
    const newvalue = str.replaceAll(' ',"_")
    return newvalue

}
function KababCasefunc(str){
    const newvalue = str.replaceAll(' ',"-")
    return newvalue

}
function newfucntion(str){
    return str[0].toUpperCase() + str.slice(1,str.length)
}

function camelCasefunc(str){
    const first = str.toLowerCase()
    const second = first.split(" ")
    const finalarr = second.map((items,i)=>{
        if(!i) return items
        return newfucntion(items)
    })
    return finalarr.join("")


}
function Pascalcasefunc(str){
    const first = str.toLowerCase()
    const second = first.split(" ")
    const finalarr = second.map((items,i)=>{
        return newfucntion(items)
    })
    return finalarr.join("")


}



input.addEventListener("input",(e)=>{
    let inputvalue = e.target.value
    uppercase.innerText = inputvalue.toUpperCase()
    lowercase.innerText = inputvalue.toLowerCase()
    trim.innerText = trims(inputvalue.trim())
    SnakeCase.innerText = SnakeCasefunc(inputvalue.trim())
    KababCase.innerText = KababCasefunc(inputvalue.trim())
    camelCase.innerText = camelCasefunc(inputvalue.trim())
    Pascalcase.innerText = Pascalcasefunc(inputvalue.trim())
})