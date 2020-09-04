
class Input {
    constructor(name, type, placeholder) {
        this.name = name;
        this.type = type;
        this.placeholder = placeholder;
    }
    render(parent) {
        this.input = document.createElement('input');
        this.input.type = this.type;
        this.input.placeholder = this.placeholder;
        this.input.classList.add('input-field');
        parent.append(this.input);
    }
}

class FormButton {
    constructor(name, style) {
        this.name = name;
        this.style = style;
    }
    render(parent) {
        this.button = document.createElement('button');
        this.button.textContent = this.name;
        this.button.classList.add(this.style);
        parent.append()
    }

}

class LoginForm {
    constructor(formName, position) {
        this.name = formName;
        this.position = position;
        this.email = new Input('email', 'text', 'Enter email');
        this.password = new Input('password', 'password', 'Enter password');
        this.submit = buttonName;
    }
    render(parent) {
        this.form = document.createElement('form');
        this.formName = document.createElement('h2');
        this.formSubmit = document.createElement('input');
    }
}