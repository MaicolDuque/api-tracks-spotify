const { Router } = require('express');
const controller = require('./search.controller');

const router = new Router();

router.get('', controller.setAccessToken, controller.tracksByText)
router.get('/track/:id', controller.setAccessToken, controller.tracksById)

module.exports = router;
