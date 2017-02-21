var router = require('express').Router(),
	path = require('path');

var jsonFiles = require('../lib/mdToJson.js');
let posts = jsonFiles(path.join(__dirname, '../server/source'));
posts.data = posts.data.slice(0, 10);

router.get('/posts', function (req, res, next) {    
    res.json(posts);
})

/* GET user by ID. */
// router.get('/users/:id', function (req, res, next) {
//   var id = parseInt(req.params.id)
//   if (id >= 0 && id < users.length) {
//     res.json(users[id])
//   } else {
//     res.sendStatus(404)
//   }
// })

module.exports = router
