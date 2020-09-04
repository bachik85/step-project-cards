import Component from '../component.js';
import {authReq} from "../../configs/index.js";

class Visit extends Component{

    state = {
        moreInfo: false,
        edit: false
    };

    className = 'patient-visit';

    patientName = `<h4 class="patient-name">ФИО: ${this.props.lastName} ${this.props.firstName} ${this.props.middleName}</h4>`;

    delete = async() => {
        const {data} = await authReq.delete(`/cards/${this.props.id}`);
        if(data.status === 'Success'){
            this.elem.remove();
        }
    };

    updateVisit = async (body) => {
        const {data} = await authReq.put(`/cards/${this.props.id}`, body);
        if(data.id) {
            this.props = {...data};
            this.setState({
                edit: !this.state.edit
            });
            this.render();
        }
    };

    edit = (e) => {
        e.preventDefault();
        this.setState({
            edit: !this.state.edit
        });
    };

    showMoreClick = (e) => {
        e.preventDefault();
        this.setState({
            moreInfo: !this.state.moreInfo
          });
    };

    render() {
        const {className, patientName} = this;

        const contentHeader = this.getContentHeader();
        let patientVisit = "";
        if(this.state.edit) {
            patientVisit = this.createElement('div', {className}, contentHeader);
        }
        else {
            const patientInfo =this.getPatientInfo();
            const patientAction = this.getPatientAction();
            const contentBody = `<div class="card-body">
                                ${patientName}
                                ${patientInfo}
                                ${patientAction}
                            </div>`;

            patientVisit = this.createElement('div', {className}, contentHeader, contentBody);

            const buttonShowMore = patientVisit.querySelector('[data-type=show-more]');
            buttonShowMore.addEventListener('click', this.showMoreClick);

            const buttonDelete = patientVisit.querySelector('[data-type=delete]');
            buttonDelete.addEventListener('click', this.delete);

            const buttonEdit = patientVisit.querySelector('[data-type=edit]');
            buttonEdit.addEventListener('click', this.edit);
        }

        return patientVisit;
    }

    getContentHeader() {
        return `<div class="card-header">
                    <h4>${this.doctorType}</h4>
                </div>`;
    }

    getPatientInfo() {
        let patientInfo = "";
        if(this.state.moreInfo) {
            patientInfo = `<ul class="patient-info">
                                <li class="patient-info-item"><u>Цель визита</u>: ${this.props.purpose}.</li>
                                <li class="patient-info-item"><u>Краткое описание</u>: ${this.props.description}.</li>
                                <li class="patient-info-item"><u>Срочность визита</u>: ${this.props.urgency}.</li>
                            </ul> `;
        }
        return patientInfo;
    }

    getPatientAction() {
        const showMoreText = (this.state.moreInfo) ? "Hide" : "Show more";
        return `<a href="#" data-type="show-more" class="show-more-patient-info">${showMoreText}</a>
                <div class="action-block">
                    <button type="button" data-type="edit" class="btn btn-outline-info">
                        Edit 
                    </button>
                    <button type="button" data-type="delete" class="btn btn-outline-info btn-sm">
                        Delete 
                    </button>
                </div>`
    }

    addAdditionalInfo(patientVisit) {
        if(this.state.moreInfo) {
            const partientInfo = patientVisit.querySelector(".patient-info");
            const patientAdditionalInfo = this.getPatientAdditionalInfo();
            partientInfo.insertAdjacentHTML("beforeend", patientAdditionalInfo);
        }        
    }

}

export default Visit;