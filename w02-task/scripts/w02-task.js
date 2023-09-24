/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Minkee Yoon";
const currentYear = "2023";
const profilePicture =
  "C:Usersymg26PicturesCodeCSE 121Bw02-taskimagesIMG_2668.PNG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById(fullName);
const foodElement = document.getElementById("food");
const yearElement = document.querySelector(currentYear);
const imageElement = document.getElementById(profilePicture);

/* Step 4 - Adding Content */
nameElement.innerHTML = <strong>${fullName}</strong>;
currentYear = new Date().getFullYear();
yearElement = document.getElementById("year");
yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", profilePicture);

/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Hamburgers", "Fries", "Fruits", "Tacos"];
foodElement.textContent = favoriteFoods.join(", ");
const newFavoriteFood = "Sushi";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += <br>${favoriteFoods}</br>;
favoriteFoods.shift();
foodElement.textContent = favoriteFoods.join(", ");
favoriteFoods.pop();
foodElement.textContent += "\n" + favoriteFoods.join(", ");
