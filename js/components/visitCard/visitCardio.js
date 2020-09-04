import Visit from "./visit.js";

class VisitCardio extends Visit {

    doctorType = "Кардиолог";

    render(){
        const patientVisit = super.render();
        if(this.state.edit) {
            const cardioProps = {...this.props, submitType: "update", update: this.updateVisit};
            const cardioForm = new VisitCardioForm(cardioProps);
            patientVisit.append(cardioForm.render())
        }
        else {
            this.addAdditionalInfo(patientVisit);
        }
        this.reconciliation(patientVisit);
        return this.elem
    }

    getPatientAdditionalInfo() {
        return `<li class="patient-info-item"><u>Возраст</u>: ${this.props.age}.</li>
                <li class="patient-info-item"><u>Обычное давление</u>: ${this.props.normalPressure}.</li>
                <li class="patient-info-item"><u>Индекс массы тела</u>: ${this.props.bodyWeightIndex}.</li>
                <li class="patient-info-item"><u>Перенесенные сердечно-сосудистые заболевания</u>: ${this.props.prevCardioDiagnosis  || "нет"}.</li>`
    }
    
}

export default VisitCardio;