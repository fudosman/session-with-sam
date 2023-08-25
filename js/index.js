const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

const submitFucntion = (e) => {

  e.preventDefault();

};

form.addEventListener("submit", submitFucntion);