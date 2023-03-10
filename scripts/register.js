// Below is the code for the class 2 assignment for the salon object literal and the pet constructor.
let salon = {
  name: "Clip & Clean",
  phone: 727 - 545 - 1390,
  address: {
    street: "Clean Pets Ave",
    number: "Bldg 2 Suite 10",
    zip: "90123",
    state: "FL",
    city: "Pinellas",
  },
  hours: {
    open: "8:00 am",
    close: "8:00 pm",
  },
  pets: [],
};
// console.log(salon);
// below is code for the final assignment for class 4 to delete the pets from the table using the counter.
let c = 1;

function pet(name, age, gender, payment, breed, service, owner, phone, Id) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.payment = payment;
  this.breed = breed;
  this.service = service;
  this.ownerName = owner;
  this.contactPhone = phone;
  this.id = c++;
}
// Below is the code for the class 1 assignment for the 3 pets being created using object literals.
let scooby = new pet(
  "Scooby",
  50,
  "Male",
  "Cash",
  "Dane",
  "Full Service",
  "Shaggy",
  "555-555-5555"
);
let scrappy = new pet(
  "Scrappy",
  40,
  "Female",
  "Debit",
  "Dane",
  "Full Service",
  "Shaggy",
  "555-555-5555"
);
let finrir = new pet(
  "Finrir",
  4,
  "Male",
  "Credit",
  "Blue Healer",
  "Fulll Service",
  "John",
  "555-555-5555"
);

// Below is the code for the class 2 assignment for the register/constructor/clear form functions.
let inputName = document.getElementById("txt-name");
let inputAge = document.getElementById("txt-age");
let inputGender = document.getElementById("sel-gender");
let inputPayment = document.getElementById("txt-payment");
let inputBreed = document.getElementById("txt-breed");
let inputService = document.getElementById("sel-service");
let inputOwner = document.getElementById("txt-owner");
let inputPhone = document.getElementById("txt-phone");
// Below is the code for class 3 to mark the inputs as true or false.
function isValid(aPet) {
  let valid = true;
  inputName.classList.remove("error");
  inputAge.classList.remove("error");
  inputBreed.classList.remove("error");
  inputService.classList.remove("error");
  inputPhone.classList.remove("error");
  if (aPet.name == "") {
    valid = false;
    inputName.classList.add("error");
  }
  if (aPet.age == "") {
    valid = false;
    inputAge.classList.add("error");
  }
  if (aPet.breed == "") {
    valid = false;
    inputBreed.classList.add("error");
  }
  if (aPet.service == `No Service`) {
    valid = false;
    inputService.classList.add("error");
  }
  if (aPet.contactPhone == "") {
    valid = false;
    inputPhone.classList.add("error");
  }
  return valid;
}

function register() {
  // console.log(
  //   inputName.value,
  //   inputAge.value,
  //   inputGender.value,
  //   inputBreed.value,
  //   inputService.value,
  //   inputOwner.value,
  //   inputPhone.value
  // );

  let newPet = new pet(
    inputName.value,
    inputAge.value,
    inputGender.value,
    inputPayment.value,
    inputBreed.value,
    inputService.value,
    inputOwner.value,
    inputPhone.value
  );
  // console.log(newPet);
  if (isValid(newPet)) {
    salon.pets.push(newPet);
    clearform();
    alertPet();
    displayCards();
  } else {
    alert(
      "Please fill out all required fields and select a chargable service."
    );
  }
}

function clearform() {
  inputName.value = "";
  inputAge.value = "";
  inputGender.value = "Male";
  inputPayment.value = "";
  inputBreed.value = "";
  inputService.value = "No Service";
  inputOwner.value = "";
  inputPhone.value = "";
}

// below is the code for the class 4 assignment for the delete function.
function deletePet(aPetId) {
  let indexDelete = salon.pets.findIndex((pet) => pet.id == aPetId);
  salon.pets.splice(indexDelete, 1);
  alertPet();
  displayCards();
}
// Below is the code for the class 1 assignment for the 3 pets names being displayed in the console.
function alertPet() {
  for (let i = 0; i < salon.pets.length; i++) {
    console.log(salon.pets[i].name);
  }
  if (salon.pets.length == 0) {
    alert(`There are currently no pets registered!`);
  } else {
    if (salon.pets.length == 1) {
      alert(`There is currently ${salon.pets.length} pet registered!`);
    } else {
      alert(`There are currently ${salon.pets.length} pets registered!`);
    }
  }
}
function displaySalonInfo() {
  let DISPLAY = document.getElementById("footer-display");
  let tmp = `
   <div class="footer-background">
   <div class="footer-conatiner">
    <h1 class="footer-salon-name text-center text-text-1">${salon.name}</h1>
    <div class="text-center footer-text">
    <h5 class="text-text-1">Located at:</h5>
    <p class="text-text-1">${salon.address.street}, ${salon.address.number}</p>
    <p class="text-text-1">${salon.address.city}, ${salon.address.state} ${salon.address.zip}</p></div>
    </div></div>`;
  DISPLAY.innerHTML = tmp;
}
function init() {
  salon.pets.push(scooby, scrappy, finrir);
  displaySalonInfo();
  showServices();
  alertPet();
  displayCards();
}
window.onload = init;
