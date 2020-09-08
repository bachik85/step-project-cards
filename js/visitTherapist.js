import {Visit} from "./Visit.js";

class VisitTherapist extends Visit {
  constructor(...args) {
    super(...args);
    this.elem = null;
    this.extendedOptionContainer = null;
  }
  render() {
    let {urgency, visitPurpose, visitDescription, patientAge} = this.dataObj;
    this.elem = super.render();
    this.extendedOptionContainer = this.elem.querySelector('.card__extended-options');
    this.extendedOptionContainer.innerHTML = `
		<div class="card__content">
            <span class="card__content-first">Urgency:</span>
            <span class="card__content-second">${urgency}</span>
        </div>
        
        <div class="card__content">
            <span class="card__content-first">Visit Purpose:</span>
            <span class="card__content-second">${visitPurpose}</span>
        </div>
        
        <div class="card__content">
            <span class="card__content-first">Visit Description:</span>
            <span class="card__content-second">${visitDescription}</span>
        </div>
        
         <div class="card__content">
            <span class="card__content-first">Patient Age:</span>
            <span class="card__content-second">${patientAge}</span>
        </div>
		`;
    return this.elem;
  }
}

export {VisitTherapist};