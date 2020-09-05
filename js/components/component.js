class Component {
    constructor(props) {
        
        this.props = {...props};
    }

    setState(obj) {
        Object.assign(this.state, obj);
        this.render();
    }

    reconciliation(updateElem) {
        if(this.elem) {
            this.elem.after(updateElem);
            this.elem.remove();
        }
        this.elem = updateElem;
    }

    createElement(elemName, attributes, ...content){
        const newElem = document.createElement(elemName);
        for (const [key, value] of Object.entries(attributes)){
            if (value){
                newElem[key]=value;
            }
        }

        content.forEach(item => {
            if(typeof item === "string") {
                newElem.insertAdjacentHTML("beforeend", item);
            }  
            else if(item instanceof Component) {
                const childElem = item.render();
                newElem.append(childElem);
            } else if(typeof item === "object") {
                newElem.append(item);
            }                  
        });

        return newElem
    }
}

export default Component;