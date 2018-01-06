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

    $("#well-section").val('');

// VARIABLE STORING WHAT THE USER TYPES INTO THE FORM
  input = $("#name").val().trim();
  description = $("#near").val().trim();
  console.log(input);

//VARIABLE STORING THE GOOGLE MAPS API  
  var jMap = $('<iframe width="400" height="400" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBMKn40MMD5-EP1_QBAakXC6sgT_CI3ZLQ &q='+ input +'" allowfullscreen></iframe>');

// USING JQUERY TO DISPLAY THE MAP IN THE HTML. 
  $("#testmap").html(jMap);

// VARIABLE STORING THE FOURSQUARE API. 
  var queryURL = "https://api.foursquare.com/v2/venues/search?near="+ input +"&query="+ description +"&client_id=4W0G0DYQMQZU4EKFDHHOLKORBO4KB3VLHCXOPKV21OXSKDIK&client_secret=PRCH0DAAWVWXGX3JAJS5LSDQLFXCHFUXOKKEIAYDDWPE0GR1&v=20171227"
 
  console.log(queryURL);

// AJAX FUNCTION THAT GRAB THE REPSONSE DATA AND DISPLAYS IN THE HTML. 
 $.ajax({
      url: queryURL, 
      method: "GET"
    }).done(function(response) {   

console.log(response);

for (var i = 0; i < 15; i++) {

        var name = response.response.venues[i].name;

        var pOne = $("<p>").text(" Name " + name).css("font-weight","bold");

        $("#well-section").append(pOne);

        var address = response.response.venues[i].location.formattedAddress;

        var pTwo = $("<p>").text(" Location: " + address);

        $("#well-section").append(pTwo);

        var url = response.response.venues[i].url;

        var pthree =  $("<p>").text(" URL: " + url);

        $("#well-section").append(pthree)

// IF STATEMENT THAT WILL LET THE USER KNOW IF THERE IS NO WEBSITE TO BE FOUND IN THE OBJECT. 
           if (url === undefined) {
            pthree.text("URL: No Website Found")
    }

}

// CLEARS THE VALUES IN THE FORMS AFTER THE USER HITS SUBMIT. 
$("#name").val('');
  $("#near").val('');

  });

    });

// CLEAR ALL BUTTON TO CLEAR THE DATA THAT POPULATE THE WELL. 
$("#clear-all").on("click", function(){
    $("#well-section").empty();
});
