const db = require("../config");
const gravatar = require('gravatar'); //全球公认头像

// 获取用户列表
const getUser = async (query) => {
    console.log(query);
    await db.startTransaction();
    // let avatar = gravatar.url(query.email, { s: '200', r: 'pg', d: 'mm' });
    // await db.executeTransaction(`INSERT INTO user(avatar) VALUES (?)`,[avatar]);
    let data = await db.executeTransaction(`select * from user limit 10`);
    await db.stopTransaction();
    return data
}
module.exports = {
    getUser
};