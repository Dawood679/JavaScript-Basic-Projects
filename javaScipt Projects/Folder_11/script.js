const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH =  "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box")
const showMovies = async(api)=>{
    movieBox.innerHTML = "";
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)
    newMovies(data.results)
}

const newMovies = (data)=>{
    data.forEach(
        (item)=>{
            console.log(item)
            const elem = document.createElement("div");
            elem.classList.add("box")
            elem.innerHTML = `
            <div class="box">
                <img src="${IMGPATH+item.poster_path}" alt="" />
                 <div class="overlay">
                     <h2>${item.title}</h2>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
                 </div>
             </div>
            `
            movieBox.appendChild(elem)
        }
    )
}


document.querySelector("#search").addEventListener(
    "keyup",
    function(event){
        if(event.target.value != ""){
            showMovies(SEARCHAPI + event.target.value)
        }
        else{
            showMovies(APIURL)
        }
    }
)




showMovies(APIURL)