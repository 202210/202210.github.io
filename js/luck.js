// JavaScript source code

var student = [
    "赵春成", "阮怡琳", "吉芳墨", "杨峥", "汪文凯",
    "王一然", "张小骞", "郝博文", "郭沐阳", "梁家籍",     //10
    "金思源", "张驰", "王星臣", "刘派", "朱浩民",
    "唐秀彬", "赵蔓", "褚静雯", "康怀予",
    "张贺翔", "王姜凝", "高艺维", "李瑞琪", "邹来",
    "李坤阳", "关斯予", "刘桐辰", "赵禧萌", "杨浩",       //30(-1)
    "李舰潮", "唐睿泽", "张晨雨", "张鑫茜", "周奕男",
    "纪威名", "马雨石", "莫皖贻", "韩金川", "王馨蕙",
    "刘洋辰", "孟庆侁", "冯佳宝", "柳佳丽", "闫微",
    "白翔", "史佳瑞", "张翀齐", "赵羡麟", "杨清宇",       //50(-1)
    "前桌", "后桌", "左边", "右边"
];


var subject = [
    "语文", "数学", "英语", "物理", "化学", "生物"
];

var number = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
    "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
    "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
    "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
    "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
];

var food = [
    "汉堡", "披萨", "麻辣烫", "螺蛳粉", "酸辣粉",
    "沙拉和三明治", "小烧烤", "小龙虾", "炸鸡", "热粥", "炒饭",
    "咖喱", "海鲜", "盖浇", "辣", "素", "我要减肥", "意面", "米线",
    "饺子", "包子", "火烧", "馄饨", "汤圆", "馅饼or盒子",
    "吊炉饼葱花饼", "凉皮", "寿司", "烤肉", "火锅", "蛋糕",
    "热面", "冷面", "凉拌面", "打糕", "肉夹馍", "滋补汤",
    "重庆小面", "兰州拉面", "油茶面", "烤鱼", "牛排", "清真",
    "港式", "粤菜", "砂锅", "竹筒饭", "日式", "韩式", "晚茶",
    "奶茶", "咖啡", "果汁"," 凉水", "甜甜花酿鸡", "二十食堂", "再等一等"
];
var rosterOrdinary = food;
var rosterCandidate = [];
var rosterSelected = [];

var divMember = [];



//控制概率

function modifyProb() {

}

function probModify_Submit() {

}
function probModify_Add() {

}
function probModify_Delete() {

}

//控制抽
var randomnum=0;
function select() {
    if (randomnum < rosterCandidate.length)
        divMember[randomnum].style.backgroundColor = "#c992be1f";
    randomnum = Math.floor(Math.random() * rosterCandidate.length);
    divMember[randomnum].style.backgroundColor = "#c992bea1";
} 


//控制按钮
var time;
var switchStatue = true;
function switchRunPause() {
    switchStatue ? run() : pause();
    switchStatue = !switchStatue;
}
function run() {
    Element("btnRunPause").innerHTML = "抽";
    batchDraw("member", rosterCandidate, "memberCandidate", true);
    divMember = document.getElementsByClassName("member");
    select();
    time = setInterval("select()", 200);
}
function pause() {
    Element("btnRunPause").innerHTML = "开始";
    clearInterval(time);
    rosterSelected.push(randomnum);
    for (let i = 0; i < rosterSelected.length - 1; i++) {
        if (randomnum == rosterSelected[i]) {
            rosterSelected.pop();
            break;
        }
    }
    if (!repeatStatue) {
        for (let i = 0; i < rosterSelected.length; i++) {
            rosterCandidate.splice(rosterSelected[i], 1);
        }
        rosterSelected = [];
    }
}

var repeatStatue = true;
function repeatable() {
    Element("btnRepeatable").innerHTML = (repeatStatue ? "去重已开" : "去重已关");
    repeatStatue = !repeatStatue;
}

function clearMemory() {
    rosterCandidate = deepClone(rosterOrdinary);
    rosterSelected = [];
    batchDraw("member", rosterCandidate, "memberCandidate", true);

}

//控制展示
batchDraw("member", rosterOrdinary, "memberCandidate", true);
function batchDraw(contentClass, content, cantainerId, ifClear) {
    if (ifClear)
        Element(cantainerId).innerHTML = "";

    for (let i = 0; i < content.length; i++) {
        let div = document.createElement("div");
 //       div.id = contentIdHead + i;
        div.className = contentClass;
        div.innerHTML = content[i];
        Element(cantainerId).appendChild(div);
    }
}

//导文件
function importFile(obj) {
    try {
        if (!obj.files)
            return;
        var IMPORTFILE_MAXSIZE = 2048;
        var suffix = obj.files[0].name.split(".")[1];
        if (suffix != 'txt') {
            alert("不支持此格式的文件");
            return;
        }
        if (obj.files[0].size / 1024 > IMPORTFILE_MAXSIZE) {
            alert("文件过大，已超过2M");
            return;
        }
        if (obj.files.length > 1) {
            alert("只能选择一个文件");
            return;
        }
    }
    finally { }
    
    var reader = new FileReader();
    reader.readAsText(obj.files[0], "UTF-8");
    reader.onload = function (e) {
        var rosterFileContent = e.target.result;

        rosterOrdinary = rosterFileContent.split(/[\n]/g);
        switchStatue = true;
        pause();
        clearMemory();
    }
}

//关弹窗
function closeAlert(alertName){
    document.getElementsByClassName(alertName)[0].style.display = "none";
}

//变背景
var bgColorStatue = 0;
var bgColorBackup = [
    "linear-gradient(44deg, #7e1671 0%, #2177b8 99%, #11659a 100%)",
    "#37620f",
    "#f7da94",
    "#accbee",
    "#efefef",
    "#707070",
    "#d59dac"
];
function changeBgcolor() {
    bgColorStatue < bgColorBackup.length ? bgColorStatue++ : bgColorStatue = 0;
    document.body.style.background = bgColorBackup[bgColorStatue];
}

window.onload = function () {
    rosterCandidate = student;
    //判断点击的元素
    var rosterListListen = document.getElementsByClassName("roster");
    for (let i = 0; i < rosterListListen.length; i++) {
        rosterListListen[i].onclick = function () {
            switch (i) {
                case 0: 
                    rosterOrdinary = food;
                    switchStatue = true;
                    pause();
                    clearMemory();
                    break;
                case 1:
                    rosterOrdinary = student;
                    switchStatue = true;
                    pause();
                    clearMemory();
                    break;
                case 2:
                    rosterOrdinary = number;
                    switchStatue = true;
                    pause();
                    clearMemory();
                    break;
                case 3:
                    rosterOrdinary = subject;
                    switchStatue = true;
                    pause();
                    clearMemory();
                    break;
                case 4:
                    document.getElementsByClassName("importFile")[0].style.display = "block";
                    break;
            }
        }
    }
}
