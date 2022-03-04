/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://WeatherApp/./src/styles/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nlet isFarenheit = false;\r\nlet place = \"Guayaquil\";\r\n\r\nconst timeEl = document.getElementById(\"time\");\r\nconst dateEl = document.getElementById(\"date\");\r\nconst currentWeatherItemsEl = document.getElementById(\"current-weather-items\");\r\nconst countryEl = document.getElementById(\"country\");\r\nconst name = document.getElementById(\"name\");\r\nconst typeWeatherEl = document.getElementById(\"type-weather\");\r\nconst tempEl = document.getElementById(\"temp\");\r\nconst weatherForecastEl = document.getElementById(\"weather-forecast\");\r\n// search button\r\nconst searchBtn = document.querySelector(\".search-btn\");\r\nconst cancelBtn = document.querySelector(\".cancel-btn\");\r\nconst searchBox = document.querySelector(\".search-box\");\r\nconst searchInput = document.querySelector(\".search-box input\");\r\nconst iconEl = document.querySelector(\".search-btn i\");\r\nconst checkboxConvertEl = document.getElementById(\"checkbox-Convert\");\r\n\r\nsearchBtn.addEventListener(\"click\", searchEvent);\r\n\r\ncancelBtn.addEventListener(\"click\", cancelSearchEvent);\r\n\r\ncheckboxConvertEl.addEventListener(\"change\", () => {\r\n  let letter = window.getComputedStyle(\r\n    document.querySelector(\".slider\", \"::before\")\r\n  );\r\n  console.log(letter);\r\n\r\n  if (checkboxConvertEl.checked) {\r\n    isFarenheit = true;\r\n    searchCityWeather(place);\r\n  } else {\r\n    isFarenheit = false;\r\n    searchCityWeather(place);\r\n  }\r\n});\r\n\r\nfunction searchEvent(e) {\r\n  if (!Array.from(e.target.classList).includes(\"active\")) {\r\n    searchBox.classList.add(\"active\");\r\n    iconEl.classList.add(\"active\");\r\n    searchInput.classList.add(\"active\");\r\n    searchBtn.classList.add(\"active\");\r\n    cancelBtn.classList.add(\"active\");\r\n  }\r\n  if (searchInput.value !== \"\") {\r\n    place = searchInput.value;\r\n    searchCityWeather(place);\r\n  }\r\n}\r\n\r\nfunction cancelSearchEvent(e) {\r\n  searchBox.classList.remove(\"active\");\r\n  iconEl.classList.remove(\"active\");\r\n  searchInput.classList.remove(\"active\");\r\n  searchBtn.classList.remove(\"active\");\r\n  cancelBtn.classList.remove(\"active\");\r\n}\r\n\r\nconst days = [\r\n  \"Sunday\",\r\n  \"Monday\",\r\n  \"Tuesday\",\r\n  \"Wednesday\",\r\n  \"Thursday\",\r\n  \"Friday\",\r\n  \"Saturday\",\r\n];\r\nconst months = [\r\n  \"Jan\",\r\n  \"Feb\",\r\n  \"Mar\",\r\n  \"Apr\",\r\n  \"May\",\r\n  \"Jun\",\r\n  \"Jul\",\r\n  \"Aug\",\r\n  \"Sep\",\r\n  \"Oct\",\r\n  \"Nov\",\r\n  \"Dec\",\r\n];\r\n\r\nsetInterval(() => {\r\n  const time = new Date();\r\n  const month = time.getMonth();\r\n  const date = time.getDate();\r\n  const day = time.getDay();\r\n  const hour = time.getHours();\r\n  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;\r\n  const minutes = time.getMinutes();\r\n  const ampm = hour >= 12 ? \"PM\" : \"AM\";\r\n\r\n  timeEl.innerHTML =\r\n    (hoursIn12HrFormat < 10 ? \"0\" + hoursIn12HrFormat : hoursIn12HrFormat) +\r\n    \":\" +\r\n    (minutes < 10 ? \"0\" + minutes : minutes) +\r\n    \"\" +\r\n    `<span id=\"am-pm\">${ampm}</span>`;\r\n\r\n  dateEl.innerHTML = days[day] + \", \" + date + \" \" + months[month];\r\n}, 1000);\r\n\r\nasync function searchCityWeather(city) {\r\n  let coords = await _utils__WEBPACK_IMPORTED_MODULE_1__.getCoord(city);\r\n  let weatherApi = await _utils__WEBPACK_IMPORTED_MODULE_1__.getWeather(coords);\r\n  let background = `url(${_utils__WEBPACK_IMPORTED_MODULE_1__.getTypeWeather(weatherApi.daily[0]).image})`;\r\n\r\n  document.getElementsByTagName(\"body\")[0].style.background = background;\r\n  weatherApi.name = coords[2];\r\n  showWeather(weatherApi);\r\n}\r\n\r\nfunction showWeather(weather) {\r\n  let { humidity, pressure, wind_speed, temp } = weather.current;\r\n  name.innerHTML = weather.name;\r\n  countryEl.innerText = `${weather.lat}N  /${weather.lon} E`;\r\n  showTypeWeather(weather);\r\n  tempEl.innerHTML = `<h2>${_utils__WEBPACK_IMPORTED_MODULE_1__.cToFarenheit(temp, isFarenheit)}</h2>`;\r\n  currentWeatherItemsEl.innerHTML = `\r\n  <div class=\"weather-item\">\r\n      <div>Humidity</div>\r\n      <div>${humidity}%</div>\r\n  </div>\r\n  <div class=\"weather-item\">\r\n      <div>Pressure</div>\r\n      <div>${pressure}</div>\r\n  </div>\r\n  <div class=\"weather-item\">\r\n      <div>Wind Speed</div>\r\n      <div>${wind_speed}</div>\r\n  </div>`;\r\n  showWeatherForecast(weather);\r\n}\r\n\r\nfunction showTypeWeather(data) {\r\n  typeWeatherEl.innerHTML = ` \r\n    <h2>${data.current.weather[0].main}</h2>\r\n    ${_utils__WEBPACK_IMPORTED_MODULE_1__.getTypeWeather(data.daily[0]).icon}\r\n  `;\r\n}\r\n\r\nfunction showWeatherForecast(data) {\r\n  let otherDayForcast = \"\";\r\n  data.daily.forEach((day, idx) => {\r\n    if (idx == 0) {\r\n      otherDayForcast += `  \r\n        <div class=\"weather-forecast-item weather-today \">\r\n          <div class=\"day\">Today</div>\r\n          ${_utils__WEBPACK_IMPORTED_MODULE_1__.getTypeWeather(day).icon}\r\n          <div class=\"temp\">Night : ${_utils__WEBPACK_IMPORTED_MODULE_1__.cToFarenheit(\r\n            day.temp.night,\r\n            isFarenheit\r\n          )}</div>\r\n          <div class=\"temp\">Day : ${_utils__WEBPACK_IMPORTED_MODULE_1__.cToFarenheit(\r\n            day.temp.night,\r\n            isFarenheit\r\n          )}</div>\r\n        </div>`;\r\n    } else {\r\n      otherDayForcast += `\r\n          <div class=\"weather-forecast-item\">\r\n              <div class=\"day\">${window\r\n                .moment(day.dt * 1000)\r\n                .format(\"dddd\")}</div>\r\n                ${_utils__WEBPACK_IMPORTED_MODULE_1__.getTypeWeather(day).icon}\r\n              <div class=\"temp\">Night : ${_utils__WEBPACK_IMPORTED_MODULE_1__.cToFarenheit(\r\n                day.temp.night,\r\n                isFarenheit\r\n              )}</div>\r\n              <div class=\"temp\">Day : ${_utils__WEBPACK_IMPORTED_MODULE_1__.cToFarenheit(\r\n                day.temp.night,\r\n                isFarenheit\r\n              )}</div>\r\n          </div>`;\r\n    }\r\n  });\r\n\r\n  weatherForecastEl.innerHTML = otherDayForcast;\r\n}\r\n\r\nsearchCityWeather(\"Guayaquil\");\r\n\n\n//# sourceURL=webpack://WeatherApp/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoord\": () => (/* binding */ getCoord),\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather),\n/* harmony export */   \"getTypeWeather\": () => (/* binding */ getTypeWeather),\n/* harmony export */   \"cToFarenheit\": () => (/* binding */ cToFarenheit)\n/* harmony export */ });\nconst APYkey = \"0ad713fac120b83bd907261fb7742fd7\";\r\nconst typeWeather = {\r\n  //clear sky\r\n  \"01\": {\r\n    icon: '<i class=\"fas fa-sun\"></i>',\r\n    image:\r\n      \"https://cdna.artstation.com/p/assets/images/images/038/340/698/large/ismail-inceoglu-dune-s-peaks.jpg?1622815645\",\r\n  },\r\n  //few clouds\r\n  \"02\": {\r\n    icon: '<i class=\"fas fa-sun-cloud\"></i>',\r\n    image:\r\n      \"https://cdnb.artstation.com/p/assets/images/images/024/293/323/large/ismail-inceoglu-omg-bunnies.jpg?1581955720\",\r\n  },\r\n  //scattered clouds\r\n  \"03\": {\r\n    icon: '<i class=\"fas fa-cloud\"></i>',\r\n    image:\r\n      \"https://cdna.artstation.com/p/assets/images/images/019/813/238/large/ismail-inceoglu-magnetic-storm-catcher.jpg?1565112053\",\r\n  },\r\n  //broken clouds\r\n  \"04\": {\r\n    icon: '<i class=\"fas fa-clouds\"></i>',\r\n    image:\r\n      \"https://cdnb.artstation.com/p/assets/images/images/005/334/401/large/ismail-inceoglu-ver-there.jpg?1490282334\",\r\n  },\r\n  //shower rain\r\n  \"09\": {\r\n    icon: '<i class=\"fas fa-cloud-showers\"></i>',\r\n    image:\r\n      \"https://cdna.artstation.com/p/assets/images/images/015/826/500/large/jasza-dobrzanski-headed-towards-crash-site.jpg?1549825328\",\r\n  },\r\n  //rain\r\n  10: {\r\n    icon: '<i class=\"fas fa-cloud-sun-rain\"></i>',\r\n    image:\r\n      \"https://cdna.artstation.com/p/assets/images/images/002/221/524/large/slawek-fedorczuk-slawek-fedorczuk-2016-03-25.jpg?1458893290\",\r\n  },\r\n  //thunderstorm\r\n  11: {\r\n    icon: '<i class=\"fas fa-thunderstorm\"></i>',\r\n    image:\r\n      \"https://cdna.artstation.com/p/assets/images/images/037/410/248/large/philipp-a-urlich-commission-planet-vespid-portfolio.jpg?1620302690\",\r\n  },\r\n  //snow\r\n  13: {\r\n    icon: '<i class=\"fas fa-snowflake \"></i>',\r\n    image:\r\n      \"https://cdna.artstation.com/p/assets/images/images/015/181/554/large/ismail-inceoglu-hmm.jpg?1547396627\",\r\n  },\r\n  //mist\r\n  50: {\r\n    icon: '<i class=\"fas fa-fog\"></i>',\r\n    image:\r\n      \"https://cdna.artstation.com/p/assets/images/images/033/942/830/large/ismail-inceoglu-the-great-sir.jpg?1610986624\",\r\n  },\r\n};\r\n\r\nfunction getTypeWeather(daily) {\r\n  let id = daily.weather[0].icon.slice(0, -1);\r\n  return typeWeather[id];\r\n}\r\n\r\nasync function getCoord(cityName) {\r\n  try {\r\n    let response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APYkey}`\r\n    );\r\n    let json = await response.json();\r\n    let lat = json.coord.lat;\r\n    let lon = json.coord.lon;\r\n    let name = json.name;\r\n    return [lat, lon, name];\r\n  } catch (err) {\r\n    alert(err);\r\n  }\r\n}\r\n\r\nasync function getWeather(coord) {\r\n  try {\r\n    console.log(coord);\r\n    let response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&exclude=hourly,minutely&units=metric&appid=${APYkey}`\r\n    );\r\n    let json = await response.json();\r\n    return json;\r\n  } catch (err) {\r\n    alert(err);\r\n  }\r\n}\r\n\r\nfunction cToFarenheit(temp, isFarenheit) {\r\n  if (isFarenheit) {\r\n    let farenheit = Math.round(temp * 1.8 + 32);\r\n    return `${farenheit}&#176;F`;\r\n  }\r\n  let celsius = Math.round(temp);\r\n  return `${celsius}&#176;C`;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://WeatherApp/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;