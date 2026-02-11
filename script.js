const opensidebar = document.getElementById("openSidebarBtn");
const closesidebar = document.getElementById("closeSidebarBtn");
const sidebar = document.getElementById("sidebar");
const sidebarVoid = document.getElementById("sidebarVoid");
const fs = document.getElementById("fs");
const reload = document.getElementById("reload");
const addNote = document.getElementById("addNote");
const editor = document.getElementById("editor");
const closeEditor = document.getElementById("closeEditor");
const erudaBtn = document.getElementById("erudaBtn");

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
function showEditor(action){
  if(action==1){
    editor.style.display="inline";
    addNote.style.display="none";

  }
  else{
    editor.style.display="none";
    addNote.style.display="inline";
  }
}


// start listening
opensidebar.addEventListener("click", () => sidebarVisible(1));
closesidebar.addEventListener("click", () => sidebarVisible(0));
sidebarVoid.addEventListener("click", () => sidebarVisible(0));
fs.addEventListener("click", () => toggleFS());
reload.addEventListener("click", () => window.location.reload());
addNote.addEventListener("click", () => showEditor(1));
closeEditor.addEventListener("click", () => showEditor(0));

//DEBUG:
//start console button
erudaBtn.addEventListener("click", () => eruda.init());


