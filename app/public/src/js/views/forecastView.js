class forecastView {
  //City / state title
  //Weather cards parent element
  _cardsParentElement = document.querySelector(".weather-cards");
  _cityLocation = document.querySelector(".breakout-container");
  _stateName = document.querySelector(".weather-address-card__state-title");
  _cityName = document.querySelector(".weather-address-card__city-title");

  /**
   * Shows the weather data
   * @param {*} weatherData The weather data from the model
   * renders the weather data
   */
  render(weatherData) {
    //Make sure the function is receiving data
    if (
      !weatherData ||
      (Array.isArray(weatherData) && weatherData.length === 0)
    ) {
      return console.error("No weather data received to display");
    }

    this._data = weatherData;

    //Show city and state title and insert data

    this._stateName.textContent = this._data.location.state;
    this._cityName.textContent = this._data.location.city;
    this._cityLocation.style.display = "block";

    //Display weather cards

    const markup = this._generatemarkup();
    this._cardsParentElement.innerHTML = "";
    this._cardsParentElement.insertAdjacentHTML("afterbegin", markup);
  }
  /**
   * Takes the weather data, loops over it, and sticks the values in the html.  Then it gathers up the html into a bundle to send to the render method.
   * @returns The weather card html string
   */
  _generatemarkup() {
    //Create variables for ids that mean rain, and check it against the values from the data.

    return this._data.results
      .map((result, i) => {
        return `
          <article class="weather-card weather-card--${
            result.isRaining === true ? "rain" : "dry"
          }${i === 0 ? "--today" : ""}">
            <div class="weather-card-date-wrapper">
              <h3 class="weather-card-day">${result.day} ${result.numDay}</h3>
              <p class="weather-card-month">${result.month}</p>
            </div>
            <div class="weather-card-description-wrapper">
              <svg class="weather-card-description-icon weather-card-sun-icon" alt="sun">
                <use href="src/img/icons.svg#sun-link"></use>
              </svg>
              <svg class="weather-card-description-icon weather-card-rain-icon">
                <use href="src/img/icons.svg#rain-link"></use>
              </svg>
              <p class="weather-card-description">${
                result.isRaining === true ? "Rain" : "Dry"
              }</p>
            </div>
            <span class="weather-card-badge--today">today</span>
          </article>
          `;
      })
      .join("");
  }
}
export default new forecastView();
