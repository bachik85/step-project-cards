import VisitForm from "./visitForm.js";
import {Input} from "../../formFields/index.js";

class VisitDentistForm extends VisitForm {
    type = "dentist";

    typeProps  = {
        type: "hidden",
        name: "type",
        value: 'dentist'
    };

    lastVisitDateProps = {
        type: "text",
        name: "lastVisitDate",
        placeholder: "Дата последнего посещения",
        labelText: "Дата последнего посещения",
        value: this.props.lastVisitDate
    };

    render(){
        const form  = super.render();
        const type = new Input(this.typeProps);
        const lastVisitDate = new Input(this.lastVisitDateProps);
        const submit = new Input(this.submitProps);
        form.append(lastVisitDate.render(), submit.render(), type.render());
        this.elem = form;
        return this.elem;
    }
}

export default VisitDentistForm;