function toggleFS(){
  if(document.fullscreenElement == null){
    document.body.requestFullscreen();
  }
  else{
    document.exitFullscreen();
  }
}

function sidebarVisible(action){
  if(action==1){
    sidebar.style.display="inline";
  }
  else{
    sidebar.style.display="none";
  }
}

function toggleEditor(action){
  if(action==1){
    editor.style.display="inline";
    openEditor.style.display="none";
  }
  else{
    editor.style.display="none";
    openEditor.style.display="inline";
  }
}

function addNewNote(){
  var noteString= window.localStorage.getItem("notes");
  var noteArray = JSON.parse(noteString);
  var thisNote={
    "Title": noteTitle.value,
    "Body" : noteBody.value
  }
  noteArray.push(thisNote);
  noteString= JSON.stringify(noteArray);
  window.localStorage.setItem("notes",noteString);


}

//Main logic
//initialize if first time visitor
var noteString= window.localStorage.getItem("notes");
var noteArray; 
if(noteString== undefined){
  noteArray = [];
  noteString= JSON.stringify(noteArray);
  window.localStorage.setItem("notes",noteString);
}
noteArray = JSON.parse(noteString);
