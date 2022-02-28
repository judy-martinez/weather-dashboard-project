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



            // ADD DATA TO THE WEBPAGE leave this alone
            let cityDisplay = document.querySelector('.cityName')
            let date = document.querySelector('.date')
            let tempDisplay = document.querySelector('#temp')
            let windDisplay = document.querySelector('#wind')
            let humidityDisplay = document.querySelector('#humidity')
            let uviDisplay = document.querySelector('#uv-index')

            cityDisplay.innerHTML = `${data.name}`
            date.innerHTML = `${moment().format('L')}`
            tempDisplay.innerHTML = `Temp: ${temp}&#8457;`
            windDisplay.innerHTML = `Wind: ${wind} mph`
            humidityDisplay.innerHTML = `Humidity: ${humidity}%`
            uviDisplay.innerHTML = `UV Index: ${uvi}`
// _____________________________________________________________________________
            // ADD DATA TO THE WEBPAGE
            let date1 = document.querySelector('#date1')
            let tempDisplay1 = document.querySelector('#temp1')
            let windDisplay1 = document.querySelector('#wind1')
            let humidityDisplay1 = document.querySelector('#humidity1')
 

                        // cityDisplay1.innerHTML = `${data.name}`
            date1.innerHTML = `${moment().format('L')}`
            tempDisplay1.innerHTML = `Temp: ${temp1}&#8457;`
            windDisplay1.innerHTML = `Wind: ${wind1} mph`
            humidityDisplay1.innerHTML = `Humidity: ${humidity1}%`


            // ADD DATA TO THE WEBPAGE
            let date2 = document.querySelector('#date2')
            let tempDisplay2 = document.querySelector('#temp2')
            let windDisplay2 = document.querySelector('#wind2')
            let humidityDisplay2 = document.querySelector('#humidity2')


                        // cityDisplay2.innerHTML = `${data.name}`
            date2.innerHTML = `${moment().format('L')}`
            tempDisplay2.innerHTML = `Temp: ${temp2}&#8457;`
            windDisplay2.innerHTML = `Wind: ${wind2} mph`
            humidityDisplay2.innerHTML = `Humidity: ${humidity2}%`


            // ADD DATA TO THE WEBPAGE
            let date3 = document.querySelector('#date3')
            let tempDisplay3 = document.querySelector('#temp3')
            let windDisplay3 = document.querySelector('#wind3')
            let humidityDisplay3 = document.querySelector('#humidity3')

                        // cityDisplay3.innerHTML = `${data.name}`
            date3.innerHTML = `${moment().format('L')}`
            tempDisplay3.innerHTML = `Temp: ${temp3}&#8457;`
            windDisplay3.innerHTML = `Wind: ${wind3} mph`
            humidityDisplay3.innerHTML = `Humidity: ${humidity3}%`

            // ADD DATA TO THE WEBPAGE
            let date4 = document.querySelector('#date4')
            let tempDisplay4 = document.querySelector('#temp4')
            let windDisplay4 = document.querySelector('#wind4')
            let humidityDisplay4 = document.querySelector('#humidity4')

                        // cityDisplay4.innerHTML = `${data.name}`
            date4.innerHTML = `${moment().format('L')}`
            tempDisplay4.innerHTML = `Temp: ${temp4}&#8457;`
            windDisplay4.innerHTML = `Wind: ${wind4} mph`
            humidityDisplay4.innerHTML = `Humidity: ${humidity4}%`

            // ADD DATA TO THE WEBPAGE
             // cityDisplay5 = document.querySelector('.cityName')
            let date5 = document.querySelector('#date5')
            let tempDisplay5 = document.querySelector('#temp5')
            let windDisplay5 = document.querySelector('#wind5')
            let humidityDisplay5 = document.querySelector('#humidity5')

                        // cityDisplay5.innerHTML = `${data.name}`
            date5.innerHTML = `${moment().format('L')}`
            tempDisplay5.innerHTML = `Temp: ${temp5}&#8457;`
            windDisplay5.innerHTML = `Wind: ${wind5} mph`
            humidityDisplay5.innerHTML = `Humidity: ${humidity5}%`


        })
    })
};

userFormEl.addEventListener(`submit`, formSubmitHandler);


