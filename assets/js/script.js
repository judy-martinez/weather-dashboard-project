var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);