// JavaScript source code
// 时间日期相关
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var currentdate = year + "." + month + "." + day;
currentDate.innerHTML = currentdate;

//显示隐藏

function available(object) {
    object.style.transform = "translate(0,0) scale(1, 1)";
    object.style.opacity = "1";
}
function unavailable(object) {
    object.style.transform = "translate(50%,-50%) scale(0,0)";
    object.style.opacity = "0";
}
