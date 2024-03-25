const API_KEY = "3fc2a8574e4cea25dc6318fa55f22c09";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  });
} else {
  // console.log("Geolocation is not supported by this browser.");
}

async function checkWeather(city = "Qarshi") {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
  const data = await response.json();
  document.querySelector(".city").innerHTML = data.name ?? "City not found !";
  document.querySelector(".temp").innerHTML = data.main?.temp
    ? data.main?.temp + " °C"
    : "---";
  document.querySelector(".wind").innerHTML = data.wind?.speed
    ? data.wind?.speed + " km/h"
    : "---";
  document.querySelector(".humidity").innerHTML = data.main?.humidity
    ? data.main?.humidity + "%"
    : "---";

  if (data.weather[0].main === "Cloud") {
    weatherIcon.src = "./images/clouds.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "./images/rain.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "./images/clear.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "./images/mist.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "./images/snow.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "./images/drizzle.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  }

  searchInput.value = "";
}

searchBox.addEventListener("submit", (e) => {
  e.preventDefault();
  checkWeather(searchInput.value);
});

checkWeather();
// searchBtn.addEventListener("click", () => {
//   checkWeather(searchInput.value);
// });
