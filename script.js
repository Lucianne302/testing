

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
    var myType = "cat";


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
	return fetch('https://api.petfinder.com/v2/animals?location=' + myState + '&status=' + status +'&type='+myType, {
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
	// put cocde to print to page here for pet results
	
}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
    
 
}
testCall();
