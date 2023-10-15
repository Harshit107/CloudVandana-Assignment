const form = document.querySelector("form");
const datePicker = document.getElementById("datePicker");
const displayDate = document.getElementById("displayDate");
const countryDropdown = document.getElementById("country");
const countryContainer = document.getElementById("country-container");
const resetBtn = document.getElementById("reset");
const submitBtn = document.getElementById("submit");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const profession = document.getElementById("profession");

const confirmationContainer = document.getElementById("data-container");
const close = document.getElementById("close");
const nameData = document.getElementById("name-data");
const emailData = document.getElementById("email-data");
const phoneData = document.getElementById("phone-data");
const professionData = document.getElementById("profession-data");
const countryData = document.getElementById("country-data");
const dobData = document.getElementById("dob-data");
const genderData = document.getElementById("gender-data");

let genderSelected = "Male";
let countrySelected = "";

const genderRadios = document.querySelectorAll(
  '.form-check-input[name="select1"]'
);
resetFormValues();

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validate()) {
    setAllValue();
    confirmationContainer.style.visibility = "visible";
  }
});

function validate() {
  if (countrySelected === "") {
    if (!countryContainer.classList.contains("error"))
      countryContainer.classList.add("error");
    return false;
  }
  if (!datePicker.value) {
    if (!datePicker.classList.contains("error"))
      datePicker.classList.add("error");
    datePicker.focus();
    return false;
  }
  return true;
}

// Handle form reset
resetBtn.addEventListener("click", () => {
  resetFormValues();
});

datePicker.addEventListener("change", (event) => {
  if (datePicker.classList.contains("error"));
  datePicker.classList.remove("error");
});

genderRadios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    genderSelected = event.target.value;
  });
});

// Handle country selection
countryDropdown.addEventListener("change", (event) => {
  countrySelected = event.target.value;
   if (!countryContainer.classList.contains("error"))
     countryContainer.classList.remove("error");
});

function resetFormValues() {
  confirmationContainer.style.visibility = "hidden";
  const formInputs = form.querySelectorAll("input");
  formInputs.forEach((input) => {
    if (input.type !== "radio") {
      input.value = "";
    } else {
      genderRadios[0].checked = true;
      genderSelected = "Male";
    }
    displayDate.textContent = "";
    countrySelected = "";
    countryDropdown.selectedIndex = 0;
  });
}

/* -------------------------------------------------------------------------- */
/*                       --------------  Confirmation  ---------      
/* -------------------------------------------------------------------------- */

function setAllValue() {
  nameData.textContent = firstName.value + lastName.value;
  emailData.textContent = email.value;
  phoneData.textContent = phone.value;
  countryData.textContent = countrySelected;
  genderData.textContent = genderSelected;
  professionData.textContent = profession.value;
  dobData.textContent = datePicker.value;
}

close.addEventListener("click", () => {
  confirmationContainer.style.visibility = "hidden";
  resetFormValues();
});
