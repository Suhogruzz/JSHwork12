const editor = document.getElementById('editor');
const clearAll = document.querySelector('.clear')


function saveState() {
    let text = editor.value;
    let serialText = JSON.stringify(text);
    localStorage.setItem("savedText",serialText);
}

function getState() {
    let returnText = JSON.parse(localStorage.getItem("savedText"));
    editor.value = returnText;
}


editor.onkeyup = () => {
    saveState();
}

window.onload = () => {
    getState();
}

clearAll.onclick = () => {
    localStorage.clear();
    editor.value = '';
}