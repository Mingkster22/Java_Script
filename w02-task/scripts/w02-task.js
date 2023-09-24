/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Minkee Yoon";
let currentYear = new Date().getFullYear();
const profilePicture = "images/picture.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);

const altText = "Profile image of Minkee Yoon";
imageElement.setAttribute("alt", altText);

/* Step 5 - Array */
let favoriteFoods = ["Pizza", "Hamburgers", "Fries", "Fruits", "Tacos"];
foodElement.innerHTML = `${favoriteFoods}`;
favoriteFoods.push("sushi");
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
