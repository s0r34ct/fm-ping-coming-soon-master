const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.querySelector(".register-form");
const emailError = document.querySelector(".email-error");
const emailInput = document.querySelector("#email-input");

const eventHandler = (event) => {
    event.preventDefault();
    if (!emailRegex.test(event.target[0].value)) {
        emailError.classList.add("visible");
        emailInput.classList.add("invalid");
    } else {
        emailError.classList.remove("visible");
        emailInput.classList.remove("invalid");
    }
};

form.addEventListener("submit", eventHandler);
