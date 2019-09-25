var app = require('koa')();
var router = require('koa-router')();


// 首页 —— 左侧列表
var homeListData = require('./home/list.js')
router.get('/api/homelist', function*(next) {
    console.log('首页 —— 首页左侧列表')

    this.body = homeListData
});

// 首页 —— 右侧列表
var hotListData = require('./HotList/HotList.js')
router.get('/api/hotlist', function*(next) {
    console.log('首页 —— 右侧热门文章列表')

    this.body = hotListData
});

// 文章页面列表
var articleData = require('./article/article.js')
router.get('/api/articlelist/:page', function*(next) {
    console.log('文章页面列表')
    const params = this.params
    const paramsPage = params.page

    console.log('当前页数：' + paramsPage)
    this.body = articleData
});

// 随笔页面列表
var essayData = require('./article/article.js')
router.get('/api/essaylist/:page', function*(next) {
    console.log('随笔页面列表')
        // 参数
    const params = this.params
    const paramsPage = params.page

    console.log('当前页数：' + paramsPage)
    this.body = essayData
});

// 详情页
var detailInfo = require('./detail/info.js')
router.get('/api/detail/:id', function*(next) {
    console.log('详情页')

    const params = this.params
    const id = params.id
    console.log('商户id: ' + id)

    this.body = detailInfo
})

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./result/result.js')
router.get('/api/search/:page/:category/:keyword', function*(next) {
        console.log('搜索结果页 - 搜索结果')

        // 参数
        const params = this.params
        const paramsPage = params.page
        const paramsCategory = params.category
        const paramsKeyword = params.keyword

        console.log('当前页数：' + paramsPage)
        console.log('当前类别：' + paramsCategory)
        console.log('关键字：' + paramsKeyword)

        this.body = searchListData
    })
    // 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:category', function*(next) {
    console.log('搜索结果页 - 搜索结果')

    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})



// // 订单列表
// const orderList = require('./orderlist/orderList.js')
// router.get('/api/orderlist/:username', function*(next) {
//     console.log('订单列表')

//     const params = this.params
//     const username = params.username
//     console.log('用户名：' + username)

//     this.body = orderList
// })

// 提交评论
router.post('/api/submitComment', function*(next) {
    console.log('提交评论')

    // 获取参数

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);