/**
 * 获取格式话的时间
 * @param {*时间戳} timeStamp 
 */
const getFormateDate = (timeStamp) => {
    const date = new Date(timeStamp);
    let year = date.getFullYear(),
        month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1)  : date.getMonth(),
        day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return year + '-' + month + '-' + day;
}

console.log(getFormateDate(Date.now()));