const Router = require("koa-router")
const router = new Router();
const User = require("../../models/Users");
const UserRule = require("../../rule/Users");


router.get("/test", async (ctx, next) => { //test 
    let query = ctx.query;
    let verify = UserRule.Test(ctx);
    if (verify) {
        let data = await User.getUser(query)
        ctx.status = 200;
        ctx.body = query;
    }
})

module.exports = router.routes();