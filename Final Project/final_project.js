// Replace with your API key, API host, and API URL
const apiKey = "54e73fa138msh2542aa84a874bf1p146aadjsnbd71ebd916b4";
const apiHost = "moviesdatabase.p.rapidapi.com";
const apiUrl = "https://moviesdatabase.p.rapidapi.com/titles/search/keyword/";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const movieResults = document.getElementById("movieResults");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    searchSeries(query);
  }
});

async function searchSeries(query) {
  try {
    const response = await fetch(`${apiUrl}${query}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": apiHost,
        "X-RapidAPI-Key": apiKey,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      displaySeries(data);
    } else {
      movieResults.innerHTML = `<p>No results found</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function displaySeries(series) {
  // Display series details as per your HTML structure
  // Update this part based on the structure you want to use

  var resultString = "";
  for (var i = 0; i < series.entries; i++) {
    var result = series.results[i];

    resultString += `<h2>${result.titleText.text}</h2>`;
    if (result.primaryImage != null) {
      resultString += `<img src = "${result.primaryImage.url}" />`;
      resultString += `<figcaption> ${result.primaryImage.caption.plainText} </figcaption>`;
    }
  }
  movieResults.innerHTML = resultString;
}
