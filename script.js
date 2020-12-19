//API key1 e7a29c6f4a5754e864692a14224adc4e
//API key2 70cab7eef42f26169af049b4707ac69a
// UV http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}


var getLocal = JSON.parse(localStorage.getItem("city")) || []

var date = moment().format('MMMM Do YYYY')



var getForcast = JSON.parse(localStorage.getItem("day5"))



$(".button").on("click", function(event){
 event.preventDefault()
 var cityName = $(".search").val()
 var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=e7a29c6f4a5754e864692a14224adc4e&units=imperial"
 var day5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=c9f240bfa0d5ddedac85ad59a6de240d&units=imperial"
$.ajax({
    url: queryURL,
    mod: "cors",
    method: "GET"
    
}).then(function(response){
    $(".currentDat").text(getLocal.name + "  " + time)
$(".curTemp").text("Temperature: " + getLocal.main.temp + "°F")
$(".curHum").text("Humidity: " + getLocal.main.humidity + "%")
$(".curSpeed").text("Wind Speed: " + getLocal.wind.speed + "MPH")
    
localStorage.setItem("city", [JSON.stringify(response)])
getLocal.push(response)


})
$.ajax({
    url: day5,
    method: "GET"

}).then(function(results){
    localStorage.setItem("day5", JSON.stringify(results))
    getForcast.push(results)
    console.log(
        weatherTags(3),
    weatherTags(11),
    weatherTags(19),
    weatherTags(27),
    weatherTags(35)
    )

})



})

// var buttons = $("<button>")
// buttons.text(cityName)
// $(".leftcol").prepend(buttons)
//CURRENT

// $(".curIndex").text(getLocal.)
// function weathTags(x){
// results.list[x].main.temp
// results.list[x].main.humidity
// results.list[x].weather.icon
// }

// weatherTags(3)
// weatherTags(11)
// weatherTags(19)
// weatherTags(27)
// weatherTags(35)








//TODO: First, must get each search to generate a button with the cities name on it.
//TODO: it will need to be saved in local storage so as not to be lost after refresh.
//TODO: each button or search will need to place its value into url to summon data from api and place it on the screen.
//TODO: The Data needs to come from three sources but for starters we will focus on the main ones.







    
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast