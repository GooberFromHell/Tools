function template(strings, ...keys) {
    return (function (...values) {
        let dict = values[values.length - 1] || {};
        let result = [strings[0]];
        keys.forEach(function (key, i) {
            let value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

let redirector = template`<div class="col-6 mb-2">
<label id="label-Redirector" class="form-label" textcontent="Redirector" htmlfor="redirector-${0}">Redirector</label>
<input placeholder="Redirector" id="redirector-${0}" class="form-control form-control-sm">

<div class="form-check">
    <input id="reverse-${0}" type="checkbox" class="form-check-input">
    <label id="label-reverse-${0}" class="form-check-label" textcontent="Reverse?" htmlfor="reverse-${0}">Reverse?</label>
</div>

</div>
<div class="col-2 mb-2"><label id="label-port-${0}" class="form-label" htmlfor="port-${0}">SSH Port</label><input placeholder="Port" id="port-${0}" class="form-control form-control-sm"></div>
<div class="col-2 mb-2"><label id="label-listener-${0}" class="form-label" htmlfor="listener-${0}">Listener</label><input placeholder="Port" id="listener-${0}" class="form-control form-control-sm"></div>
<div class="col-2 pt-3"><button id="delete-row-${0}" textcontent="Remove" class="btn-shadow btn-danger mt-3 btn btn-sm" type="button">Remove</button></div>`

function createElement(type, options) {
    let element = document.createElement(type)
    if (typeof options == 'object') {
        Object.entries(options).forEach(key => {
            let [prop, value] = key
            switch (prop) {
                case "classList":
                    element.classList.add(...value.split(" "))
                    break
                case "textContent":
                    element.textContent = value
                default:
                    element.setAttribute(prop, value)
            }

        })
    }
    return element
}
function getRemotePort(count) {
    let remotePort = `port-${count}`
    if (window.data.hasOwnProperty(remotePort)) {
        return `-p ${window.data[remotePort]} `
    }
    return "-p 22 "
}

function getRemoteIP(count) {
    let redirector = `redirector-${count}`
    if (window.data.hasOwnProperty(redirector)) {
        return window.data[redirector]
    } else if (window.data.hasOwnProperty("target")) {
        return window.data["target"]
    }
    return "127.0.0.1"
}

function getLocalPort(count) {
    let listener = `listener-${count}`
    if (window.data.hasOwnProperty(listener)) {
        return `${window.data[listener]}:`
    } else if (window.data.hasOwnProperty(`source-listener`)) {
        return `${window.data[`source-listener`]}`
    }
    return "22"
}

function getPreviousPort(count) {
    let listener = `listener-${count}`
    if (window.data.hasOwnProperty(listener)) {
        return ` -p ${window.data[listener]}`
    } else if (window.data.hasOwnProperty("source-listener")) {
        return ` -p ${window.data['source-listener']}`
    }
    return "-p 22 "
}

function isReverse(count) {
    let reverse = `reverse-${count}`
    if (window.data.hasOwnProperty(reverse)) {
        return window.data[reverse] ? "-R" : "-L"
    } else if (window.data.hasOwnProperty(`target-reverse`)) {
        return window.data[`target-reverse`] ? "-R" : "-L"
    }
    return "-L "
}

function buildString() {
    document.querySelector("#result").innerHTML = ""
    let hops = document.querySelector("#form").querySelectorAll(".row").length
    let sshString = ""
    let localPort
    let redirector = "127.0.0.1"
    let remoteIP
    let remotePort
    let reverse
    let previousPort = ""
    switch (hops) {
        case 2:
            remoteIP = window.data["target"] || "127.0.0.1"
            remotePort = window.data["target-port"] || "22"
            sshString = `ssh ${remoteIP} -p ${remotePort}\n`
            break
        default:
            for (let i = 1; i <= (hops - 2); i++) {
                redirector = i >= 2 ? "127.0.0.1" : getRemoteIP(i)
                remotePort = getRemotePort(i)
                reverse = isReverse(i)
                localPort = window.data[i >= 2 ? `listener-${i - 2}`: `listener-${i - 1}` ] || "22"
                target = window.data[i == (hops - 2) ? "target" : `redirector-${i + 1}`] || "127.0.0.1"
                targetPort = window.data[i == (hops - 2) ? "target-port" : `port-${i + 1}`] || "22"
                sshString += `ssh ${redirector} ${remotePort} ${reverse} ${localPort}:${target}:${targetPort};\r\n`
            }
    }
    let code = createElement('code', {textContent: sshString})
    let result = document.querySelector("#result")
    result.appendChild(code)
    window.Prism.highlightAllUnder(result)

}

function createSwitch(switchText, options) {
    let div = createElement('div', { classList: options.classList + " form-check form-switch" });
    let input = createElement('input', { id: options.id, classList: "form-check-input", type: "checkbox" });
    let label = createElement('label', { id: ("label-" + options.id), classList: "form-check-label", textContent: switchText, htmlFor: options.id });
    div.appendChild(input);
    div.appendChild(label);

    return div
}

function createInput(labelText, options) {
    let div = createElement('div', { classList: options.classList + " mb-2" });
    let input = createElement('input', { placeholder: labelText, id: options.id, classList: "form-control form-control-sm", type: options.inputType & options.inputType });
    let label = createElement('Label', { id: ("label-" + labelText), classList: "form-label", textContent: labelText, htmlFor: labelText });
    div.appendChild(label);
    div.appendChild(input);
    if (options.formText) {
        if (typeof options.formText == "object") {
            div.appendChild(options.formText);
        } else {
            let formText = createElement('p', { text: options.formText })
            div.appendChild(formText);
        }
    }
    return div;
}

function createButton(buttonText, options) {
    let btn = createElement("button", { id: options.id, textContent: buttonText, classList: options.classList + " btn btn-shadow btn-sm", type: "button" });
    return btn;
}

function removeRow(e) {
    let index = Number(e.charAt(e.length -1))
    let child = document.querySelector(`#${e}`);

    delete window.data[`redirector-${index}`]
    delete window.data[`port-${index}`]
    delete window.data[`listener-${index}`]
    delete window.data[`reverse-${index}`]
    document.querySelector("#form").removeChild(child);
    buildString()
   
}

function switchToggled(e) {
    return e.target.value ? console.log("-R") : console.log("-L")
}

function addHop(e, source = false) {
    let form = document.querySelector("#form")
    let index = form.children.length - 2;

    let newRow = createElement("div", { classList: "row g-w", id: `row-${index}` })
    let newRedirector = redirector(index)
    newRow.innerHTML = newRedirector

    let target = document.getElementById("target");
    form.insertBefore(newRow, target)

    document.querySelector(`#delete-row-${index}`).onclick = () => removeRow(`row-${index}`)


    return;
}

function insertAt(array, index, ...elements) {
    array.splice(index, 0, ...elements);
}

function handleChange(e) {
    if (typeof e.target.checked == "boolean" || typeof e.target.value == "string") {
        switch (e.target.type) {
            case "text":
                window.data[e.target.id] = e.target.value
                break
            case "checkbox":
                window.data[e.target.id] = e.target.checked
                break
        }
        buildString()

    };
} 

function toggleDarkMode(e) {
    document.querySelectorAll('.card').forEach(i => {
        i.classList.toggle("bg-dark",  e.target.checked)
        i.classList.toggle("text-secondary",  e.target.checked)
})
}

window.onload = () => {
    window.data = {}
    let addButton = createButton("Add Hop", { id: "add-row-btn", classList: "btn-primary" });
    addButton.onclick = addHop;
    document.body.querySelector("#form").appendChild(addButton);
    document.body.querySelector('#form').onchange = handleChange
};
