import Component from "../../component.js";

class Textarea extends Component {
    
    render(){
        const {labelText, text, ...textareaProps} = this.props;

        let label = "";
        if(labelText) {
            const labelFor = textareaProps.id || "";
            label = this.createElement("label", {for: labelFor}, labelText);
        }

        textareaProps.className = `form-control ${textareaProps.className || ""}`;

        const textarea = this.createElement("textarea", textareaProps, text);
        this.textarea = textarea;

        const textareaContainer = this.createElement("div", {className: "form-group"}, label, textarea);
        this.elem = textareaContainer;

        return this.elem;

    }
}

export default Textarea;