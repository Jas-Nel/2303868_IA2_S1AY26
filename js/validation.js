// Jasmin Nelson
// Student ID: 2303868
// Web Programming Individual Assignment 2
// Javascript for the Validation of Registration Form


// To find the registration form and its fields
const form = document.getElementById("registrationForm");

const fullName = document.getElementById("fullName"); const email = document.getElementById("email"); const github = document.getElementById("github"); const avatar = document.getElementById("avatar");


// To find the areas where error messages will appear
const nameError = document.getElementById("nameError"); const emailError = document.getElementById("emailError"); const githubError = document.getElementById("githubError"); const avatarError = document.getElementById("avatarError");


// To check the form when the visitor clicks the submit button
form.addEventListener("submit", function(event) {


// To stop the page from refreshing
event.preventDefault();


// To remove old error messages
nameError.textContent = ""; emailError.textContent = ""; githubError.textContent = ""; avatarError.textContent = "";

let isValid = true;


// To check the full name
if (fullName.value.trim() === "") {nameError.textContent = "Please enter your full name."; isValid = false;}



// To check the email address
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email.value.trim())) {emailError.textContent = "Please enter a valid email address."; isValid = false;}



// To check the GitHub username
const githubPattern = /^@[a-zA-Z0-9-]{1,39}$/;

if (!githubPattern.test(github.value.trim())) {githubError.textContent = "Enter a GitHub username starting with @."; isValid = false;}



// To check whether an image was uploaded
if (avatar.files.length === 0) {avatarError.textContent = "Please select a profile picture."; isValid = false;

} else {

const selectedFile = avatar.files[0];



// To only allow JPG and PNG images
const allowedTypes = ["image/jpeg", "image/png"];

if (!allowedTypes.includes(selectedFile.type)) {avatarError.textContent = "Please upload a JPG or PNG image."; isValid = false;}


// To ensure the image is smaller than 500KB
if (selectedFile.size >= 500 * 1024) {avatarError.textContent = "Your image must be smaller than 500KB."; isValid = false;}}


// To save the information if all fields are correct
if (isValid) {const selectedFile = avatar.files[0]; const reader = new FileReader();


// To read the selected image
reader.onload = function() {


// To create an object containing the registration details
const registrationDetails = {name: fullName.value.trim(), email: email.value.trim(), github: github.value.trim(), avatar: reader.result, ticketNumber: "#" + Math.floor(10000 + Math.random() * 90000)};


// To save the information in the browser
localStorage.setItem("codingConfRegistration", JSON.stringify(registrationDetails));


// To open the ticket page
window.location.href = "ticket.html";};


// To show an error if the image cannot be read
reader.onerror = function() {avatarError.textContent = "There was a problem reading your image. Please try again.";};


// To start reading the image
reader.readAsDataURL(selectedFile);}

});