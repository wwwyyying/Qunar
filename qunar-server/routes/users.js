const router = require("koa-router")();
const fs = require("fs");
const path = require("path");

router.prefix("/user");

router.get("/", function(ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

router.post("/login", async function(ctx, next) {
  let newUser = ctx.request.body;
  let token = Math.random()
    .toString(16)
    .slice(2, 18);
  newUser.token = token;
  // 添加token的有效期
  let expire = new Date()
  expire = expire.getTime() + 604800000 // 一周的有效期
  newUser.expire = expire
  console.log(newUser);

  let writeJson = () => {
    return new Promise((resolve, reject) => {
      fs.readFile('./public/jsons/user.json', function(
        err,
        data
      ) {
        if (err) {
          // 报错返回
          resolve({ code: -1, msg: "新增失败" + err });
          return console.error(err);
        }
        let jsonData = data.toString(); //将二进制的数据转换为字符串
        jsonData = JSON.parse(jsonData); //将字符串转换为json对象
        jsonData.user.push(newUser)

        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        let str = JSON.stringify(jsonData);
        fs.writeFile('./public/jsons/user.json', str, function(
          err
        ) {
          if (err) {
            resolve({ code: -1, msg: "新增失败" + err });
          }
          resolve({ code: 0, msg: "新增成功", token: newUser.token, username: newUser.username});
        });
      });
    });
  };
  ctx.body = await writeJson()
});

module.exports = router;
