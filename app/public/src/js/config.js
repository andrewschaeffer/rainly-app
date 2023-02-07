//**OpenWeather API Call Example:
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//**Geoapify API Call Example:
//https://api.geoapify.com/v1/geocode/search?housenumber=1214-1224&street=West%20Van%20Buren%20Street&postcode=60607&city=Chicago&country=United%20States%20of%20America&lang=en&limit=5&format=json&apiKey=YOUR_API_KEY
//Geoapify Documentation: https://apidocs.geoapify.com/docs/geocoding/forward-geocoding/#about

export const API_URL_OPENWEATHER =
  "https://api.openweathermap.org/data/3.0/onecall?&units=imperial&lang=en&cnt&";
export const API_URL_GEOAPIFY = "https://api.geoapify.com/v1/geocode/search?";
export const TIMEOUT_SEC = 10;
export const KEY_OPENWEATHER_ONECALL = ""; // onecall OpenWeather API Key (outputs weather using lat and lon)

export const KEY_GEOAPIFY = ""; //Geoapify API Key (outputs lat and lon using city and state)
