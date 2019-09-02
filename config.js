const Mysql = require("mysql-pro");
//数据库
const db = new Mysql({
    mysql: {
        host: '101.132.176.53',
        port: 3306,
        user: 'root',
        password: 'yh15517964501.',
        database: 'ceshi'
    }
})
module.exports = db;