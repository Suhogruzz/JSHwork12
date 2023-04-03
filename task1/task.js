const editor = document.getElementById('editor');
const clearAll = document.querySelector('.clear')


function saveState() {
    let text = editor.value;
    localStorage.setItem("savedText",text);
}

function getState() {
    let returnText = localStorage.getItem("savedText");
    editor.value = returnText;
}


editor.onkeyup = () => {
    saveState();
}

window.onload = () => {
    getState();
}

clearAll.onclick = () => {
    localStorage.removeItem("savedText");
    editor.value = '';
}