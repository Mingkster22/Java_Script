const templesElement = document.querySelector("#temples");
const templeList = [];

const displayTemples = (temples) => {
  temples = temples.sort((a, b) => a.templeName.localeCompare(b.templeName));

  templesElement.innerHTML = "";

  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

const reset = () => {
  templesElement.innerHTML = "";
};

const sortBy = (temples) => {
  reset();

  const filter = document.getElementById("sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
    default:
      displayTemples(temples);
      break;
  }
};

document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

const getTemples = async () => {
  try {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );

    const templeData = await response.json();

    templeList.length = 0;
    templeList.push(...templeData);
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getTemples();
