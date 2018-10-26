
require("dotenv").config();



var keys = require("./keys")
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify) 
var request = require('request')



var input = process.argv[2];
var search = process.argv[3]


switch(input){
    case 'spotify-this-song':
    
    
    
   spotify.search({type: 'track', query: search}) 
        .then(function(response) {
            console.log(response)
            array = response
            for (i=0; i < array.tracks.items.length; i++){
                data = (array[i])
                console.log(data)
            }
            
        })
        .catch(function(err){
            console.log(err)
        })

    break;

    case 'concert-this':
    request('https://rest.bandsintown.com/artists/' + search + '/events?app_id=codingbootcamp', function(error, response, body){
        console.log(error);
        console.log('statusCode:', response && response.statusCode)
        
              console.log(JSON.parse(body));
              console.log(body.name)
              
            
        
    })
   
        break;
    }   
//var spotify = new Spotify(keys.spotify)

