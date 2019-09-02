const Verify = require('../shared/verify')
const phone = /^1[23456789]\d{9}$/;
const email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

const Test = ctx => { //test
    let rule = {
        id: { type: "string" },
        phone: { type: "string", format: phone, required: false },
        email: { type: "string", format: email, required: false },
    };
    return Verify.publicVerify(rule, ctx);
}

module.exports = {
    Test
};