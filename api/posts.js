var router = require('express').Router(),
	path = require('path'),
	getPosts = require('../lib/mdToJson.js').parsedFiles;


var pageSize = 10,
	posts = getPosts();

router.get('/page/:id', function (req, res, next) {    
    var pageNum = parseInt(req.params.id) - 1,
        retPosts = copy(posts);
    if (pageNum < 0) {
        res.sendStatus(404)
    } else {
        retPosts['data'] = retPosts.data.slice(pageNum, (pageNum + 1) * pageSize)
        res.json(retPosts);
    }
})

/**
 * newest posts
 */
router.get('/posts/new', function (req, res, next) {  
	let _posts = copy(posts);  
    _posts['data'] = _posts.data.slice(0, 6);
    res.json(_posts);
})

/* GET post by ID. */
router.get('/posts/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < posts.total) {
    res.json(posts.data[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router

function copy (obj) {
	return JSON.parse(JSON.stringify(obj));
}