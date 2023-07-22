


window.onload = function () {
    setTimeout(function () {
        document.body.style.height = "100vh";
        document.body.style.overflowY = "visible";
        document.querySelector(".loading-pa").style.display = "none";
    }, 3000);
};

let options = document.getElementById("options");
let optionList = ['samsung a21s', 'redmi note 11', 'water sensor'];

let button = document.getElementById("button");

let isOpen = false;

button.addEventListener("click", getMessage);
options.addEventListener("click", addToUIOptions);

function getMessage() {
    let message = document.createElement("div");
    message.className = "message";

    if (options.firstElementChild.classList.contains("hide-option")) {
        message.classList.add("danger");
        message.textContent = "Failed To Connect";

        document.body.appendChild(message);

        deleteMessage(message);
    }
    else {
        message.classList.add("success");
        message.textContent = "Thanks for Connecting";

        document.body.appendChild(message);

        deleteMessage(message);
    }

}

function deleteMessage(el) {
    setTimeout(() => {
        document.body.removeChild(el);
    }, 6000);
}

function addToUIOptions(e) {
    if (e.target.classList.contains("hide-option")) {
        controlOptions(e);
    }
    else {
        const pickedOption = e.target;

        if (options.firstElementChild.classList.contains("hide-option")) {
            options.removeChild(options.firstElementChild);
        }
        options.insertAdjacentElement("afterbegin", pickedOption);

        deleteOptions();
        controlOptions(e);
    }
}

function controlOptions(e) {
    if (isOpen === false) {
        createOptions();
        options.classList.add("opened");
        isOpen = true;
    }
    else {
        deleteOptions();
        options.classList.remove("opened");
        isOpen = false;
    }
}

function deleteOptions() {
    while (options.childElementCount > 1) {
        options.removeChild(options.lastElementChild);
    }
}

function createOptions() {
    optionList.forEach(element => {
        if (options.firstElementChild.textContent !== element) {
            let option = document.createElement("div");
            option.className = "option";
            option.textContent = element;

            options.firstElementChild.insertAdjacentElement("afterend", option);
        }
    });
};

