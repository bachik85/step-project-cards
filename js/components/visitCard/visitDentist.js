import Visit from "./visit.js";
import {VisitDentistForm} from "../forms/formTypes/visits/index.js";

class VisitDentist extends Visit {

    doctorType = "Стоматолог";

    render(){
        const patientVisit = super.render();
        if(this.state.edit) {
            const dentistProps = {...this.props, submitType: "update", update: this.updateVisit};
            const dentistForm = new VisitDentistForm(dentistProps);
            patientVisit.append(dentistForm.render())
        }
        else {
            this.addAdditionalInfo(patientVisit);
        }
        this.reconciliation(patientVisit);
        return this.elem
    }

    getPatientAdditionalInfo() {
        return `<li class="patient-info-item"><u>Дата последнего посещения</u>: ${this.props.lastVisitDate || "неизвестно"}.</li>`
    }
    
}

export default VisitDentist;