const template = document.createElement("template");
template.innerHTML = `
<style> 
    :host { 
        display: block; 
    } 
    
    .invalid-field { 
        border: 1px solid red; 
    } 

    .invalid-field:focus { 
        outline-color: #5171A5; 
    } 

    .form-field { 
        display: table; 
    } 

    // label, 
    // input { 
    //     display: table-cell; 
    // } 

    //  label { 
    //      padding-right: 10px; 
    //  } 

    .error { 
        display: block; 
        
        position: absolute;
        left: 78%;
        top: 5%;

        font-size: 12px;

        color: red;
    } 

    .hidden { 
        display: none; 
    } 

    .text_field {
        position: absolute;
        left: 1.31%;
        right: 86.55%;
        top: 0%;
        bottom: 66.67%;
    
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
    
        color: #5171A5;
    }

    .box_field {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 36.11%;
        bottom: 0%;

        padding: 22px;
        line-height: 100%;
        font-size: 18px;

        background: #FFFFFF;
        border: 1px solid rgba(0, 53, 84, 0.25);
        border-radius: 15px;
    }
</style> 

<div class="form-field"> 
        <label class="text_field"></label> 
        <input class="box_field"/> 
        <slot></slot> 
        <span class="error hidden"></span> 
</div>`;

class FormField extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$label = this.shadowRoot.querySelector("label");
        this.$input = this.shadowRoot.querySelector("input");
        this.$error = this.shadowRoot.querySelector(".error");
    }

    static get observedAttributes() {
        return ["value", "label", "type", "error-message", "invalid"];
    }

    connectedCallback() {
        if (this.$input.isConnected) {
            this.$input.addEventListener("blur", event => {
                if (!event.target.value && this.hasAttribute("required")) {
                    this.invalid = true;
                    this.$error.innerText = error - message;
                } else {
                    this.invalid = false;
                    this.value = event.target.value;
                }
            });
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "label":
                this.$label.innerText = `${newValue}`;
                break;
            case "type":
                this.$input.type = newValue;
                break;
            case "error-message":
                this.$error.innerText = newValue;
                break;
            case "invalid":
                this._handleInvalidState(newValue);
                break;
            default:
                break;
        }
    }

    get invalid() {
        return this.hasAttribute("invalid");
    }

    set invalid(value) {
        if (!!value) {
            this.setAttribute("invalid", "");
        } else {
            this.removeAttribute("invalid");
        }
    }

    get value() {
        return this.getAttribute("value");
    }

    set value(newValue) {
        this.setAttribute("value", newValue);
    }

    _handleInvalidState(value) {
        if (value !== null) {
            this.$error.classList.remove("hidden");
            this.$input.classList.add("invalid-field");
        } else {
            this.$error.classList.add("hidden");
            this.$input.classList.remove("invalid-field");
        }
    }
}

window.customElements.define("db-form-field", FormField);
