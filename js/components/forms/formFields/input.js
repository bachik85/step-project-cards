import Component from "../../component.js";

class Input extends Component {

    render(){
        const {labelText, ...inputProps} = this.props;
        
        let label = "";
        if(labelText) {
            const labelFor = inputProps.id || "";
            label = this.createElement("label", {for: labelFor}, labelText);
        }

        const basicClass = (inputProps.type !== "submit") ? "form-control" : "btn btn-primary";
        inputProps.className = `${basicClass} ${inputProps.className || ""}`;
        const input = this.createElement("input", inputProps);
        this.input = input;

        const inputContainer = this.createElement("div", {className: "form-group"}, label, input);
        this.elem = inputContainer;

        return this.elem;
    }
}

export default Input;