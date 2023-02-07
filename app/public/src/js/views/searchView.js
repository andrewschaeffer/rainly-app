/**
 * Handles search activities for city and state
 */
class searchView {
  /**
   * index.php elements
   */
  _parentElement = document.querySelector(".form-container__inner");
  _stateInput = document.getElementById("form-container__state-label");
  _cityInput = document.getElementById("form-container__city-label");
  _cityContainer = document.querySelector(".form-container__city");
  _stateContainer = document.querySelector(".form-container__state");
  /**
   * Gets city and state values from the form to send to the API
   * @returns array City and state
   */
  getQuery() {
    const stateUSA = this._stateInput.value;
    const cityUSA = this._cityInput.value;
    this._clearInputs();
    return [stateUSA, cityUSA];
  }

  /**
   * Clears inputs
   */
  _clearInputs() {
    this._stateInput.value = "";
    this._cityInput.value = "";
    //Clear the city options, but return the "click to select your city option"
    this._cityInput.innerHTML = "";
    this._cityInput.insertAdjacentHTML(
      "afterbegin",
      `<option
        class='form-container__city-option placeholder'
        value=''
        disabled
        selected
        hidden
      >
        Click to select your city
      </option>"`
    );
  }

  /**
   * When submit is pressed on the form, control forecast in the controller is called
   * @param {*} handler Control forecast function in the controller is called
   */
  addHandlerSearch(handler) {
    this._parentElement.addEventListener(
      "submit",
      function (e) {
        //prevent page from refreshing on submit
        e.preventDefault();

        //validate the form inputs
        this._validateForm();

        //call handler only if there are no errors
        if (
          !this._cityContainer.classList.contains("failure") &&
          !this._stateContainer.classList.contains("failure")
        ) {
          handler();
        }
      }.bind(this)
    );
  }

  /**
   * Checks that both inputs have values, and submits error codes otherwise
   */
  _validateForm() {
    //Check state input
    if (
      (this._stateInput.value == "") |
      (this._stateInput.value == undefined)
    ) {
      this._displayErrors(this._stateInput, "Please select a state");
    }
    if ((this._cityInput.value == "") | (this._cityInput.value == undefined)) {
      this._displayErrors(this._cityInput, "Select a state above then a city");
    }
  }

  //Show errors when trying to submit the form
  _displayErrors(input, message) {
    const formContainer = input.parentNode;

    formContainer.classList.add("failure");
    const errorMessage = formContainer.querySelector(".error-message");
    errorMessage.innerText = message;
  }

  //Show error when trying to select a city before a state
  displayCityErrors(e) {
    this._cityInput.addEventListener(
      "focus",
      function () {
        if (
          (this._stateInput.value === "") |
          (this._stateInput.value === undefined)
        ) {
          //disable the city select field
          // this._cityInput;
          // e.preventDefault();
          //display error message
          this._displayErrors(this._stateInput, "Please select a state first");
        }
      }.bind(this)
    );
  }

  //Removes errors when a state or city option is selected
  removeErrors() {
    this._stateInput.addEventListener(
      "change",
      function () {
        this._stateContainer.classList.remove("failure");
      }.bind(this)
    );

    this._cityInput.addEventListener(
      "change",
      function () {
        this._cityContainer.classList.remove("failure");
      }.bind(this)
    );
  }
}

export default new searchView();
