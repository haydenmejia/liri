require("dotenv").config();

const Twitter = require("twitter");
const Spotify = require("spotify");
const keys = require("./keys");
const params = {
    screen_name: 'haydenmejia_',
    count: 20
}

const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);

const action = process.argv[2];

switch (action) {
    case 'my-tweets':
        myTweets();
        break;
    case 'spotify':
        spotifyThis();
        break;
    case 'movie-this':
        movieThis();
        break;
    case 'do-what-it-is-says':
        doWhatItIsSays();
        break;
}


function myTweets() {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log(error);
        }
        tweets.forEach(function(tweet) {
            console.log(tweet.text);
            console.log('--------------------------');
        });
    });

    console.log("last 20 tweets:")
}