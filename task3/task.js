const welcome = document.querySelector('#welcome');
const user = document.querySelector('#user_id');
const signinBtn = document.querySelector('#signin__btn');
const signoutBtn = document.querySelector('#signout__btn');
const login = document.querySelector('input[name="login"]');
const password = document.querySelector('input[name="password"]');
const signinForm = document.querySelector('#signin__form');
const signin = document.querySelector('#signin')


const xhr = new XMLHttpRequest();

signinBtn.onclick = (e) => {
    e.preventDefault();

    let data = new FormData(signinForm);
    login.value='';
    password.value='';

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
    xhr.send(data);
    xhr.onload = () => {
            if(JSON.parse(xhr.response).success) {
                let uid = JSON.parse(xhr.response).user_id;
                localStorage.setItem('uid', uid);
                user.innerText = uid;
                welcome.classList.add('welcome_active');
                signoutBtn.classList.remove('signout_inactive')
                signin.classList.remove('signin_active');
            }
            else {
                alert('Неверный логин/пароль')
            }
    }
}

window.onload = () => {
    if (localStorage.length != 0) {
        user.innerText = localStorage.getItem('uid');
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
    }
    else {
        signoutBtn.classList.add('signout_inactive')
    }
}

signoutBtn.onclick = (e) => {
    e.preventDefault();
    signoutBtn.classList.add('signout_inactive')
    localStorage.removeItem('uid');
    user.innerText = '';
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
}