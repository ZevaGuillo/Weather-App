const APYkey = "0ad713fac120b83bd907261fb7742fd7";

async function getCoord(cityName) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APYkey}`
    );
    let json = await response.json();
    let lat = json.coord.lat;
    let lon = json.coord.lon;
    let name = json.name;
    return [lat, lon, name];
  } catch (err) {
    alert(err);
  }
}

async function getWeather(coord) {
  try {
    console.log(coord);
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&exclude=hourly,minutely&units=metric&appid=${APYkey}`
    );
    let json = await response.json();
    return json;
  } catch (err) {
    alert(err);
  }
}

export { getCoord, getWeather };
