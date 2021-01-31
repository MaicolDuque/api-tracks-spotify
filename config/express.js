/**
 * Express configuration
 */

const bodyParser = require('body-parser');
const logger = require("morgan");
const cors = require('cors')

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(logger('dev'));
  app.use(cors())
};
