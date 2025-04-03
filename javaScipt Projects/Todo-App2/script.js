const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")
addBtn.addEventListener(
    "click",
    function() {
        addNote()
    }
)
const savenotes = () => {
    let notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note)=> {
            data.push(note.value)
            console.log(data)
        }
    )
    if(data.length ===0){
        localStorage.removeItem("notes")
    }
    else{

        localStorage.setItem("notes",JSON.stringify(data))
    }
}

const addNote = (text = "")=>{
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="note">
                <div class="tool">
                    <i class="save fa-solid fa-floppy-disk"></i>
                    <i class="trash fa-solid fa-trash"></i>
                </div>
                <textarea name="" id="textarea">${text}</textarea>
            </div>
    `
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove();
            savenotes();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            savenotes();
        }
    )
    main.appendChild(note)
    savenotes();
    note.querySelector("textarea").addEventListener("focusout",
        function(){
            savenotes()
        }

    )
}

(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"))
        if(lsnotes === null){
            addNote()
        }
        else{
            lsnotes.forEach(
                (lsnotes)=>{
                    addNote(lsnotes)
                }
            )

        }
    }
    ()
)