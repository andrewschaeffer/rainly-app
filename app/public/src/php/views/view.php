<?php
  include 'src/php/includes/Database.php';
 
?>

<!-- for Emmet HTML boilerplate type: html:5 and then tab-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" src="src/js/controller.js"></script>
    <link rel="stylesheet" href="src/css/style.css" />
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="src/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="src/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="src/img/favicon-16x16.png">
    <link rel="manifest" href="src/img/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <!-- End of Favicons -->
    <title>Rainly</title>
  </head>
  <body>
    <header class="primary-header">
      <div class="container">
        <h1 class="primary-title">Rainly</h1>
      </div>
    </header>
    <main class="main">
      <section class="container form-container">
        <h2 class="form-container__title">Instructions:</h2>
        <p class="form-container__instructions">
          Select your state and city in the USA. Then click “Get rain forecast”
          to see which days have rain.
        </p>
        <form action="#" method="GET" class="form-container__inner">
          <div class="form-container__state">
            <label class="state-label" for="state">State</label>
            <select class="select state-error-select" name="state" onchange="getCities(this.value)" id="form-container__state-label">
              <option
                class="form-container__state-option placeholder"
                value=""
                disabled
                selected
                hidden
              >
                Click to select your state
              </option>
              <!--Long list of states -->
              <option class="form-container__state-option" value="AK">Alaska</option>
              <option class="form-container__state-option" value="AL">Alabama</option>
              <option class="form-container__state-option" value="AR">Arkansas</option>
              <option class="form-container__state-option" value="AZ">Arizona</option>
              <option class="form-container__state-option" value="CA">California</option>
              <option class="form-container__state-option" value="CO">Colorado</option>
              <option class="form-container__state-option" value="CT">Connecticut</option>
              <option class="form-container__state-option" value="DC">District of Columbia</option>
              <option class="form-container__state-option" value="DE">Delaware</option>
              <option class="form-container__state-option" value="FL">Florida</option>
              <option class="form-container__state-option" value="GA">Georgia</option>
              <option class="form-container__state-option" value="HI">Hawaii</option>
              <option class="form-container__state-option" value="IA">Iowa</option>
              <option class="form-container__state-option" value="ID">Idaho</option>
              <option class="form-container__state-option" value="IL">Illinois</option>
              <option class="form-container__state-option" value="IN">Indiana</option>
              <option class="form-container__state-option" value="KS">Kansas</option>
              <option class="form-container__state-option" value="KY">Kentucky</option>
              <option class="form-container__state-option" value="LA">Louisiana</option>
              <option class="form-container__state-option" value="MA">Massachusetts</option>
              <option class="form-container__state-option" value="MD">Maryland</option>
              <option class="form-container__state-option" value="ME">Maine</option>
              <option class="form-container__state-option" value="MI">Michigan</option>
              <option class="form-container__state-option" value="MN">Minnesota</option>
              <option class="form-container__state-option" value="MO">Missouri</option>
              <option class="form-container__state-option" value="MS">Mississippi</option>
              <option class="form-container__state-option" value="MT">Montana</option>
              <option class="form-container__state-option" value="NC">North Carolina</option>
              <option class="form-container__state-option" value="ND">North Dakota</option>
              <option class="form-container__state-option" value="NE">Nebraska</option>
              <option class="form-container__state-option" value="NH">New Hampshire</option>
              <option class="form-container__state-option" value="NJ">New Jersey</option>
              <option class="form-container__state-option" value="NM">New Mexico</option>
              <option class="form-container__state-option" value="NV">Nevada</option>
              <option class="form-container__state-option" value="NY">New York</option>
              <option class="form-container__state-option" value="OH">Ohio</option>
              <option class="form-container__state-option" value="OK">Oklahoma</option>
              <option class="form-container__state-option" value="OR">Oregon</option>
              <option class="form-container__state-option" value="PA">Pennsylvania</option>
              <option class="form-container__state-option" value="PR">Puerto Rico</option>
              <option class="form-container__state-option" value="RI">Rhode Island</option>
              <option class="form-container__state-option" value="SC">South Carolina</option>
              <option class="form-container__state-option" value="SD">South Dakota</option>
              <option class="form-container__state-option" value="TN">Tennessee</option>
              <option class="form-container__state-option" value="TX">Texas</option>
              <option class="form-container__state-option" value="UT">Utah</option>
              <option class="form-container__state-option" value="VA">Virginia</option>
              <option class="form-container__state-option" value="VT">Vermont</option>
              <option class="form-container__state-option" value="WA">Washington</option>
              <option class="form-container__state-option" value="WI">Wisconsin</option>
              <option class="form-container__state-option" value="WV">West Virginia</option>
              <option class="form-container__state-option" value="WY">Wyoming</option>
            </select>
            <svg class="warning">
              <use href="src/img/icons.svg#warning"></use>
            </svg>
            <p class="error-message state-error-message">Error message</p>
          </div>

          <div class="form-container__city">
            <label class="city-label" for="city">City</label>
            <select class="select city-error-select" name="city" id="form-container__city-label">
              <option
                class="form-container__city-option placeholder"
                value=""
                disabled
                selected
                hidden
              >
                Click to select your city
              </option>
              <!-- <option class="form-container__city-option" value="santa barbara">Santa Barbara</option> -->
            </select>
            <svg class="warning">
              <use href="src/img/icons.svg#warning"></use>
            </svg>
            <p class="error-message city-error-message">Error message</p>
          </div>
          <!-- <input class="form-submit" type="submit" value="Get rain forecast"></input> -->
          <button type="submit" class="form-submit">Get rain forecast</button>
        </form>
      </section>
      <!-- Weather Location Title -->
      <section class="breakout-container weather-address ">
        <div class="weather-address-header">
          <h2 class="weather-address-card__city-title">Santa Barbara</h2>
          <h2 class="weather-address-card__state-title">California</h2>
        </div>
      </section>
      <section class="container weather-cards">
        <!-- Weather Card Variants:
              weather-card--dry--today
              weather-card--dry
              weather-card--rain--today
              weather-card--rain 
        -->
        <!-- <article class="weather-card weather-card--dry--today">
          <div class="weather-card-date-wrapper">
            <h3 class="weather-card-day">mon 17</h3>
            <p class="weather-card-month">november</p>
          </div>
          <div class="weather-card-description-wrapper">
            <svg class="weather-card-description-icon weather-card-sun-icon" alt="sun">
              <use href="src/img/icons.svg#sun-link"></use>
            </svg>
            <svg class="weather-card-description-icon weather-card-rain-icon">
              <use href="src/img/icons.svg#rain-link"></use>
            </svg>
            <p class="weather-card-description">Thunderstorm</p>
          </div>
          <span class="weather-card-badge--today" >today</span>
        </article> -->
      </section>
    </main>
    <footer>
      <section class="container footer-section">
        <div class="credits">
          <p class="credit-intro">Built and designed by</p>
          <a class="credit-link" href="#" target="_blank">Andrew Schaeffer</a>
        </div>
      </section>
    </footer>
    <script>
      //Gets cities when a state is selected
      function getCities(state) {
        $citySelect = document.getElementById("form-container__city-label");
        $citySelect.innerHTML = "";

        if (state == "") {
          console.log("no state variable passed");
          return;
        }
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "src/php/models/Cities.php?q=" + state, true);
        xhttp.onreadystatechange = function (ev) {
            if(xhttp.readyState === 4 && xhttp.status === 200){
              //  document.getElementById("ajax-test").innerHTML = this.responseText;
              //use insertAdjacentHTML
             
              $citySelect.insertAdjacentHTML('beforeend', this.responseText);
                }
          }
        xhttp.send();
        }
    </script>
  </body>
</html>
