var router = require('express').Router()

// Add posts Routes
router.use(require('./posts'))
router.use(require('./github/ffe.js'))

module.exports = router
