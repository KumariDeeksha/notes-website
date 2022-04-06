console.log('welcome to app.js');
//if user adds a note to local storage
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener("click",(e)=>{
        let addtxt=document.getElementById('addtxt');
        let notes=localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];

        }
        else{
            notesObj=JSON.parse(notes);

        }
        notesObj.push(addtxt.value);
        localStorage.setItem("notes",JSON.stringify(notes));
        addtxt.value="";
        console.log(notesObj);

})