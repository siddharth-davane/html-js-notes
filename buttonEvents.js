// start listening
opensidebar.addEventListener("click", () => sidebarVisible(1));
closesidebar.addEventListener("click", () => sidebarVisible(0));
sidebarVoid.addEventListener("click", () => sidebarVisible(0));
fs.addEventListener("click", () => toggleFS());
reload.addEventListener("click", () => window.location.reload());
openEditor.addEventListener("click", () => toggleEditor(1));
closeEditor.addEventListener("click", () => toggleEditor(0));
noteSave.addEventListener("click", () => addNewNote());
autoFSbtn.addEventListener("click", () => autoToggleFS());


//DEBUG:
//start console button
erudaBtn.addEventListener("click", () => eruda.init());

