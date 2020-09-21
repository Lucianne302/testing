//var chkBreedSel=document.getElementById("breed"); // the ID of the breed dropdown

//var selectedBreed="Abyssinian"; // for testing only


//in Pawssible Pet Section
//when a breed is selected, and submit button is clicked, site should prompt a picture of

//var selectBreed = document.querySelector("#breed").value;


// *** PRO TIP: Make sure you link your script.js in your index.HTML if you would like code to execute ***


function testCall() {
    var zip=19701;
    var url="https://api.petfinder.com/v2/animals";
    var authUrl="https://api.petfinder.com/v2/oauth2/token";
//    var cliSecret="lSZxDywC45exeleR65WjlWjkIIIPl8F4BTB9GexH";
//    var catapiKey = "9582ba93-02b0-45de-aa25-7a09bacf82dd";
	
    var lvApiKey="YGYMc2PTrF9CZFZiypTGXH775siAyi3BPfsWe3NFGDKQei5Fv4";
    var lvSecret="P0Jw9aIBwXcVUA46oDH7T2fRktBChQZnBpkPmU9R"
    var org='R177'; // for testing
    var status='adoptable'; // for testing
    var myState='PA'; // for testing


  //                  "Access-Control-Allow-Headers" : "Content-Type",
 //           "Access-Control-Allow-Origin": "https://www.example.com",
//            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"


    // Call the API
// This is a POST request, because we need the API to generate a new token for us
fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	crossDomain:true,
	body: 'grant_type=client_credentials&client_id=' + lvApiKey + '&client_secret=' + lvSecret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {

	// Return the response as JSON
	return resp.json();

}).then(function (data) {

	// Log the API data
	console.log('token', data);

	// Return a second API call
	// This one uses the token we received for authentication
//	return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
	return fetch('https://api.petfinder.com/v2/animals?location=' + myState + '&status=' + status, {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}).then(function (resp) {

	// Return the API response as JSON
	return resp.json();

}).then(function (data) {

	// Log the pet data
	console.log('pets', data);
	
	
}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
    
    /*
          $.ajax({
            type: 'POST',
            url: authUrl,
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            crossDomain:true,
            cache : true, 
            dataType: 'json',
            data: {
                client_id: catapiKey,
                client_secret: cliSecret,
                grant_type: "client_credentials",
            },

            success: function (data) {
                $('#response').html(JSON.stringify(data, null, " "));;
            },
            error: function (e) {
                $('#response').html(e.responseText);
            }
        });*/
    
/*
var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "OPTIONS,POST,GET");

    myHeaders.append("grant_type", "client_credentials");
    myHeaders.append("client_id", catapiKey);
    myHeaders.append("client_secret", cliSecret);
    console.log(myHeaders);
    fetch(authUrl, { 
        type:"get",
        headers: myHeaders,
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        crossDomain:true,
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
    });
    */

/*
    $.ajax({
        url: 'https://api.wit.ai/message?v=20140826&q=',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        }, success: function(data){
            alert(data);
            //process the JSON data etc
        }
    })    
    */
   /*
    $.ajax({
        url: 'https://api.petfinder.com/v2/oauth2/token',
        headers: { 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'grant_type' : 'client_credentials', 'client_id': catapiKey, "client_secret": cliSecret},
        beforeSend: function() {
        }, success: function(data){
            alert(data);
            //process the JSON data etc
        }
    })   */ 


// get token: https://api.petfinder.com/v2/oauth2/token

/*
    $.ajax({
        url: url,
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            key: catapiKey,
            animal: 'cat',
            'location': zip,
            output: 'basic',
            format: 'json'
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer "+myToken)//6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5
        // Here is where we handle the response we got back from Petfinder
        success: function( response ) {
            console.log('test');
            console.log(response); // debugging
        }
    });
    */

/*
    fetch(getBreedURL).then(function (response) {
      console.log(response);
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
        })
      }
    });
*/     
}
testCall();
