/**
 * 对数字进行前位补零操作
 * @param {*需要进行修补的数字} num
 * @param {*需要的数字的长度} length
 */
let fixZero = (num, length) => {
  if (num.touString().length >= length) {
    return num;
  }
  return fixZero(`0${num}`, length)
}

/**
 * 获取格式话的时间
 * @param {*时间戳} timeStamp
 * @param {*连接符号} flag
 */
const getFormatedTime = (timeStamp, flag) => {
  const date = new Date(timeStamp);
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return year + (flag || '年') + fixZero(month, 2) + (flag || '月') + fixZero(month, 2) + (flag
    ? ''
    : '日');
}

/**
 * 获得随机数
 * @param {*起始数字} startNum
 * @param {*结尾数字} endNum
 */
const getRandom = (startNum, endNum) => {
  var iChoice = endNum - startNum;
  return Math.floor(Math.random() * iChoice + startNum);
}

/**
 * 重新设置根元素的大小
 * @param {*设计尺寸} designWidth
 */
const resetRootFontSize = (designWidth) => {
  const setFontSize = () => {
    var html = document.documentElement,
      viewWidth = html.clientWidth / designWidth * 100;
    html.style.fontSize = viewWidth + 'px';
  }
  document.addEventListener('DOMContentLoaded', setFontSize, false);
  window.onresize = setFontSize;
}

/**
 * 获取URL中元素的值
 */
const query = function (href, param) {
  let reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)', 'i')
  let paramArr = href.split('?')
  let r = paramArr[
    [paramArr.length - 1]
  ].match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

/**
 * 获取元素简写
 */
const $ = (ele) => {
  return document.querySelector(ele);
}

/**
 * 判断是否是微信
 */

const isWechat = () => {
  let agent = navigator
    .userAgent
    .toLowerCase()
  if (agent.match(/MicroMessenger/i) === "micromessenger") {
    return true
  }
  return false
}

export {getFormatedTime, fixZero}