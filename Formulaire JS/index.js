//Methode 1
let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
function validator(event) {
    event.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name === "name" && inputs[i].value.length < 3) {
            inputs[i].style.border = "1px solid red";
            let errorMessage = document.createElement("p");
            errorMessage.innerHTML = "Le nom doit contenir au moins 3 caractères";
            errorMessage.style.color = "red";
            inputs[i].parentElement.appendChild(errorMessage);
            button.disabled = true;
        }
        if (inputs[i].name === "email" &&
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[i].value)) {
            inputs[i].style.border = "1px solid red";
            let errorMessage = document.createElement("p");
            errorMessage.innerHTML = "L'adresse email n'est pas valide";
            errorMessage.style.color = "red";
            inputs[i].parentElement.appendChild(errorMessage);
            button.disabled = true;
        }
    }
}

// Methode 2

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", validate);
}

function validate(event) {
  console.log(event.target.value);
  if (event.target.name === "name" && event.target.value.length < 3) {
    errorHandler(event, "Le nom doit contenir au moins 3 caractères");
  }
  if (
    event.target.name === "email" &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
  ) {
    errorHandler(event, "L'adresse email n'est pas valide");
  }
}

function errorHandler(event, message) {
  event.preventDefault();
  let errorMessage = document.createElement("p");
  errorMessage.innerHTML = message;
  errorMessage.style.color = "red";
  event.target.parentElement.appendChild(errorMessage);
  button.disabled = true;
}
//Methode 3


