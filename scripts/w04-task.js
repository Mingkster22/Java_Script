/* LESSON 3 - Programming Tasks */

/* Profile Object  */

/* Populate Profile Object with placesLive objects */

/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */

/* Favorite Foods List*/

/* Hobbies List */

/* Places Lived DataList */

let myProfile = {};

myProfile.name = "Minkee Yoon";
myProfile.photo = "images/picture.png";
myProfile.favoriteFoods = ["Steak", "Bread", "Chicken"];
myProfile.hobbies = ["Programming", "Gym", "Eat"];

myProfile.placesLived = [];

myProfile.placesLived.push({ place: "Utah - USA", length: "1 Year" });
myProfile.placesLived.push({ place: "Idaho - USA", length: "3 Years" });
myProfile.placesLived.push({ place: "Georgia - USA", length: "1 Year" });

document.getElementById("name").textContent = myProfile.name;
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

myProfile.favoriteFoods.forEach((food) => {
  const li = document.createElement("li");
  li.textContent = food;
  document.getElementById("favorite-foods").appendChild(li);
});

myProfile.hobbies.forEach((hobby) => {
  const li = document.createElement("li");
  li.textContent = hobby;
  document.getElementById("hobbies").appendChild(li);
});

myProfile.placesLived.forEach((place) => {
  const dt = document.createElement("dt");
  dt.textContent = place.place;
  const dd = document.createElement("dd");
  dd.textContent = place.length;
  const dl = document.getElementById("places-lived");
  dl.appendChild(dt);
  dl.appendChild(dd);
});
