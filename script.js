//API key e7a29c6f4a5754e864692a14224adc4e
var searchBar = $(".search").val()
console.log(searchBar)




$(".button").on("click", function(event){
 event.preventDefault()
 console.log(searchBar)

    

})

var queryURL = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=70cab7eef42f26169af049b4707ac69a&units=imperial"





$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)





})








    
