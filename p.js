const apiUrl = "https://formcarry.com/s/hwBv_HOfwFJ";


function pushModalToHistory() {
    window.history.pushState({modalOpen: true}, "", "#modal");
}


function goBackInHistory() {
    window.history.back();
}


function displayModalWindow() {
    let modalInstance = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
    );

    if (window.location.hash.match(/^#modal$/)) {
        modalInstance.show();
    } else {
        modalInstance.hide();
    }
}


function handleFormSubmission(event) {
    event.preventDefault();
    if (!document.querySelector("form").reportValidity()) {
        return;
    }

    let xhrRequest = new XMLHttpRequest();
    xhrRequest.open("POST", apiUrl);
    xhrRequest.setRequestHeader("Content-Type", "application/json");
    xhrRequest.setRequestHeader("Accept", "application/json");

    let formData = {};
    let inputFields = document.querySelectorAll(".form-control:not(.form-label)");
    inputFields.forEach(function (input) {
        formData[input.name] = input.value;
    });

    xhrRequest.send(JSON.stringify(formData));
    xhrRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            let responseMessage = document.querySelector(".response");
            if (this.status === 200) {
                responseMessage.innerHTML = "Successful";
                inputFields.forEach(function (input) {
                    input.value = "";
                });
                window.localStorage.clear();
            } else {
                responseMessage.innerHTML = "Something was wrong...";
            }
            goBackInHistory();
        }
    };
}


function storeFormInput(event) {
    window.localStorage.setItem(event.target.name, event.target.value);
}


window.addEventListener("DOMContentLoaded", function () {
    new bootstrap.Modal(document.getElementById("exampleModal"));
    displayModalWindow();

    document.getElementById("buttonModal")
        .addEventListener("click", pushModalToHistory);
    document.getElementById("buttonClose")
        .addEventListener("click", goBackInHistory);

    window.addEventListener("popstate", displayModalWindow);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && window.location.hash.match(/^#modal$/)) {
            goBackInHistory();
        }
    });

    document.querySelector("form").addEventListener("change", storeFormInput);

    Object.keys(window.localStorage).forEach(function (name) {
        document.querySelector(`[name=${name}]`).value = window
            .localStorage.getItem(name);
    });

    document.querySelector("form").addEventListener("submit", handleFormSubmission);
});
