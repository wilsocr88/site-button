customElements.define(
    "site-button",
    class SiteButton extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: "open" });

            const wrapper = this.addElem("span");
            wrapper.setAttribute("class", "button-88x31");

            if (this.hasAttribute("img")) {
                const img = wrapper.appendChild(this.addElem("img"));
                img.src = this.getAttribute("img");
                img.setAttribute("class", "button-88x31-img");
            } else if (this.hasAttribute("background")) {
                wrapper.style.backgroundColor = this.getAttribute("background");
            } else {
                wrapper.style.borderStyle = "solid";
                wrapper.style.borderWidth = "2px";
                wrapper.style.backgroundColor = "#ccc";
                wrapper.style.borderColor = "white black black white";
            }

            if (this.hasAttribute("icon")) {
                const icon = wrapper.appendChild(this.addElem("img"));
                icon.setAttribute("class", "button-88x31-icon");
                icon.src = this.getAttribute("icon");
            }

            if (this.hasAttribute("text")) {
                const textWrapper = wrapper.appendChild(this.addElem("div"));
                textWrapper.setAttribute("class", "button-88x31-text-wrapper");
                const text = textWrapper.appendChild(this.addElem("div"));
                text.setAttribute("class", "button-88x31-text");
                text.textContent = this.getAttribute("text");
                if (this.hasAttribute("textColor")) {
                    text.style.color = this.getAttribute("textColor");
                }
            }

            const style = this.addElem("style");
            style.textContent = `.button-88x31 {
                position: relative;
                display: block;
                height: 29px;
                width: 84px;
            }
            .button-88x31-img {
                height: 31px;
                width: 88px;
            }
            .button-88x31-icon {
                max-height: 100%;
                max-width: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 4px;
                margin: auto;
            }
            .button-88x31-text-wrapper {
                position: relative;
                display: inline-block;
                vertical-align: middle;
                height: 31px;
                width: 86px;
            }
            .button-88x31-text {
                display: flex;
                max-height: 100%;
                max-width: 100%;
                width: 52px;
                height: auto;
                position: absolute;
                bottom: 0;
                top: 0;
                left: auto;
                margin-left: 30px;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 9px;
                align-items: center;
                color: black;`;
            if (this.hasAttribute("font")) {
                style.textContent +=
                    "font-family: " + this.getAttribute("font") + ";";
            } else {
                style.textContent += "font-family: sans-serif;";
            }
            style.textContent += "}";
            shadow.append(style, wrapper);
        }

        addElem(tag) {
            return document.createElement(tag);
        }
    }
);
