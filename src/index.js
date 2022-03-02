import "./styles/main.css";
import * as apiUltis from "./utils";

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const countryEl = document.getElementById("country");
const name = document.getElementById("name");
const weatherForecastEl = document.getElementById("weather-forecast");

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
    " " +
    `<span id="am-pm">${ampm}</span>`;

  dateEl.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);

async function algo() {
  let coords = await apiUltis.getCoord("Guayaquil");
  let weather = await apiUltis.getWeather(coords);
  weather.name = coords[2];
  showWeather(weather);
}

function showWeather(weather) {
  let { humidity, pressure, sunrise, sunset, wind_speed } = weather.current;
  name.innerHTML = weather.name;
  countryEl.innerText = `${weather.lat}N  /${weather.lon} E`;
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
  </div>
  <div class="weather-item">
      <div>Sunrise</div>
      <div>${window.moment(sunrise * 1000).format("HH:mm a")}</div>
  </div>
  <div class="weather-item">
      <div>Sunset</div>
      <div>${window.moment(sunset * 1000).format("HH:mm a")}</div>
  </div>`;
  showWeatherForecast(weather);
}

function showWeatherForecast(data) {
  let otherDayForcast = "";
  data.daily.forEach((day, idx) => {
    if (idx == 0) {
      otherDayForcast += `  
        <div class="weather-forecast-item weather-today ">
          <div class="day">${window.moment(day.dt * 1000).format("ddd")}</div>
          <img src="http://openweathermap.org/img/wn/${
            day.weather[0].icon
          }@2x.png" alt="weather icon" class="w-icon">
          <div class="temp">Night - ${day.temp.night}&#176;C</div>
          <div class="temp">Day - ${day.temp.day}&#176;C</div>
        </div>`;
    } else {
      otherDayForcast += `
          <div class="weather-forecast-item">
              <div class="day">${window
                .moment(day.dt * 1000)
                .format("ddd")}</div>
              <img src="http://openweathermap.org/img/wn/${
                day.weather[0].icon
              }@2x.png" alt="weather icon" class="w-icon">
              <div class="temp">Night - ${day.temp.night}&#176;C</div>
              <div class="temp">Day - ${day.temp.day}&#176;C</div>
          </div>`;
    }
  });

  weatherForecastEl.innerHTML = otherDayForcast;
}

algo();
