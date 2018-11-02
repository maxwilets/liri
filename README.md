# LIRI

Using the the command line in Node, LIRI will is able to perform commands.

### Technologies Used
     
     * JavaScript
     * Node.js
     * Request NPM
     * Moment NPM
     * fs NPM
### Objectives

* Typing spotify-this-song + songname will check spotify and return:
     * Artist Name
     * Song Name
     * Album Name
     * Preview URL for the song
     
* Typing concert-this + bandname will check the bands in town API and return information about a concert:
     * Venue name
     * Venue address
     * Time of the concert
     
* Typing movie-this will check the OMDB database and return movie information:
     * Movie name
     * Actors
     * Year Released
     * Language
     * Country
     * Plot Summary
     
* Typing do-what-it-says will read a command written in a file called random.txt and perform the function listed
     * spotify-this-song
     * concert-this
     * movie-this

### Bonus

Make a log.txt and have every search typed into the console be recorded and in a format it can easily be pulled and stored in an array.
The search terms were pulled and stored like this example1,example2 so they could be split(',') neatly into an array.

# Things to Improve

     * Give the LIRI a vocabulary, example: song, or give-me-a-song, or song this would run the spotify function
     * Give it a few move commands, perhaps a video game or twitter search
     * Make an array of commands and randomly write on the the random.txt to make the LIRI really do something random


Link to screencaps of examples:
https://drive.google.com/file/d/1DDM0VQozQXSypVgp2HGbFTfSruIEx0Fi/view
