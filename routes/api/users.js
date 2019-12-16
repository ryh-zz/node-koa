/* eslint-disable require-atomic-updates */
const Router = require("koa-router")
const router = new Router();
const User = require("../../models/Users");
const UserRule = require("../../rule/Users");


router.get("/test", async (ctx, next) => { //test 
    const query = ctx.query;
    const verify = UserRule.Test(ctx);
    if (verify) {
        const data = await User.getUser(query);
        ctx.status = 200;
        ctx.body = data;
    }
})

// 单点登录
router.get("/login", async (ctx, next) => {
    const query = ctx.query;
    console.log(ctx.session.views);
    ctx.status = 200;
    if(query.id === '123456'){
        ctx.session.views++;
        ctx.body = `${query.id}:登录成功`;
    } else {
        ctx.body = `${query.id}:未找到用户`;
    }
})

module.exports = router.routes();