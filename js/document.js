// JavaScript source code

var condition = {};
var subject = new Array("语文", "数学", "英语", "物理", "化学", "生物");
// 0 语文
// 1 数学
// 2 英语
// 3 物理
// 4 化学
// 5 生物


var li_NoMore = document.createElement("li");
li_NoMore.className = "result";
li_NoMore.innerHTML += "没了，就上面这么多";
var li_Nothing = document.createElement("li");
li_Nothing.className = "result";
li_Nothing.innerHTML += "没传";


window.onload = function () {
    draw();
}

function videoSelect() {

    let results = filter(condition, video);
    Element("result-content").innerHTML = "";

    if (results == 0) {
        Element("result-content").appendChild(li_Nothing);
    }
    else {
        Element("result-content").innerHTML = "";
        for (var k = 0; k < results.length; k++) {
            var li = document.createElement("li");
            li.className = "result";
            li.innerHTML = "<div class='result-date'><p> " + results[k].month + "." + results[k].day + "</p></div><div class='result-subject' onclick='alert(\"提取码：" + results[k].code + "\");window.open(\"https://pan.baidu.com/s/" + results[k].href + "\");'><h5>" + subject[results[k].subject] + (results[k].night ? "<small>(晚课)</small>" : "") + "</h5></div><p>提取码：<strong>" + results[k].code + "</strong></p>";
            li.data = results[k];
            Element("result-content").appendChild(li);
        }
        Element("result-content").appendChild(li_NoMore);
    }
}

const video = [
    {
        month: 3,
        day: 3,
        subject: 4,
        href: "10zFTZdg89uA_Dbj-WeCuJQ",
        code: "6ywz",
        night: false
    },
    {
        month: 3,
        day: 3,
        subject: 5,
        href: "1lKmLCteNFGKxmGWAy-ItNQ",
        code: "hp8d",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 1,
        href: "1ovQsWSWr_uBq1zEsArsjxA",
        code: "ecrq",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 2,
        href: "1eaoi297exZvRbUAnvkgEhw",
        code: "qr18",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 2,
        href: "1Lh84CVyXORnZw4d2_bqENA",
        code: "ozdn",
        night: true
    },
    {
        month: 3,
        day: 4,
        subject: 3,
        href: "1lejfsrA32lYV8oasK9Jsdw",
        code: "ttq9",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 4,
        href: "1vAnxDAlC0p7r8Z_amGQ62A",
        code: "swil",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 5,
        href: "1NpGcSAFRveAFjzyqUYwACg",
        code: "m189",
        night: false
    },
    {
        month: 3,
        day: 5,
        subject: 2,
        href: "1oAZo5HEHXkZz_EhvKskEaA",
        code: "xjel",
        night: false
    },
    {
        month: 3,
        day: 5,
        subject: 3,
        href: "1HUTSeO72oYdlbYiNPt-r5w",
        code: "1htm",
        night: true
    },
    {
        month: 3,
        day: 5,
        subject: 1,
        href: "1bqyIn-ktLX_jpQEeS606nw",
        code: "fvsr",
        night: false
    },
    {
        month: 3,
        day: 5,
        subject: 5,
        href: "1fw532KaEBgRjKUAWQMek7A",
        code: "t7p3",
        night: false
    },
    {
        month: 3,
        day: 5,
        subject: 0,
        href: "16Yh61Z9RJhAbQssYTnrtAA",
        code: "yoxf",
        night: false
    },
    {
        month: 3,
        day: 6,
        subject: 5,
        href: "1MU-iZwnfiR6aHb3wtKGEiQ",
        code: "tcjn",
        night: false
    },
    {
        month: 3,
        day: 6,
        subject: 2,
        href: "155ti3498Jq4JuH6f-E82Mg",
        code: "wkds",
        night: false
    }, 
    {
        month: 3,
        day: 7,
        subject: 1,
        href: "1qYn7a-L9NL2-iCS1o-_AAg",
        code: "zdmr",
        night: false
    },
    {
        month: 3,
        day: 7,
        subject: 2,
        href: "197WRAsRqCfe8Z18W8aCrtA",
        code: "8rma",
        night: false
    },
    {
        month: 3,
        day: 7,
        subject: 4,
        href: "1NZosfH2j6XDMmwSZ5TANLg",
        code: "6gqi",
        night: false
    },
    {
        month: 3,
        day: 7,
        subject: 3,
        href: "1UH6XNvBxGm2bW9uHxf3qMw",
        code: "1ftd",
        night: false
    }, 
    {
        month: 3,
        day: 7,
        subject: 5,
        href: "1232iPLPyfEBOcPV-lE-yiQ",
        code: "lyc7",
        night: true
    }


    /*
     * 
     * 模板
     ,
    {
        month: 3,
        day: daydaydaydaydaydaydaydaydaydaydaydaydaydaydaydaydayday,
        subject: subjectsubjectsubjectsubjectsubjectsubjectsubject,
        href: "hrefhrefhrefhrefhrefhrefhrefhrefhrefhref",
        code: "codecodecodecodecodecodecodecodecodecode",
        night: false 
    }
    night 或是 true 
    */
];

function changeCondition(ifDelete, item, value, dropdownID, valueString) {

    ifDelete ? (delete condition[item]) : (condition[item] = value);
    videoSelect();
    Element(dropdownID).innerHTML = valueString;
}


function draw() {


    var d = new Date();

    var day = d.getDate();
    var month = d.getMonth() + 1;




    for (var i = 3; i <= day; i++) {
        var li = document.createElement("li");
        li.id = "date" + month + "-" + i;
        li.className = "date";
        li.innerHTML = month + ". " + i;
        li.data = i;

        Element("dropdown-content-date").appendChild(li);
        li.addEventListener("click", function (event) {
            changeCondition(false, "day", event.target.data, "dropdown-date-title", event.target.data + "号");
        });

    }
    Element("date" + month + "-" + day).innerHTML += "(今天)";
    for (var j = 0; j < subject.length; j++) {
        var li = document.createElement("li");
        li.id = "subject" + j;
        li.className = "subject";
        li.innerHTML = subject[j];
        li.data = j;

        Element("dropdown-content-subject").appendChild(li);
        li.addEventListener("click", function (event) {
            changeCondition(false, "subject", event.target.data, "dropdown-subject-title", subject[event.target.data]);
        });
    }
    for (var k = 0; k < video.length; k++) {
        var li = document.createElement("li");
        li.className = "result";
        li.innerHTML = "<div class='result-date'><p> " + video[k].month + "." + video[k].day + "</p></div><div class='result-subject' onclick='alert(\"提取码：" + video[k].code + "\");window.open(\"https://pan.baidu.com/s/" + video[k].href + "\");'><h5>" + subject[video[k].subject] + (video[k].night ? "<small>(晚课)</small>" : "") + "</h5></div><p>提取码：<strong>" + video[k].code + "</strong></p>";
        li.data = video[k];
        Element("result-content").appendChild(li);

    }
}
