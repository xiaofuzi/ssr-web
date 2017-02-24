var router = require('express').Router()

// Add posts Routes
router.use(require('./posts'))

module.exports = router
