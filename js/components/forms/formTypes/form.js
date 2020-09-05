import Component from "../../component.js";

class Form extends Component {
    
    render(){
        const elem = this.createElement("form", this.props);
        return elem;
    }
    
    serializeJSON(){
        const body = {};
        const allFields = [...this.elem.querySelectorAll('input[name], select[name], textarea[name]')];
        const notEmptyFields = allFields.filter(({value}) => value);
        notEmptyFields.forEach(({name, value}) => body[name] = value);
        return body;
    }
}

export default Form;