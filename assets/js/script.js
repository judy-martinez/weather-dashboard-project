// script accomplished with help from tutor J Carver
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var key = '74ca7f205abd3b033a3c6c613219fbb2'

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value}&appid=${key}&units=imperial`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let lat = data.coord.lat
        let lon = data.coord.lon
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`)
        .then(res2 => res2.json())
        .then(data2 => {
            console.log(data2)
            // CURRENT WEATHER DATA
            let temp = data2.daily[0].temp.day
            let wind = data2.daily[0].wind_speed
            let humidity = data2.daily[0].humidity
            let uvi = data2.daily[0].uvi

            // FORECAST DAY 1, WEATHER data2
            let temp1 = data2.daily[1].temp.day
            let wind1 = data2.daily[1].wind_speed
            let humidity1 = data2.daily[1].humidity
            let uvi1 = data2.daily[1].uvi
            
            // FORECAST DAY 1, WEATHER data2
            let temp2 = data2.daily[2].temp.day
            let wind2 = data2.daily[2].wind_speed
            let humidity2 = data2.daily[2].humidity
            let uvi2 = data2.daily[2].uvi

            // FORECAST DAY 1, WEATHER data2
            let temp3 = data2.daily[3].temp.day
            let wind3 = data2.daily[3].wind_speed
            let humidity3 = data2.daily[3].humidity
            let uvi3 = data2.daily[3].uvi

            // FORECAST DAY 1, WEATHER data2
            let temp4 = data2.daily[4].temp.day
            let wind4 = data2.daily[4].wind_speed
            let humidity4 = data2.daily[4].humidity
            let uvi4 = data2.daily[4].uvi

            // FORECAST DAY 1, WEATHER DATA
            let temp5 = data2.daily[5].temp.day
            let wind5 = data2.daily[5].wind_speed
            let humidity5 = data2.daily[5].humidity
            let uvi5 = data2.daily[5].uvi



            // ADD DATA TO THE WEBPAGE
            let cityDisplay = document.querySelector('.cityName')
            let date = document.querySelector('.date')
            let tempDisplay = document.querySelector('#temp')
            let windDisplay = document.querySelector('#wind')
            let humidityDisplay = document.querySelector('#humidity')
            let uviDisplay = document.querySelector('#uv-index')

            cityDisplay.innerHTML = `${data.name}`
            date.innerHTML = `${moment().format('L')}`
            tempDisplay.innerHTML = `Temp: ${temp}`
            windDisplay.innerHTML = `Wind: ${wind}`
            humidityDisplay.innerHTML = `humidity: ${humidity}`
            uviDisplay.innerHTML = `UV Index: ${uvi}`
        })
    })
};

userFormEl.addEventListener(`submit`, formSubmitHandler);


