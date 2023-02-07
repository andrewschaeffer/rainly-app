import {
  API_URL_GEOAPIFY,
  API_URL_OPENWEATHER,
  KEY_GEOAPIFY,
  // KEY_OPENWEATHER_5DAY,
  KEY_OPENWEATHER_ONECALL,
} from "./config.js";
import { AJAX } from "./helpers.js";

export const weatherValues = {
  results: [],
  location: {
    state: "",
    city: "",
  },
};

export const loadCoordinates = async function (query) {
  try {
    //1. create Geoapify-friendly city/state string to enter in fetch
    console.log(query);
    const state = query[0].toUpperCase();
    const cityRaw = query[1];
    const cityRaw2 = cityRaw.toLowerCase().trim().split(" ");
    const city = cityRaw2
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("%20");

    //2. Fetch lat and lon using Geoapify
    const data = await AJAX(
      `${API_URL_GEOAPIFY}city=${city}&state=${state}&country=United%20States%20of%20America&lang=en&limit=1&format=json&apiKey=${KEY_GEOAPIFY}`
    );

    //Store city and state data in weatherValues
    weatherValues.location.state = data.results[0].state;
    weatherValues.location.city = data.results[0].city;

    const latitude = data.results[0].lat;
    const longitude = data.results[0].lon;

    //3. Fetch weather data with lat and lon coordinates
    const weatherData = await AJAX(
      `${API_URL_OPENWEATHER}lat=${latitude}&lon=${longitude}&appid=${KEY_OPENWEATHER_ONECALL}`
    );

    /**
     * Capitalizes the name of the month
     * @param {} string String of the month
     * @returns a capitalized month name
     */
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    /**
     * The isRaining function says if a given day is raining or not based on the day's weather ID code.  For weather condition codes see: https://openweathermap.org/weather-conditions.  200-232 = thunderstorm, 300-321 and 500 - 531 are rain, 600 - 622 is snow - So any number besides those will be a sun card.
     * @param {*} id
     * @returns boolean
     */
    function isRaining(id) {
      switch (true) {
        //thunderstorms are considered rain id: 200 - 232
        case id >= 200 && id <= 232:
          return true;
          break;
        //300 - 321 are actually rain
        case id >= 300 && id <= 321:
          return true;
          break;
        //500 - 531 are actually rain
        case id >= 500 && id <= 531:
          return true;
          break;
        //600 - 622 is snow, and considered rain
        case id >= 600 && id <= 622:
          return true;
          break;
        default:
          return false;
      }
    }

    //unpack weather array and loop over the ids and mains - then store in weatherValues - These values are unique values per day.
    weatherValues.results = weatherData.daily.map((day, i) => {
      const date = new Date(day.dt * 1000);
      return {
        id: day.weather[0].id,
        main: day.weather[0].main,
        day: date.toLocaleString("en-US", { weekday: "short" }).toUpperCase(),
        numDay: date.getDate(),
        month: capitalize(date.toLocaleString("en-US", { month: "long" })),
        isRaining: isRaining(day.weather[0].id),
      };
    });

    //**OpenWeather API Call Example:
    //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  } catch (err) {
    //Temporary error handling
    console.error(`${err} *******`);
    throw err;
  }
};

//https://api.geoapify.com/v1/geocode/search?city=Santa%20Barbara&state=CA&country=United%20States%20of%20America&lang=en&limit=1&format=json&apiKey=73ad6791623e45bea4e399ec9c0d7bf3
