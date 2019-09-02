const Router = require("koa-router");
const router = new Router();
const fs = require("fs");
const setFile = require("../../shared/file");

/** 保存文件接口 */
router.post("/saveFile", async (ctx) => {
   const file = ctx.request.files.file;
   const reader = fs.createReadStream(file.path);
   const fileExt = setFile.getUploadFileExt(file.name)
   let filePath = `${__dirname}/../../public`;
   let fileResource = `${filePath}/${Date.parse(new Date())}.${fileExt}`;
   if (!fs.existsSync(filePath)) {
      fs.mkdir(filePath, (err) => {
         if (err) {
            throw new Error(err)
         }
      })
   }
   let upstream = fs.createWriteStream(fileResource);
   reader.pipe(upstream);
   ctx.body = ctx.request.body;
})

/** 解析文件 */
router.post("/analysisFile", async (ctx) => {
   const file = ctx.request.files.file;
   fs.readFile(file.path, (err, data) => {
      if (err) {
         console.log(err);
      } else {
         console.log(data.toString());
      }
   })
   ctx.body = ctx.request.body;
})
module.exports = router.routes();