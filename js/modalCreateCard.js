import {Modal} from "./modal.js";
import {VisitCardiologist} from "./visitCardiologist.js";
import {VisitDentist} from "./visitDentist.js";
import {VisitTherapist} from "./visitTherapist.js";
import {Input} from "./input.js";
import {Select} from "./select.js";
// import {postVisitCard} from "../../script/functions/postVisitCard.js";
// import {editVisitCard} from "../../script/functions/editVisitCard.js";


class ModalCreateCard extends Modal {
  constructor(...props) {
    super(...props);
    this.elem = null;
    this.extendedOptionsContainer = null;
    this.cardContainer = document.getElementById('card__main-container');
    this.cardFieldArray = [
      new Input('text', 'patientFullName', 'ФИО', '[:alpha:]', 'only letters please'),
      new Select('doctorType', [
        {text: 'Choose doctor', value: ''},
        {text: 'Cardiologist', value: 'cardiologist'},
        {text: 'Dentist', value: 'dentist'},
        {text: 'Therapist', value: 'therapist'},
      ]),
    ];

    this.extendedOptionsArray = {
      cardiologist: [
        new Input('text', 'visitPurpose', 'Visit Purpose'),
        new Input('text', 'visitDescription', 'Visit Description'),
        new Select('urgency', [
          {text: 'Choose urgency', value: ''},
          {text: 'Emergency', value: 'emergency'},
          {text: 'Priority', value: 'priority'},
          {text: 'Regular', value: 'regular'},
        ]),
        new Input('text', 'bloodPressure', 'Blood Pressure'),
        new Input('text', 'bodyMassIndex', 'Body Mass Index'),
        new Input('text', 'transferredDiseases', 'Transferred Diseases'),
        new Input('text', 'patientAge', 'Patient Age')
      ],

      dentist: [
        new Input('text', 'visitPurpose', 'Visit Purpose'),
        new Input('text', 'visitDescription', 'Visit Description'),
        new Select('urgency', [
          {text: 'Choose urgency', value: ''},
          {text: 'Emergency', value: 'emergency'},
          {text: 'Priority', value: 'priority'},
          {text: 'Regular', value: 'regular'},
        ]),
        new Input('text', 'dateOfLastVisit', 'Date Of LastVisit'),
      ],

      therapist: [
        new Input('text', 'visitPurpose', 'Visit Purpose'),
        new Input('text', 'visitDescription', 'Visit Description'),
        new Select('urgency', [
          {text: 'Choose urgency', value: ''},
          {text: 'Emergency', value: 'emergency'},
          {text: 'Priority', value: 'priority'},
          {text: 'Regular', value: 'regular'},
        ]),
        new Input('text', 'patientAge', 'Patient Age')
      ],
    }

  }

  render() {
    this.elem = super.render();
    this.cardFieldArray.forEach(element => this.submitButton.before(element.render()));
    this.elem.addEventListener('submit', this.createCard.bind(this));
    this.elem.querySelector('select').addEventListener('change', this.chooseSelect.bind(this));

    this.extendedOptionsContainer = document.createElement('div');
    this.extendedOptionsContainer.id = 'modal__extended-options';
    this.extendedOptionsContainer.className = 'modal__extended-options';
    this.submitButton.before(this.extendedOptionsContainer);


    return this.elem;
  }


  chooseSelect({target}) {

    console.log(target.value);
    this.extendedOptionsContainer.innerHTML = '';
    this.extendedOptionsArray[target.value].forEach(element => this.extendedOptionsContainer.append(element.render()));



  }

  async createCard(event) {
    console.log('create card');
    event.preventDefault();
    const noVisitSpan = document.getElementById('noVisitsSpan');
    const body = this.serializeJSON();
    const response = await postVisitCard(body);

    if (response.doctorType === "cardiologist") {
      this.cardContainer.append(new VisitCardiologist(response).render())
    } else if (response.doctorType === "dentist") {
      this.cardContainer.append(new VisitDentist(response).render())
    } else if (response.doctorType === "therapist") {
      this.cardContainer.append(new VisitTherapist(response).render())
    }
    if (noVisitSpan){
      noVisitSpan.remove();
    }
    this.closeModal();
  }
}


export {ModalCreateCard};