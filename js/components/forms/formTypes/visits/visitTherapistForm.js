import VisitForm from "./visitForm.js";
import {Input} from "../../formFields/index.js";

class VisitTherapistForm extends VisitForm {
    type = "therapist";

    typeProps  = {
        type: "hidden",
        name: "type",
        value: 'therapist'
    };

    ageProps = {
        type: "text",
        name: "age",
        placeholder: "Возраст",
        labelText: "Возраст",
        value: this.props.age
    };

    render(){
        const form  = super.render();
        const type = new Input(this.typeProps);
        const age = new Input(this.ageProps);
        const submit = new Input(this.submitProps);
        form.append(age.render(), submit.render(), type.render());
        this.elem = form;
        return this.elem;
    }
}
export default VisitTherapistForm;