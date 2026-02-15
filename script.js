function toggleFS(){
  if(document.fullscreenElement == null){
    document.body.requestFullscreen();
    fs.innerHTML="Exit Fullscreen";
  }
  else{
    document.exitFullscreen();
    fs.innerHTML="Fullscreen";
  }
}

function autoToggleFS(){
  if(window.localStorage.getItem("autoFS")=="false"){
    autoFSbtn.style.color="green";
    window.localStorage.setItem("autoFS", true);
    autoFS.innerHTML="On";
  }
  else{
    autoFSbtn.style.color="red";
    window.localStorage.setItem("autoFS", false);
    autoFS.innerHTML="Off";
  }
}

function recivedPermissonAutoFS(){
  document.body.requestFullscreen();
  FSalert.style.display="none";
  document.removeEventListener("click",recivedPermissonAutoFS);
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
    "id": noteArray.length,
    "version":noteArrayVersion,
    "title": noteTitle.value,
    "body" : noteBody.value
  }
  noteArray.push(thisNote);
  noteString= JSON.stringify(noteArray);
  window.localStorage.setItem("notes",noteString);
}

//PreMain logic
//initialize if first time visitor
var noteString= window.localStorage.getItem("notes");
var noteArray; 
if(noteString== undefined){
  noteArray = [];
  noteString= JSON.stringify(noteArray);
  window.localStorage.setItem("notes",noteString);
}
noteArray = JSON.parse(noteString);

//initialize autoFS function for first time visitor
if(window.localStorage.getItem("autoFS") == null){
  window.localStorage.setItem("autoFS", false);
}

//Main logic
if(window.localStorage.getItem("autoFS") == "true"){
  document.addEventListener("click", recivedPermissonAutoFS);
  FSalert.style.display="inline";
  autoFS.innerHTML="On";
  autoFS.style.color="green";
}
// TODO: use splice() to create note deletion functionality, as it shifts the ids itself
// problem: reassign ids to notes because they desync with index if splice is used 
