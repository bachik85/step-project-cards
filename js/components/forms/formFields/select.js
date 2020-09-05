import Component from "../../component.js";

class Select extends Component {

    render() {

        const {labelText, options, ...selectProps} = this.props;

        let label = "";
        if(labelText) {
            const labelFor = selectProps.id || "";
            label = this.createElement("label", {for: labelFor}, labelText);
        }

        selectProps.className = `form-control ${selectProps.className || ""}`;
        const selectOptions = options.map(({value, text}) => `<option value=${value}>${text}</option>`).join("");

        const select = this.createElement("select", selectProps, selectOptions);
        this.select = select;


        const selectContainer = this.createElement("div", {className: "form-group"}, label, select);
        this.elem = selectContainer;

        return this.elem;
    }
}

export default Select;