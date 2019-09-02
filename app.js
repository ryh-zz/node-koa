const koa = require("koa");
const Router = require("koa-router")
const bodyParser = require('koa-bodyparser');
const helmet = require("koa-helmet");
const koaBody = require('koa-body');

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");


const app = new koa();
const router = new Router();
app.use(helmet())      // 安全
app.use(bodyParser()); //post参数
app.use(koaBody({multipart: true})) //文件

// 个人中心接口
const users = require("./routes/api/users");
router.use("/api/users",users);

// file 文件上传
const file = require("./routes/api/file");
router.use("/api/file",file);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());
const port = process.env.port || 5000;

// 拉起服务
app.listen(port, () => {
    console.log(`请访问 http://localhost:${port}`);
})
