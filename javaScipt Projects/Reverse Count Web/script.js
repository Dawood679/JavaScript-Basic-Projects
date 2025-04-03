const enddate = "12 January 2025 12:00 PM";

document.getElementById("end-date").innerHTML = enddate;
const inputs = document.querySelectorAll("input");
function clock(){
    const end = new Date(enddate);
    const nowTime = new Date()
    const diffrence = (end - nowTime)/1000;
    if(diffrence < 0) return;
    inputs[0].value = Math.floor(diffrence /3600 / 24); 
    inputs[1].value = Math.floor((diffrence /3600) %24);
    inputs[2].value = Math.floor((diffrence /60) %60);
    inputs[3].value = Math.floor((diffrence) %60);
    

}
clock();

setInterval(
    function(){
        clock()
    },1000
)