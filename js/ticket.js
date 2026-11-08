// Jasmin Nelson
// Student ID: 2303868
// Web Programming Individual Assignment 2
// Javascript for the ticket page of Registration Website


// To get the registration information saved in the browser
const savedDetails = localStorage.getItem("codingConfRegistration");


// To check whether registration information exists
if (savedDetails === null) {


// To return the user to the homepage if no details exist
window.location.href = "index.html";

} else {


// To convert the saved text back into an object
const registration = JSON.parse(savedDetails);


// To display the visitor's name
document.getElementById("congratsMessage").textContent = "Congrats, " + registration.name + "! Your ticket is ready."; document.getElementById("ticketName").textContent = registration.name;


// To display the uploaded profile picture
document.getElementById("ticketAvatar").src = registration.avatar;


// To display the GitHub username
document.getElementById("ticketGithub").textContent = registration.github;


// To create a link to the user's GitHub profile
document.getElementById("ticketGithub").href = "https://github.com/" + registration.github.substring(1);


// To display the generated ticket number
document.getElementById("ticketNumber").textContent = registration.ticketNumber;}