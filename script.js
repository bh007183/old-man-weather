
////////////////Retreave From Local Storage//////////////////
var getLocal = JSON.parse(localStorage.getItem("city")) || []

var getForcast = JSON.parse(localStorage.getItem("day5")) || []

var getUv = JSON.parse(localStorage.getItem("uvIn")) || []



render()
// buttonClick()


///////////////Function For Buttons//////////////////////
function buttonClick(){
$("button").on("click", function(event){
   
    ///////////Variable For Targeting Event Listener////////////
    var cityName = $(event.target).attr("data-name")
    console.log($(event.target).attr("data-name"))
    //////////API links and ajax///////////////
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=e7a29c6f4a5754e864692a14224adc4e&units=imperial"
        var day5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=c9f240bfa0d5ddedac85ad59a6de240d&units=imperial"
    //////////Ajax for buttons on main content/////////////
       $.ajax({
           url: queryURL,
           method: "GET"
           
       }).then(function(response){
        getLocal.unshift(response) 
        render()
        store()
        
        //////////Api For UV Index///////////////
        var uv = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=70cab7eef42f26169af049b4707ac69a"
        $.ajax({
        url: uv,
        method: "GET"

        }).then(function(uvIndex){
        console.log(uvIndex.value)
        getUv.unshift(uvIndex.value)
        render()  
        store()
    })
       
        
       })
       /////////Ajax for 5 day forcast button activation
       $.ajax({
        url: day5,
        method: "GET"
    
        }).then(function(results){
            getForcast.unshift(results)
        render()  
        store()
        
        
        
        
     
        })
    
        
    })

}

function render(){
    try{
        
        $("nav").empty()
    for (var i = getLocal.length - 1; i >= 0;  i--){
        var button = $("<button>").text(getLocal[i].name)
        button.attr("data-name" , getLocal[i].name)
        button.addClass("buttons")
        
        $(".leftcol").prepend(button)

    }    
        $(".curIndex").text("UV: " + getUv[0] )
        if (getUv[0] > 7){
            $(".curIndex").css("background-color", "red")
          }
          if (getUv[0] > 3 && getUv[0] < 7){
            $(".curIndex").css("background-color", "yellow")
          }
          if (getUv[0] < 3){
            $(".curIndex").css("background-color", "green")
          }
          
    
        var date = moment().format('MMMM Do YYYY')
        $(".image").attr("src", "http://openweathermap.org/img/wn/" + getLocal[0].weather[0].icon + ".png")
        $(".currentDat").text(getLocal[0].name + "  " + date)
        $(".curTemp").text("Temperature: " + getLocal[0].main.temp + "°F")
        $(".curHum").text("Humidity: " + getLocal[0].main.humidity + "%")
        $(".curSpeed").text("Wind Speed: " + getLocal[0].wind.speed + "MPH")

        $(".moment").text(getForcast[0].list[4].dt_txt)
        $(".moment1").text(getForcast[0].list[12].dt_txt)
        $(".moment2").text(getForcast[0].list[20].dt_txt)
        $(".moment3").text(getForcast[0].list[28].dt_txt)
        $(".moment4").text(getForcast[0].list[36].dt_txt)
        
        $(".one").text("T: " + getForcast[0].list[4].main.temp)
        $(".one1").text("H: " + getForcast[0].list[4].main.humidity)
        $(".one2").attr("src", "http://openweathermap.org/img/wn/" + getForcast[0].list[4].weather[0].icon + ".png")
        
        $(".two").text("T: " + getForcast[0].list[12].main.temp)
        $(".two1").text("H: " + getForcast[0].list[12].main.humidity)
        $(".two2").attr("src", "http://openweathermap.org/img/wn/" + getForcast[0].list[12].weather[0].icon + ".png")
       
        
        $(".three").text("T: " + getForcast[0].list[20].main.temp)
        $(".three1").text("H: " + getForcast[0].list[20].main.humidity)
        $(".three2").attr("src", "http://openweathermap.org/img/wn/" + getForcast[0].list[20].weather[0].icon + ".png")
        
        $(".four").text("T: " + getForcast[0].list[28].main.temp)
        $(".four1").text("H: " + getForcast[0].list[28].main.humidity)
        $(".four2").attr("src", "http://openweathermap.org/img/wn/" + getForcast[0].list[28].weather[0].icon + ".png")
        
    
        $(".five").text("T: " + getForcast[0].list[36].main.temp)
        $(".five1").text("H: " + getForcast[0].list[36].main.humidity)
        $(".five2").attr("src", "http://openweathermap.org/img/wn/" + getForcast[0].list[36].weather[0].icon + ".png")
        buttonClick()
        
        }
        catch(err) {
            ""
          }
        
    
    
    
    
}    


function store (){
localStorage.setItem("city", JSON.stringify(getLocal));
///////////////////////////////////////////////////////
localStorage.setItem("day5", JSON.stringify(getForcast))
////////////////////////////////////////////////////////

localStorage.setItem("uvIn", JSON.stringify(getUv))

}





$(".button").on("click", function(event){
 event.preventDefault()


 var cityName = $("input").val()
 console.log(cityName)
 var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=e7a29c6f4a5754e864692a14224adc4e&units=imperial"
 var day5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=c9f240bfa0d5ddedac85ad59a6de240d&units=imperial"
 

$.ajax({
    url: queryURL,
    mod: "cors",
    method: "GET"
    
}).then(function(response){
getLocal.unshift(response) 
store()
render()
//////////
var uv = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=70cab7eef42f26169af049b4707ac69a"
    $.ajax({
    url: uv,
    method: "GET"

    }).then(function(uvIndex){
    console.log(uvIndex.value)
    getUv.unshift(uvIndex.value)
        render()  
        store()
    })
//////////
})
$.ajax({
    url: day5,
    method: "GET"

}).then(function(results){
getForcast.unshift(results)
store()
render()
    
})


})





 



   
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