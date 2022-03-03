import "./styles/main.css";
import * as apiUltis from "./utils";

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const countryEl = document.getElementById("country");
const name = document.getElementById("name");
const typeWeatherEl = document.getElementById("type-weather");
const tempEl = document.getElementById("temp");
const weatherForecastEl = document.getElementById("weather-forecast");
// search button
const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box input");
const iconEl = document.querySelector(".search-btn i");
searchBtn.addEventListener("click", searchEvent);

cancelBtn.addEventListener("click", cancelSearchEvent);

function searchEvent(e) {
  if (!Array.from(e.target.classList).includes("active")) {
    searchBox.classList.add("active");
    iconEl.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
  }
  if (searchInput.value !== "") {
    searchCityWeather(searchInput.value);
  }
}

function cancelSearchEvent(e) {
  searchBox.classList.remove("active");
  iconEl.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML =
    (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    "" +
    `<span id="am-pm">${ampm}</span>`;

  dateEl.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);

async function searchCityWeather(city) {
  let coords = await apiUltis.getCoord(city);
  let weatherApi = await apiUltis.getWeather(coords);
  let background = `url(${apiUltis.getTypeWeather(weatherApi.daily[0]).image})`;

  document.getElementsByTagName("body")[0].style.background = background;
  weatherApi.name = coords[2];
  showWeather(weatherApi);
}

function showWeather(weather) {
  let { humidity, pressure, wind_speed, temp } = weather.current;
  name.innerHTML = weather.name;
  countryEl.innerText = `${weather.lat}N  /${weather.lon} E`;
  showTypeWeather(weather);
  tempEl.innerHTML = `<h2>${temp}&#176;C</h2>`;
  currentWeatherItemsEl.innerHTML = `
  <div class="weather-item">
      <div>Humidity</div>
      <div>${humidity}%</div>
  </div>
  <div class="weather-item">
      <div>Pressure</div>
      <div>${pressure}</div>
  </div>
  <div class="weather-item">
      <div>Wind Speed</div>
      <div>${wind_speed}</div>
  </div>`;
  showWeatherForecast(weather);
}

function showTypeWeather(data) {
  typeWeatherEl.innerHTML = ` 
    <h2>${data.current.weather[0].main}</h2>
    ${apiUltis.getTypeWeather(data.daily[0]).icon}
  `;
}

function showWeatherForecast(data) {
  let otherDayForcast = "";
  data.daily.forEach((day, idx) => {
    if (idx == 0) {
      otherDayForcast += `  
        <div class="weather-forecast-item weather-today ">
          <div class="day">${window.moment(day.dt * 1000).format("ddd")}</div>
          ${apiUltis.getTypeWeather(day).icon}
          <div class="temp">Night : ${day.temp.night}&#176;C</div>
          <div class="temp">Day : ${day.temp.day}&#176;C</div>
        </div>`;
    } else {
      otherDayForcast += `
          <div class="weather-forecast-item">
              <div class="day">${window
                .moment(day.dt * 1000)
                .format("dddd")}</div>
                ${apiUltis.getTypeWeather(day).icon}
              <div class="temp">Night : ${day.temp.night}&#176;C</div>
              <div class="temp">Day : ${day.temp.day}&#176;C</div>
          </div>`;
    }
  });

  weatherForecastEl.innerHTML = otherDayForcast;
}

searchCityWeather("Guayaquil");
