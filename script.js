var catapiKey = "9582ba93-02b0-45de-aa25-7a09bacf82dd";
var chkBreedSel=document.getElementById("breed"); // the ID of the breed dropdown

var selectedBreed="Abyssinian"; // for testing only


//in Pawssible Pet Section
//when a breed is selected, and submit button is clicked, site should prompt a picture of

//var selectBreed = document.querySelector("#breed").value;


// *** PRO TIP: Make sure you link your script.js in your index.HTML if you would like code to execute ***


function testCall() {
    var zip=19701;
    var url="https://api.petfinder.com/v2/animals";
    var authUrl="https://api.petfinder.com/v2/oauth2/token";
    var cliSecret="lSZxDywC45exeleR65WjlWjkIIIPl8F4BTB9GexH";

  //                  "Access-Control-Allow-Headers" : "Content-Type",
 //           "Access-Control-Allow-Origin": "https://www.example.com",
//            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"

    
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "OPTIONS,POST,GET");

    myHeaders.append("grant_type", "client_credentials");
    myHeaders.append("client_id", catapiKey);
    myHeaders.append("client_secret", cliSecret);
    console.log(myHeaders);
    fetch(authUrl, { 
        type:"post",
        headers: myHeaders
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
    });

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
