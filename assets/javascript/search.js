// PSUEDO CODE.
// 1. USER TYPES LOCATION IN FORM.
// 2. SEARCH BUTTON WILL GRAB USER INPUT AND PLACE INTO THE QUERY URL
// 3. AJAX WILL GRAB THE NAME AND ADDRESS AND OTHER FIELDS AND PLACED INTO A PARAGRAPH TAG.
// 4. RETRIEVED INFO WILL BE PLACED IN THE WELL DIV.
// 5. CODE SHOULD ITERATE THROUGH MULTIPLE VENUES IN THE OBJECT AND DISPLAY THEM IN THE WELL. (FOR LOOP)

var input = "";
var j = 0;

// API KEY AND URL 
// var queryURL = "https://api.foursquare.com/v2/venues/search?near="+ input +"&client_id=4W0G0DYQMQZU4EKFDHHOLKORBO4KB3VLHCXOPKV21OXSKDIK&client_secret=PRCH0DAAWVWXGX3JAJS5LSDQLFXCHFUXOKKEIAYDDWPE0GR1&v=20171227"


// HIDING WELL UNTIL SECTION UNTIL USER HITS SUBMITS
$("#well-section").hide();

// ONCLICK FUNCTION FOR THE SEARCH BUTTON
$("#run-search").on("click", function(click){
    event.preventDefault();

  //SHOWS WELL-SECTION 
    $("#well-section").show();

// VARIABLE STORING WHAT THE USER TYPES INTO THE FORM
  input = $("#name").val().trim();
  description = $("#near").val().trim();
  console.log(input);

  
  var jMap = $('<iframe width="400" height="400" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBMKn40MMD5-EP1_QBAakXC6sgT_CI3ZLQ &q='+ input +'" allowfullscreen></iframe>');

  $("#testmap").html(jMap);

  // var queryURL = "https://api.foursquare.com/v2/venues/search?near="+ input +"&client_id=4W0G0DYQMQZU4EKFDHHOLKORBO4KB3VLHCXOPKV21OXSKDIK&client_secret=PRCH0DAAWVWXGX3JAJS5LSDQLFXCHFUXOKKEIAYDDWPE0GR1&v=20171227"

  var queryURL = "https://api.foursquare.com/v2/venues/search?near="+ input +"&query="+ description +"&client_id=4W0G0DYQMQZU4EKFDHHOLKORBO4KB3VLHCXOPKV21OXSKDIK&client_secret=PRCH0DAAWVWXGX3JAJS5LSDQLFXCHFUXOKKEIAYDDWPE0GR1&v=20171227"
 
  console.log(queryURL);
  // API KEY AND URL 

// ** ATTEMPING TO CREATE A FUNCTION THAT WILL HOLD THE AJAX RESPONSE WHICH CAN BE CALLED WHEN THE USER CLICKS THE SEARCH BUTTON.

 $.ajax({
      url: queryURL, 
      method: "GET"
    }).done(function(response) { 

console.log(response);

for (var i = 0; i < 6; i++) {

    for (var j = 1; j < 6; j++){

        var name = response.response.venues[i].name;

        var pOne = $("<p>").text(j +"."+" Name: " + name);

        $("#well-section").append(pOne);

        var address = response.response.venues[i].location.formattedAddress;

        var pTwo = $("<p>").text(" Location: " + address);

        $("#well-section").append(pTwo);

        var url = response.response.venues[i].url;

        var pthree =  $("<p>").text(" URL: " + url);

        $("#well-section").append(pthree);


           if (url === undefined) {
            pthree.text("URL: No Website Found")
    }

    }



}

$("#name").val('');
  $("#near").val('');

  });

    });

// CLEAR WELL BUTTON
$("#clear-all").on("click", function(){
    $("#well-section").empty();
});








  
