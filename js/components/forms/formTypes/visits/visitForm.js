import Form from '../form.js'
import {Input, Textarea, Select} from "../../formFields/index.js";

class VisitForm extends Form {

    firstNameProps = {
        type: "text",
        name: "firstName",
        placeholder: "Имя",
        labelText: "Имя",
        value: this.props.firstName
    };

    lastNameProps = {
        type: "text",
        name: "lastName",
        placeholder: "Фамилия",
        labelText: "Фамилия",
        value: this.props.lastName
    }; 
    
    middleNameProps = {
        type: "text",
        name: "middleName",
        placeholder: "Отчество",
        labelText: "Отчество",
        value: this.props.middleName
    };     

    purposeProps = {
        type:"text",
        name:"purpose",
        placeholder:"Цель визита",
        labelText: "Цель визита",
        value: this.props.purpose
    };

    descriptionProps = {
        name:"description",
        text: "Краткая цель визита",
        value: this.props.description
    };

    urgencyProps = {
        name: "urgency",
        label:"Срочность визита",
        options:[
            {
                value:"normal", 
                text:"Обычная"
            }, 
            {
                value: "priority", 
                text: "Приоритетная"
            }, 
            {
                value:"urgent", 
                text:"Неотложная"
            }],
        value: this.props.urgency
    };

    submitProps = {
        type: "submit",
        value: 'Обновить'
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const body = this.serializeJSON();
        const {submitType} = this.props;
        if(submitType === "create"){
            this.props.add(body);
            
        }else if(submitType === "update"){
            this.props.update(body);
        }
    };

    render(){
        const form = super.render();

        const firstName = new Input(this.firstNameProps);
        const LastNameName = new Input(this.lastNameProps);
        const middleName = new Input(this.middleNameProps);
        const purpose = new Input(this.purposeProps);
        const description = new Textarea(this.descriptionProps);
        const urgency = new Select(this.urgencyProps);

        form.append(firstName.render(), LastNameName.render(), middleName.render(), purpose.render(), description.render(), urgency.render());

        form.addEventListener("submit", this.handleSubmit);
        return form;
    }

}

export default VisitForm;