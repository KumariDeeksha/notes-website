console.log('welcome to app.js');
shownotes();
//if user adds a note to local storage
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
        let addtxt=document.getElementById('addtxt');
        let notes=localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];

        }
        else{
            notesObj=JSON.parse(notes);

        }
        notesObj.push(addtxt.value);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        addtxt.value="";
        //console.log(notesObj);
        shownotes();
})
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html+=`
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">

            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
            </div>
        </div>`
        
    });
    let notesEle=document.getElementById('notes');
    if(notesObj.length!=0){
    notesEle.innerHTML=html;
    }
    else{
        notesEle.innerHTML=`nothing to show,add some note`;
    }
}


//to delete a note
function deleteNote(index){
    //console.log('i m deleting',index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
}


let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    //console.log('input event fired',inputval);
    let notecards=document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        
        //console.log(cardtxt);

    })


})