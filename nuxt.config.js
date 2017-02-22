var getIssueList = require('./api/github/ffe.js');

var getPosts = require('./lib/mdToJson.js').parsedFiles;

var total = getPosts().total;

var pageNumbers = parseInt(total/10);

var pageIds = [], postsIds = [];
for (let i = 1; i <= pageNumbers; i++) {
    pageIds.push({
      id: i
    })
}

for( let i = 0; i < total; i++) {
    postsIds.push({
      id: i
    })
}

var getIssueListPromise = new Promise(function(res, rej){
    getIssueList(function(err, arr){
        if (err) {
            rej(err);
        } else {
            res(arr);
        }
    })
})

getIssueListPromise.then(function(arr){
  console.log('aaa',arr);
})
module.exports = {
  srcDir: 'client/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ffe blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css'}
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    loaders: [
      {
        test: /\.(css|less)$/,
        loader: 'less-loader'
      }
    ]
  },
  router: {
    base: '/nuxt-blog/'
  },
  generate: {
      dir: 'docs',
      routeParams: {
          '/page/:id': pageIds,
          '/posts/:id': postsIds,
          '/asks/:id': [{id: 1}],
          '/comments/:id': [{id: 1}]
      }
  }
}

/*
function () {
        return getIssueListPromise
          .then((res) => {
            return res.map((comment) => {
              return { id: comment.number }
            })
          })
  }
*/
