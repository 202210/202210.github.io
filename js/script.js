// JavaScript source code
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var currentdate = year + "." + month + "." + day;
currentDate.innerHTML = currentdate;