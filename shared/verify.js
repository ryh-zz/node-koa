const Parameter = require('parameter'); // 参数检验
const parameter = new Parameter();

const publicVerify = (rule, ctx) => { //检验
    let ret = parameter.validate(rule, ctx.query);
    if (ret) {
        ctx.status = 200;
        let error = "";
        ret.forEach(element => {
            error += `${element.field} is abnormal,`
        });
        ctx.body = `error: ${error}`;
        return false;
    } else {
        return true;
    }
}
module.exports = {
    publicVerify
}