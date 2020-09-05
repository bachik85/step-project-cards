import VisitForm from "./visitForm.js";
import {Input} from "../../formFields/index.js";

class VisitCardioForm extends VisitForm {

    type = "cardio";

    typeProps  = {
        type: "hidden",
        name: "type",
        value: 'cardio'
    };

    normalPressureProps = {
        type: "text",
        name: "normalPressure",
        placeholder: "Обычное давление",
        labelText: "Обычное давление",
        value: this.props.normalPressure
    };

    bodyWeightIndexProps = {
        type: "text",
        name: "bodyWeightIndex",
        placeholder: "Индекс массы тела",
        labelText: "Индекс массы тела",
        value: this.props.bodyWeightIndex
    };

    prevCardioDiagnosisProps = {
        name: "prevCardioDiagnosis",
        placeholder: "Предыдущие кардио заболевания",
        labelText: "Предыдущие кардио заболевания",
        value: this.props.prevCardioDiagnosis
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
        const normalPressure = new Input(this.normalPressureProps);
        const bodyWeightIndex = new Input(this.bodyWeightIndexProps);
        const prevCardioDiagnosis = new Input(this.prevCardioDiagnosisProps);
        const age = new Input(this.ageProps);
        const submit = new Input(this.submitProps);
        form.append(normalPressure.render(), bodyWeightIndex.render(), prevCardioDiagnosis.render(), age.render(), submit.render(), type.render());
        this.elem = form;
        return this.elem;
    }
}

export default VisitCardioForm;