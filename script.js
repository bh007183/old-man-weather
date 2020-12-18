//API key1 e7a29c6f4a5754e864692a14224adc4e
//API key2 70cab7eef42f26169af049b4707ac69a
var searchBar = $(".search").val()
console.log(searchBar)


// UV http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}

$(".button").on("click", function(event){
 event.preventDefault()
 console.log(searchBar)

    

})
//CURRENT
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=70cab7eef42f26169af049b4707ac69a&units=imperial"

//5 DAY
var day5 = "https://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=70cab7eef42f26169af049b4707ac69a$units=imperial"

console.log(day5)



$.ajax({
    url: day5,
    method: "GET"
}).then(function(response){
    console.log(response)





})


//TODO: First, must get each search to generate a button with the cities name on it.
//TODO: it will need to be saved in local storage so as not to be lost after refresh.
//TODO: each button or search will need to place its value into url to summon data from api and place it on the screen.
//TODO: The Data needs to come from three sources but for starters we will focus on the main ones.







    
