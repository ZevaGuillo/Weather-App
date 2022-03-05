const APYkey = "0ad713fac120b83bd907261fb7742fd7";
const typeWeather = {
  //clear sky
  "01": {
    icon: '<i class="fas fa-sun"></i>',
    image:
      "https://cdna.artstation.com/p/assets/images/images/038/340/698/large/ismail-inceoglu-dune-s-peaks.jpg?1622815645",
  },
  //few clouds
  "02": {
    icon: '<i class="fas fa-sun-cloud"></i>',
    image:
      "https://cdnb.artstation.com/p/assets/images/images/024/293/323/large/ismail-inceoglu-omg-bunnies.jpg?1581955720",
  },
  //scattered clouds
  "03": {
    icon: '<i class="fas fa-cloud"></i>',
    image:
      "https://cdna.artstation.com/p/assets/images/images/019/813/238/large/ismail-inceoglu-magnetic-storm-catcher.jpg?1565112053",
  },
  //broken clouds
  "04": {
    icon: '<i class="fas fa-clouds"></i>',
    image:
      "https://cdnb.artstation.com/p/assets/images/images/005/334/401/large/ismail-inceoglu-ver-there.jpg?1490282334",
  },
  //shower rain
  "09": {
    icon: '<i class="fas fa-cloud-showers"></i>',
    image:
      "https://cdna.artstation.com/p/assets/images/images/015/826/500/large/jasza-dobrzanski-headed-towards-crash-site.jpg?1549825328",
  },
  //rain
  10: {
    icon: '<i class="fas fa-cloud-sun-rain"></i>',
    image:
      "https://cdna.artstation.com/p/assets/images/images/002/221/524/large/slawek-fedorczuk-slawek-fedorczuk-2016-03-25.jpg?1458893290",
  },
  //thunderstorm
  11: {
    icon: '<i class="fas fa-thunderstorm"></i>',
    image:
      "https://cdna.artstation.com/p/assets/images/images/037/410/248/large/philipp-a-urlich-commission-planet-vespid-portfolio.jpg?1620302690",
  },
  //snow
  13: {
    icon: '<i class="fas fa-snowflake "></i>',
    image:
      "https://cdna.artstation.com/p/assets/images/images/015/181/554/large/ismail-inceoglu-hmm.jpg?1547396627",
  },
  //mist
  50: {
    icon: '<i class="fas fa-fog"></i>',
    image:
      "https://cdna.artstation.com/p/assets/images/images/033/942/830/large/ismail-inceoglu-the-great-sir.jpg?1610986624",
  },
};

function getTypeWeather(daily) {
  let id = daily.weather[0].icon.slice(0, -1);
  return typeWeather[id];
}

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
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&exclude=hourly,minutely&units=metric&appid=${APYkey}`
    );
    let json = await response.json();
    return json;
  } catch (err) {
    alert(err);
  }
}

function cToFarenheit(temp, isFarenheit) {
  if (isFarenheit) {
    let farenheit = Math.round(temp * 1.8 + 32);
    return `${farenheit}&#176;F`;
  }
  let celsius = Math.round(temp);
  return `${celsius}&#176;C`;
}

export { getCoord, getWeather, getTypeWeather, cToFarenheit };
