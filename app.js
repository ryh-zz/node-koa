const koa = require("koa");
const Router = require("koa-router")
const bodyParser = require('koa-bodyparser');
const helmet = require("koa-helmet");
const koaBody = require('koa-body');
const session = require('koa-session');

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");

const app = new koa();
const router = new Router();


app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};


app.use(helmet())      // 安全
app.use(bodyParser()); //post参数
app.use(koaBody({ multipart: true })) //文件
app.use(session(CONFIG, app));   // session

// 个人中心接口
const users = require("./routes/api/users");
router.use("/api/users", users);

// file 文件上传
const file = require("./routes/api/file");
router.use("/api/file", file);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());
const port = process.env.port || 5000;

// 拉起服务
app.listen(port, () => {
    console.log(`请访问 http://localhost:${port}`);
})
