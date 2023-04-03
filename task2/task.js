const subscribePopup = document.querySelector('#subscribe-modal');
const closePopup = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = `${encodeURIComponent(name)} = ${encodeURIComponent(value)}`;
}

function getCookie(name) {
    if (document.cookie.length > 0) {
        let parts = document.cookie.split(';');
        let cookie = parts.indexOf(name+'=');
        return cookie
    }
    else {
        return '';
    }
}

closePopup.onclick = () => {
    subscribePopup.classList.remove('modal_active');
    setCookie('task 2', 'was closed');
}

window.onload = () => {
    if (getCookie('task 2').length == 0) {
        subscribePopup.classList.add('modal_active');
    }
}