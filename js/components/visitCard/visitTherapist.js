import Visit from "./visit.js";
import {VisitTherapistForm} from "../forms/formTypes/visits/index.js";

class VisitTherapist extends Visit {

    doctorType = "Терапевт";

    render(){
        const patientVisit = super.render();
        if(this.state.edit) {
            const therapistProps = {...this.props, submitType: "update", update: this.updateVisit};
            const therapistForm = new VisitTherapistForm(therapistProps);
            patientVisit.append(therapistForm.render())
        }
        else {
            this.addAdditionalInfo(patientVisit);
        }        
        this.reconciliation(patientVisit);
        return this.elem
    }

    getPatientAdditionalInfo() {
        return `<li class="patient-info-item"><u>Возраст</u>: ${this.props.age}.</li>`
    }
}

export default VisitTherapist;