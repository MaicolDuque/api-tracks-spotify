const SpotifyWebApi = require('spotify-web-api-node');
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET;

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret
});

module.exports = spotifyApi
