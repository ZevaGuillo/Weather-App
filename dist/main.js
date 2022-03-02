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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\nconst timeEl = document.getElementById(\"time\");\r\nconst dateEl = document.getElementById(\"date\");\r\nconst currentWeatherItemsEl = document.getElementById(\"current-weather-items\");\r\nconst countryEl = document.getElementById(\"country\");\r\nconst name = document.getElementById(\"name\");\r\nconst weatherForecastEl = document.getElementById(\"weather-forecast\");\r\n\r\nconst days = [\r\n  \"Sunday\",\r\n  \"Monday\",\r\n  \"Tuesday\",\r\n  \"Wednesday\",\r\n  \"Thursday\",\r\n  \"Friday\",\r\n  \"Saturday\",\r\n];\r\nconst months = [\r\n  \"Jan\",\r\n  \"Feb\",\r\n  \"Mar\",\r\n  \"Apr\",\r\n  \"May\",\r\n  \"Jun\",\r\n  \"Jul\",\r\n  \"Aug\",\r\n  \"Sep\",\r\n  \"Oct\",\r\n  \"Nov\",\r\n  \"Dec\",\r\n];\r\n\r\nsetInterval(() => {\r\n  const time = new Date();\r\n  const month = time.getMonth();\r\n  const date = time.getDate();\r\n  const day = time.getDay();\r\n  const hour = time.getHours();\r\n  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;\r\n  const minutes = time.getMinutes();\r\n  const ampm = hour >= 12 ? \"PM\" : \"AM\";\r\n\r\n  timeEl.innerHTML =\r\n    (hoursIn12HrFormat < 10 ? \"0\" + hoursIn12HrFormat : hoursIn12HrFormat) +\r\n    \":\" +\r\n    (minutes < 10 ? \"0\" + minutes : minutes) +\r\n    \" \" +\r\n    `<span id=\"am-pm\">${ampm}</span>`;\r\n\r\n  dateEl.innerHTML = days[day] + \", \" + date + \" \" + months[month];\r\n}, 1000);\r\n\r\nasync function algo() {\r\n  let coords = await _utils__WEBPACK_IMPORTED_MODULE_1__.getCoord(\"Guayaquil\");\r\n  let weather = await _utils__WEBPACK_IMPORTED_MODULE_1__.getWeather(coords);\r\n  weather.name = coords[2];\r\n  showWeather(weather);\r\n}\r\n\r\nfunction showWeather(weather) {\r\n  let { humidity, pressure, sunrise, sunset, wind_speed } = weather.current;\r\n  name.innerHTML = weather.name;\r\n  countryEl.innerText = `${weather.lat}N  /${weather.lon} E`;\r\n  currentWeatherItemsEl.innerHTML = `\r\n  <div class=\"weather-item\">\r\n      <div>Humidity</div>\r\n      <div>${humidity}%</div>\r\n  </div>\r\n  <div class=\"weather-item\">\r\n      <div>Pressure</div>\r\n      <div>${pressure}</div>\r\n  </div>\r\n  <div class=\"weather-item\">\r\n      <div>Wind Speed</div>\r\n      <div>${wind_speed}</div>\r\n  </div>\r\n  <div class=\"weather-item\">\r\n      <div>Sunrise</div>\r\n      <div>${window.moment(sunrise * 1000).format(\"HH:mm a\")}</div>\r\n  </div>\r\n  <div class=\"weather-item\">\r\n      <div>Sunset</div>\r\n      <div>${window.moment(sunset * 1000).format(\"HH:mm a\")}</div>\r\n  </div>`;\r\n  showWeatherForecast(weather);\r\n}\r\n\r\nfunction showWeatherForecast(data) {\r\n  let otherDayForcast = \"\";\r\n  data.daily.forEach((day, idx) => {\r\n    if (idx == 0) {\r\n      otherDayForcast += `  \r\n        <div class=\"weather-forecast-item weather-today \">\r\n          <div class=\"day\">${window.moment(day.dt * 1000).format(\"ddd\")}</div>\r\n          <img src=\"http://openweathermap.org/img/wn/${\r\n            day.weather[0].icon\r\n          }@2x.png\" alt=\"weather icon\" class=\"w-icon\">\r\n          <div class=\"temp\">Night - ${day.temp.night}&#176;C</div>\r\n          <div class=\"temp\">Day - ${day.temp.day}&#176;C</div>\r\n        </div>`;\r\n    } else {\r\n      otherDayForcast += `\r\n          <div class=\"weather-forecast-item\">\r\n              <div class=\"day\">${window\r\n                .moment(day.dt * 1000)\r\n                .format(\"ddd\")}</div>\r\n              <img src=\"http://openweathermap.org/img/wn/${\r\n                day.weather[0].icon\r\n              }@2x.png\" alt=\"weather icon\" class=\"w-icon\">\r\n              <div class=\"temp\">Night - ${day.temp.night}&#176;C</div>\r\n              <div class=\"temp\">Day - ${day.temp.day}&#176;C</div>\r\n          </div>`;\r\n    }\r\n  });\r\n\r\n  weatherForecastEl.innerHTML = otherDayForcast;\r\n}\r\n\r\nalgo();\r\n\n\n//# sourceURL=webpack://WeatherApp/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoord\": () => (/* binding */ getCoord),\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\nconst APYkey = \"0ad713fac120b83bd907261fb7742fd7\";\r\n\r\nasync function getCoord(cityName) {\r\n  try {\r\n    let response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APYkey}`\r\n    );\r\n    let json = await response.json();\r\n    let lat = json.coord.lat;\r\n    let lon = json.coord.lon;\r\n    let name = json.name;\r\n    return [lat, lon, name];\r\n  } catch (err) {\r\n    alert(err);\r\n  }\r\n}\r\n\r\nasync function getWeather(coord) {\r\n  try {\r\n    console.log(coord);\r\n    let response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&exclude=hourly,minutely&units=metric&appid=${APYkey}`\r\n    );\r\n    let json = await response.json();\r\n    return json;\r\n  } catch (err) {\r\n    alert(err);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://WeatherApp/./src/utils.js?");

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