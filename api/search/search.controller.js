const spotifyApi = require('../../config/spotify')

function handleError(res, statusCode) {
  const statusCodeLocal = statusCode || 500;
  return err => res.status(statusCodeLocal).send(err);
}

function tracksByText(req, res) {
  const { q, page = 0, limit = 12 } = req.query
  return spotifyApi.searchTracks(`track:${q}`, { limit, offset: page }).then(
    (data) => res.send(data.body),
    (handleError(res))
  )
}

function tracksById(req, res) {
  const { id } = req.params
  return  spotifyApi.getTrack(id).then(
    (data) => res.send(data.body),
    (handleError(res))
  )
}

/**
 * Middleware to set token
 */
function setAccessToken(req, res, next) {
  // Retrieve an access token.
  spotifyApi.clientCredentialsGrant().then(
    function (data) {
      spotifyApi.setAccessToken(data.body['access_token']);
      next();
    },
    (handleError(res))
  );
}

module.exports = {
  tracksByText,
  tracksById,
  setAccessToken
}
