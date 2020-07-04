const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/getAllCity', async (ctx, next) => {
  // 验证token是否过期
  let token = ctx.request.headers.token
  let tokenIsOut = 1
  let searchtoken = () => {
    return new Promise((resolve, reject) => {
      fs.readFile('./public/jsons/user.json', function(err, data) {
        if (err) {
          resolve({ code: -1, msg: '查询失败' + err })
          return console.error(err)
        }
        let jsonData = data.toString() //将二进制的数据转换为字符串
        jsonData = JSON.parse(jsonData) //将字符串转换为json对象
        // 查找token的expire
        jsonData = jsonData.user.filter(item => item.token === token)[0]
        let now = new Date()
        if (jsonData.expire - now.getTime() > 0) {
          resolve(fs.readFileSync('./public/jsons/city.json').toString()) // 把ctx.body写在resolve中
        } else {
          resolve({ status: 401 })
          tokenIsOut = 0
        }
      })
    })
  }
  ctx.body = await searchtoken()
  // 设置状态码
  if (tokenIsOut) {
    ctx.status = 200
  } else {
    ctx.status = 401
  }
})

router.get('/getIndex', async (ctx, next) => {
  ctx.set('Content-Type', 'application/json')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = fs.readFileSync('./public/jsons/index.json').toString()
})

router.get('/getDetial', async (ctx, next) => {
  ctx.set('Content-Type', 'application/json')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = fs.readFileSync('./public/jsons/detail.json').toString()
})

module.exports = router
