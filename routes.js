/**
 * Main application routes
*/

// Import Endpoints
const search = require('./api/search')

module.exports = (app) => {
  app.use('/search', search)
}
