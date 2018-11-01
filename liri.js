
require("dotenv").config();

var moment = require('moment')
var keys = require("./keys")
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify) 
var request = require('request')
var doIt = require('fs')
var input = process.argv[2];
var search = process.argv[3]

//function for the spotify-this-song api call
var spotifyThis = function(){
       if (search== undefined){
        search = 'Hotline Bling'
    }
    //api call for the spotify search
    spotify.search({type: 'track', query: search, limit: 1}, function(err, data){
      if (err){
           console.log(err)
       }
     
      // Logs the Artist, songm and album name and song preview
      console.log(('Artist: ') + JSON.stringify(data.tracks.items[0].artists[0].name)) 
      console.log(('Song: ') + JSON.stringify(data.tracks.items[0].name))
      console.log(('Album ') +JSON.stringify(data.tracks.items[0].album.name, null, 2))
      console.log(JSON.stringify(data.tracks.items[0].preview_url))
   })
}
//function for the concert-this argument
var concertThis = function(){
    //url for the bandsintown api
    var url = "https://rest.bandsintown.com/artists/" + search +"/events?app_id=codoingbootcamp";
    request(url, function(err, response, body){
        if (err){
            return console.log(err)
        }
        console.log("Venue: " + JSON.parse(body)[0].venue.name);
        console.log("Location: " + JSON.parse(body)[0].venue.city + ", " + 
        JSON.parse(body)[0].venue.region);
        console.log("Date: " + moment(JSON.parse(body)[0].datetime).format('MMMM Do YYYY, h:mm a'));

    })
}
//function for the movie-this argument
var movieThis = function(){
    if(search == undefined) {
        search = 'Mr. Nobody'
      }

     var url = 'http://www.omdbapi.com/?t=' + search +'&apikey=trilogy';
     request(url, function(err, response, body){
         
       if(err){
         return console.log(err)
       }
       // Logging Show/Movie Title, Year, IMDB Rating, RT Rating, Actors, Language, Country, & Plot
       console.log("Title: " + JSON.parse(body)["Title"]);
       console.log("Year: " + JSON.parse(body)["Year"]);
       console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
       console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
       console.log("Actors: " + JSON.parse(body)["Actors"]);
       console.log("Language: " + JSON.parse(body)["Language"]);
       console.log("Country: " + JSON.parse(body)["Country"]);
       console.log("Plot: " + JSON.parse(body)["Plot"]);
       });
}
//for case do-what-it-says
var doThis = function(){
    
        
        doIt.readFile("random.txt", "utf8", function(err, data){
            // Logging Error if something goes wrong
            if (err){
              return console.log(err);
            }
            // Making Text File Into an Array 
            var dataArr = data.split(",");
            input = dataArr[0];
            search = dataArr[1];      
            twitch()
        })   
}
//bonus to log the search results to a text file
logThis = function(){
    if (search == undefined){
       return  console.log('no search made')
    }
    
     doIt.appendcleFile('log.txt', search +',', function(err, data){
         if (err){
             console.log(error)
         }
         
     })

     doIt.readFile('log.txt', 'utf8', function(err, data){
         if(err){
             return console.log(err)
         }
         var logArr = data.split 
     })
}
//this passes the node arguments
var twitch = function(){
switch(input){
    case 'spotify-this-song':
    spotifyThis();
    logThis();
    break;

    case 'concert-this':
    concertThis();
    logThis();    
    break;
        
    case "movie-this":
    movieThis();
    logThis()
    break;
        case 'do-what-it-says':
        doThis()
            input = process.argv[2];
            search = process.argv[3]

    }   
}  
 //starts the function   
twitch();

