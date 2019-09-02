/** 获取文件后缀 */
const getUploadFileExt = (name) => {
    let ext = name.split('.');
    return ext[ext.length - 1];
}
module.exports = {
    getUploadFileExt,
}