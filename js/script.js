class HeaderButton {
    constructor(login, createCard) {
        this.login = login;
        this.createCard = createCard;
    }
    render(parent) {
        this.headerButton = document.createElement('button');
        this.headerButton.innerText = this.login;
        this.headerButton.classList.add('header-button');
        parent.append(this.headerButton);
    }
    switchToLogin() {
        this.headerButton.classList.add('red-bg');
        this.headerButton.innerText = this.login;
        this.headerButton.addEventListener('click', ()=> toggleLoginForm());
    }
    switchToCreateCard() {
        this.headerButton.classList.remove('red-bg');
        this.headerButton.innerText = this.createCard;
        this.headerButton.removeEventListener('click', ()=> toggleLoginForm());
    }
}


const loginForm = document.getElementById('loginForm');
const loginToken = sessionStorage.getItem('token');

const headerButton = new HeaderButton('Login', 'Create card');
const header = document.querySelector('.header');
headerButton.render(header);





if (!loginToken) {
    headerButton.switchToLogin();
    loginForm.elements[2].addEventListener('click', sendLogin);
    loginForm.elements[3].addEventListener('click', toggleLoginForm);
} else {
    headerButton.switchToCreateCard();
}

function toggleLoginForm() {
    loginForm.classList.toggle('hidden');
    loginForm.children[0].textContent = 'Please login';
    loginForm.children[0].classList.remove('red-font');
    loginForm.elements[2].textContent = 'Login';
    loginForm.elements[2].classList.remove('red-bg');
}

function sendLogin(event) {
    event.preventDefault();
    const loginResults = new FormData(loginForm);
    const loginData = {
        email: loginResults.get('email'),
        password: loginResults.get('password')
    };

    if(loginData.email && loginData.password) {
        getLogin(loginData);
    }
}

function getLogin(data) {
    fetch('http://cards.danit.com.ua/login', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(json => {
            if(json.status === 'Success') {
                toggleLoginForm();
                headerButton.switchToCreateCard();
                sessionStorage.setItem('token', json.token);
            } else if(json.status === 'Error') {
                loginForm.children[0].textContent = json.message;
                loginForm.children[0].classList.add('red-font');
                loginForm.elements[2].textContent = 'Try again';
                loginForm.elements[2].classList.add('red-bg');
            }
        });
}


