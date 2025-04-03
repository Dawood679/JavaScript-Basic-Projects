const apikey = "74435950a8f41763952d8c325941a83b";
const apinew = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const Inputboc = document.querySelector("#inputfiled");
const inputbtn = document.querySelector("#inputbtn")
const imageicon = document.querySelector("#newicons")
async function checkwether(city) {
    
    Inputboc.innertext = "";
    const response = await fetch(apinew + city +`&appid=${apikey}`)
    if(response.status === 404){
        document.querySelector(".another").style.display = "none";
        document.querySelector(".mytype").style.display = "block";
    }
    else{
        let data = await response.json();
    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humadityno").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clear"){
        imageicon.src = "/images/clear.png"
    }
    else if(data.weather[0].main ==="Clouds"){
        imageicon.src = "./images/clouds.png"
    }
    else if(data.weather[0].main ==="Drizzle"){
        imageicon.src = "./images/drizzle.png"
    }
    else if(data.weather[0].main ==="humidity"){
        imageicon.src = "./images/humidity.png"
    }
    else if(data.weather[0].main ==="mist"){
        imageicon.src = "./images/mist.png"
    }
    else if(data.weather[0].main ==="snow"){
        imageicon.src = "./images/snow.png"
    }
    else if(data.weather[0].main ==="rain"){
        imageicon.src = "./images/rain.png"
    }
    else if(data.weather[0].main ==="wind"){
        imageicon.src = "./images/wind.png"
    }
    document.querySelector(".another").style.display = "block";
    document.querySelector(".mytype").style.display = "none";
    }
    
}

inputbtn.addEventListener("click",()=>{
    checkwether(Inputboc.value);
    
}
)
Inputboc.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        checkwether(Inputboc.value);
    }
});
