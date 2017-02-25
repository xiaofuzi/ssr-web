var mdToJson = require('./lib/mdToJson.js')(),
    total = mdToJson.parsedFiles().total;


/**
 * page server render ids generate plugin
 */
mdToJson.use(function (res, next) {
    let pageNumbers = Math.ceil(total/10),
        pageIds = [];
    for (let i = 1; i <= pageNumbers; i++) {
        pageIds.push({
          id: i
        })
    }

    res.pageIds = pageIds;
    next(res);
})

/**
 * posts server render ids generate plugin
 */
mdToJson.use(function (res, next) {
        let total = res.total,
            postIds = [];
        for ( let i = 0; i < total; i++) {
            postIds.push({
                id: i
            })
        }
        res.postsIds = postIds;
        next(res);
    }
)

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
    base: '/ssr-web/'
  },
  generate: {
        dir: 'docs',
        routeParams: {
          '/page/:id': function (cb) {
                mdToJson.parse((res)=>{
                    cb(res.pageIds);
                })
            },
          '/posts/:id': function (cb) {
                mdToJson.parse((res)=>{
                    cb(res.postsIds);
                })
            }
        }
    }
}

