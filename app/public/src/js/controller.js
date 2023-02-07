import * as model from "./model.js";
// import forecastView from "./views/forecastView.js";
// import formView from "./views/formView.js";
import searchView from "./views/searchView.js";

import forecastView from "./views/forecastView.js";

const controlForecast = async function () {
  //   alert("controller works");
  try {
    //1. get the city and state after a form submission
    const query = searchView.getQuery();
    if (!query) return;

    //2. Load coordinates using city and state from above
    await model.loadCoordinates(query);

    //3. Render weather data in forecastView
    forecastView.render(model.weatherValues);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  searchView.addHandlerSearch(controlForecast);
  searchView.removeErrors();
  searchView.displayCityErrors();
};
init();
