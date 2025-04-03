const APIURL = "https://api.github.com/users/";
const mainElement = document.querySelector("#main")
const newElement = document.querySelector("#search")
const getUser = async(username)=>{
    const response = await fetch(APIURL + username)
    const data = await response.json()
    
    const main =`
    
        <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">
                    
                </div>
            </div>
        </div>
    
    `
    mainElement.innerHTML = main;
    getrepos(username)
}

getUser("Andrew")


const getrepos = async (username)=>{
    const repos = document.querySelector("#repos");
    const response = await fetch( APIURL + username + "/repos")
    const data = await response.json()
    data.forEach(
            (item)=>{
                const elem = document.createElement("a");
                elem.classList.add("repo")
                elem.href = item.html_url;
                elem.innerText = item.name;
                elem.target = "_blank"; 
                repos.appendChild(elem)
        }
    
    ) 
}

const formSubmit = ()=>{
    
    if(newElement.value !=""){
        getUser(newElement.value)
        newElement.value = "";
    }
    else if(newElement.value === "" ){
        const main =`
    
        <div class="card">
            <div>
                <img class="avatar" src="https://picsum.photos/200" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>Name</h2>
                <p>Bio</p>

                <ul class="info">
                    <li>###<strong>Followers</strong></li>
                    <li>##<strong>Following</strong></li>
                    <li>###<strong>Repos</strong></li>
                </ul>

                <div id="repos">
                    <a class="repo" href="#" target="_blank">Repo 1</a>
                    <a class="repo" href="#" target="_blank">Repo 2</a>
                    <a class="repo" href="#" target="_blank">Repo 3</a>
                </div>
            </div>
        </div>
    
    `
    mainElement.innerHTML = main;
    }
  
    return false;
}



newElement.addEventListener(
    "focusout",
    function(){
        formSubmit()
    }
)

{/* <a class="repo" href="#" target="_blank">Repo 1</a>
                    <a class="repo" href="#" target="_blank">Repo 2</a>
                    <a class="repo" href="#" target="_blank">Repo 3</a> */}