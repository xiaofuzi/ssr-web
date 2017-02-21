var router = require('express').Router(),
	path = require('path'),
    moment = require('moment'),
    marked = require('marked');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

var jsonFiles = require('../lib/mdToJson.js');
let posts = jsonFiles(path.join(__dirname, '../server/source'));

    posts.data.forEach((post, index)=>{
        post.meta['url'] = moment(post.meta.date, 'YYYY-MM-DD').format('YYYY-MM-DD') + '-' + post.meta.title;
        post.meta['id'] = index + 1 + '';
        post.content = marked(post.content);
    });

var pageSize = 10;

router.get('/page/:id', function (req, res, next) {    
    var pageNum = parseInt(req.params.id) - 1,
        retPosts = posts;
    if (pageNum < 0) {
        res.sendStatus(404)
    } else {
        retPosts['data'] = posts.data.slice(pageNum, pageNum + pageSize)
        res.json(posts);
    }
})

/* GET user by ID. */
router.get('/posts/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < posts.total) {
    res.json(posts.data[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
