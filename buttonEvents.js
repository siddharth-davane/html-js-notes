const opensidebar = document.getElementById("openSidebarBtn");
const closesidebar = document.getElementById("closeSidebarBtn");
const sidebar = document.getElementById("sidebar");
const sidebarVoid = document.getElementById("sidebarVoid");
const fs = document.getElementById("fs");
const reload = document.getElementById("reload");
const openEditor = document.getElementById("openEditor");
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


// start listening
opensidebar.addEventListener("click", () => sidebarVisible(1));
closesidebar.addEventListener("click", () => sidebarVisible(0));
sidebarVoid.addEventListener("click", () => sidebarVisible(0));
fs.addEventListener("click", () => toggleFS());
reload.addEventListener("click", () => window.location.reload());
openEditor.addEventListener("click", () => toggleEditor(1));
closeEditor.addEventListener("click", () => toggleEditor(0));
noteSave.addEventListener("click", () => saveNote());

//DEBUG:
//start console button
erudaBtn.addEventListener("click", () => eruda.init());

