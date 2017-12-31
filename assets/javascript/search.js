//Create an on click function for the search button.
//Take the users input into the api url 
// 

var queryURL = "https://api.foursquare.com/v2/venues/search?near=brooklyn&client_id=4W0G0DYQMQZU4EKFDHHOLKORBO4KB3VLHCXOPKV21OXSKDIK&client_secret=PRCH0DAAWVWXGX3JAJS5LSDQLFXCHFUXOKKEIAYDDWPE0GR1&v=20171227"

 $.ajax({
      url: queryURL, 
      method: "GET"
    }).done(function(response) { 


$("#run-search").on("click", function(){

        var name = response.response.venues[0].name;

        var pOne = $("<p>").text("Name:" + name);

        $("#well-section").append(pOne);

        var address = response.response.venues[0].location.formattedAddress;

        var pTwo = $("<p>").text("Location:" + address);

        $("#well-section").append(pTwo);
      })

      // console.log(response);

    });

