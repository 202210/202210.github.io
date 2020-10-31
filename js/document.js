// JavaScript source code

var condition = {};
var subject = new Array("语文", "数学", "英语", "物理", "化学", "生物", "**");
// 0 语文
// 1 数学
// 2 英语
// 3 物理
// 4 化学
// 5 生物
// 6 经典

var daydaydaydaydaydaydaydaydaydaydaydaydaydaydaydaydayday = -1;
var subjectsubjectsubjectsubjectsubjectsubjectsubject = 0;

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
            li.innerHTML += (results[k].note == "") ? "" : "<small>" + results[k].note + "</small>";
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
        note: "",
        night: false
    },
    {
        month: 3,
        day: 3,
        subject: 5,
        href: "1lKmLCteNFGKxmGWAy-ItNQ",
        code: "hp8d",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 1,
        href: "1ovQsWSWr_uBq1zEsArsjxA",
        code: "ecrq",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 2,
        href: "1eaoi297exZvRbUAnvkgEhw",
        code: "qr18",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 2,
        href: "1Lh84CVyXORnZw4d2_bqENA",
        code: "ozdn",
        note: "",
        night: true
    },
    {
        month: 3,
        day: 4,
        subject: 3,
        href: "1lejfsrA32lYV8oasK9Jsdw",
        code: "ttq9",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 4,
        href: "1vAnxDAlC0p7r8Z_amGQ62A",
        code: "swil",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 4,
        subject: 5,
        href: "1NpGcSAFRveAFjzyqUYwACg",
        code: "m189",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 5,
        subject: 0,
        href: "16Yh61Z9RJhAbQssYTnrtAA",
        code: "yoxf",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 5,
        subject: 1,
        href: "1bqyIn-ktLX_jpQEeS606nw",
        code: "fvsr",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 5,
        subject: 2,
        href: "1oAZo5HEHXkZz_EhvKskEaA",
        code: "xjel",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 5,
        subject: 3,
        href: "1HUTSeO72oYdlbYiNPt-r5w",
        code: "1htm",
        note: "",
        night: true
    },
    {
        month: 3,
        day: 5,
        subject: 5,
        href: "1fw532KaEBgRjKUAWQMek7A",
        code: "t7p3",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 6,
        subject: 2,
        href: "155ti3498Jq4JuH6f-E82Mg",
        code: "wkds",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 6,
        subject: 5,
        href: "1MU-iZwnfiR6aHb3wtKGEiQ",
        code: "tcjn",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 7,
        subject: 1,
        href: "1qYn7a-L9NL2-iCS1o-_AAg",
        code: "zdmr",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 7,
        subject: 2,
        href: "197WRAsRqCfe8Z18W8aCrtA",
        code: "8rma",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 7,
        subject: 3,
        href: "1UH6XNvBxGm2bW9uHxf3qMw",
        code: "1ftd",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 7,
        subject: 4,
        href: "1NZosfH2j6XDMmwSZ5TANLg",
        code: "6gqi",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 7,
        subject: 5,
        href: "1232iPLPyfEBOcPV-lE-yiQ",
        code: "lyc7",
        note: "",
        night: true
    },
    {
        month: 3,
        day: 9,
        subject: 0,
        href: "1sDdaOOOqriX33Cn6jVo-Ig ",
        code: "5wq8",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 9,
        subject: 1,
        href: "1Jr8I1IPRJA23fnuFgioXBw",
        code: "7p8k",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 9,
        subject: 2,
        href: "1cWdk68BosoZjk3QVHJbVHA",
        code: "vgug",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 9,
        subject: 3,
        href: "15OKQH6qfHnGtsPZd3htlww",
        code: "9zcu",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 9,
        subject: 5,
        href: "1D3CoE_QVIPjdInbiDwDqCQ",
        code: "281g",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 10,
        subject: 1,
        href: "1GPmNGXuGCzHc4gBfZjJS3g",
        code: "00vc",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 10,
        subject: 1,
        href: "17vnv-xnR3x_qZL8YPWtGTQ",
        code: "rbie",
        note: "",
        night: true
    },
    {
        month: 3,
        day: 10,
        subject: 2,
        href: "19bU8LD9FjpsisDK0wzxOpQ",
        code: "egpm",
        note: "", night: false
    },
    {
        month: 3,
        day: 10,
        subject: 3,
        href: "1Xxtoyz81Xqe8BU8F5Cpp5Q",
        code: "h7t7",
        note: "", night: false
    },
    {
        month: 3,
        day: 10,
        subject: 4,
        href: "1xOy9oi3WhiC6rflsQ4TL7w",
        code: "pk1m",
        note: "", night: false
    },
    {
        month: 3,
        day: 10,
        subject: 5,
        href: "1KbrhV5_xB1l0N3McQlPJwA",
        code: "obf6",
        note: "", night: false
    },
    {
        month: 3,
        day: 11,
        subject: 0,
        href: "1zxI_GYboAsahwGrGQZJsGg",
        code: "95ik",
        note: "", night: false
    },
    {
        month: 3,
        day: 11,
        subject: 1,
        href: "1_QA8PGxZVK0EQzxwT4fsLw",
        code: "57db",
        note: "", night: false
    },
    {
        month: 3,
        day: 11,
        subject: 2,
        href: "1Yj9tYx_QojpGCXh6-y_kOA ",
        code: "n1gd",
        note: "", night: false
    },
    {
        month: 3,
        day: 11,
        subject: 2,
        href: "1Xc21u8gf8w_cWUyNvtM4Yw",
        code: "pb04",
        note: "", night: true
    },
    {
        month: 3,
        day: 11,
        subject: 4,
        href: "1Uar4Po6uL7cyZSDmZ7f2zw",
        code: "0hsl",
        note: "", night: false
    },
    {
        month: 3,
        day: 11,
        subject: 5,
        href: "10TIMncZjrDShV_7rCdkgTw",
        code: "f2yq",
        note: "", night: false
    },
    {
        month: 3,
        day: 12,
        subject: 0,
        href: "1rNUxmyuN1uYz7TeSbPa75w",
        code: "vcx9",
        note: "", night: false
    },
    {
        month: 3,
        day: 12,
        subject: 3,
        href: "1DksxPMLDhwkg6mg1epxvcA",
        code: "npr4",
        note: "", night: true
    },
    {
        month: 3,
        day: 12,
        subject: 4,
        href: "1S7YPO1cKSkQr2fHZMzKfbA",
        code: "xnff",
        note: "", night: false
    },
    {
        month: 3,
        day: 12,
        subject: 5,
        href: "1zL3dJJnyq8lVdAI-cd7arA",
        code: "3gax",
        note: "", night: false
    },
    {
        month: 3,
        day: 13,
        subject: 0,
        href: "1aHNOlwKx1RdX6I3p-KGFxQ",
        code: "fqc7",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 13,
        subject: 3,
        href: "1hOXCXW0i9ASEtw2l2Z6mUg",
        code: "kgsg",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 13,
        subject: 4,
        href: "1w9Fj91R1D-iSFUIkoGj0dA",
        code: "rn9z",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 13,
        subject: 4,
        href: "1cpv1CZ69qezVDfYjAq3V-g",
        code: "rvpe",
        note: "",
        night: true
    },
    {
        month: 3,
        day: 13,
        subject: 5,
        href: "1U98g3VqPLMrVotrrjoHeYA",
        code: "m4ad",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 14,
        subject: 0,
        href: "1HaC_LFYlGIBPKFAMBBmaag",
        code: "mo3m",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 14,
        subject: 1,
        href: "1-Ky313rucBVo09wdzM7JzQ",
        code: "gya5",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 14,
        subject: 2,
        href: "1C73_L7wWsuSzkvKNkh6y1A",
        code: "5ah4",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 14,
        subject: 3,
        href: "1EYIXDvshZufCFZxW8nzGzA",
        code: "34ur",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 14,
        subject: 4,
        href: "1EyH3rtc8Sdqt-MQS8_QedA",
        code: "pdda",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 14,
        subject: 5,
        href: "1MWuF302X3G7UgFBovf3KAQ",
        code: "nszk",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 14,
        subject: 5,
        href: "1j8W6JuKimRwTSxgOl4arXA",
        code: "qr98",
        note: "",
        night: true
    },
    {
        month: 3,
        day: 16,
        subject: 0,
        href: "1-2tp8TP9uYax35Pn_pOagw",
        code: "aljr",
        note: "六国论习题",
        night: false
    },
    {
        month: 3,
        day: 16,
        subject: 0,
        href: "1bYpUxHFwvfm0DuhZYqr3EQ",
        code: "n4dv",
        note: "谏太宗十思疏 开头",
        night: true
    },
    {
        month: 3,
        day: 16,
        subject: 1,
        href: "1_VKAoGrwIvldk4aWH_vztg",
        code: "3dxs",
        note: "正弦函数",
        night: false
    },
    {
        month: 3,
        day: 16,
        subject: 2,
        href: "13cCmlzuwnrAWL6x_xzmNQg",
        code: "880e",
        note: "周测",
        night: false
    },
    {
        month: 3,
        day: 16,
        subject: 3,
        href: "1hN5WdtTFX84Mfb5hGiLqKg",
        code: "jhub",
        note: "生活中的圆周 第二课时",
        night: false
    },
    {
        month: 3,
        day: 16,
        subject: 4,
        href: "1zdZHS_83YARJGZf7WCAadg",
        code: "1zqj",
        note: "氮导学习题",
        night: false
    },
    {
        month: 3,
        day: 16,
        subject: 5,
        href: "1FnJtxzdA_LDdDQUmNR3fTw",
        code: "3pj6",
        note: "自由组合定律题/应用",
        night: false
    },
    {
        month: 3,
        day: 17,
        subject: 0,
        href: "1PZD9t-8lP40A2zLDffv-aQ ",
        code: "wn6h",
        note: "谏太宗 讲完",
        night: false
    },
    {
        month: 3,
        day: 17,
        subject: 1,
        href: "1OLj6RG61STJTGpE5w1RNDQ",
        code: "bep0",
        note: "",
        night: true
    },
    {
        month: 3,
        day: 17,
        subject: 2,
        href: "1F29hMjclJNVP355zCVEvxA",
        code: "xrc2",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 17,
        subject: 3,
        href: "1HTSv1X24KcpOjAh3gX0BBg",
        code: "71td",
        note: "上半截",
        night: false
    },
    {
        month: 3,
        day: 17,
        subject: 3,
        href: "1Js4gw8BnODMCVsxzAmX1OQ",
        code: "y15k",
        note: "下半截",
        night: false
    },
    {
        month: 3,
        day: 17,
        subject: 4,
        href: "1srccsfO7kYnBCzB4B7wIGg",
        code: "si1m",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 17,
        subject: 5,
        href: "19JjlZqyi_Mu9SpE4GWKBag",
        code: "ksec",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 18,
        subject: 3,
        href: "1n7_UyE1r3hq2Hunswm8dWA",
        code: "g1yw",
        note: "前半截 忘开声音了",
        night: false
    },
    {
        month: 3,
        day: 18,
        subject: 3,
        href: "1znmzEuIrKMZXqdjyHwJebg",
        code: "kjbl",
        note: "后半截",
        night: false
    },
    {
        month: 3,
        day: 18,
        subject: 4,
        href: "1Yof73dte_zP0qzFSzHcRNw",
        code: "3g8l",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 18,
        subject: 5,
        href: "1c-_OyDXzIYDkKdWBZVDmVw",
        code: "3igq",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 18,
        subject: 0,
        href: "1bsJ6eX9BtJAyJd-Tnb-s9w",
        code: "kafh",
        note: "谏太宗习题",
        night: false
    },
    {
        month: 3,
        day: 18,
        subject: 1,
        href: "1rOw3X2CKYXGr_LCP0gs61w",
        code: "oah4",
        note: "",
        night: false
    },
    {
        month: 3,
        day: 19,
        subject: 0,
        href: "hrefhrefhrefhrefhrefhrefhrefhrefhrefhref",
        code: "codecodecodecodecodecodecodecodecodecode",
        note: "notenotenotenotenotenotenotenotenotenote",
        night: false
    },
    {
        month: 3,
        day: daydaydaydaydaydaydaydaydaydaydaydaydaydaydaydaydayday,
        subject: subjectsubjectsubjectsubjectsubjectsubjectsubject,
        href: "hrefhrefhrefhrefhrefhrefhrefhrefhrefhref",
        code: "codecodecodecodecodecodecodecodecodecode",
        note: "notenotenotenotenotenotenotenotenotenote",
        night: false
    },
    {
        month: 3,
        day: daydaydaydaydaydaydaydaydaydaydaydaydaydaydaydaydayday,
        subject: subjectsubjectsubjectsubjectsubjectsubjectsubject,
        href: "hrefhrefhrefhrefhrefhrefhrefhrefhrefhref",
        code: "codecodecodecodecodecodecodecodecodecode",
        note: "notenotenotenotenotenotenotenotenotenote",
        night: false
    },
    {
        month: 3,
        day: 19,
        subject: 3,
        href: "1SkWb8ljPoJ4ThMj7h24WQw",
        code: "4clg",
        note: "昨天作业",
        night: false
    },
    {
        month: 3,
        day: 19,
        subject: 4,
        href: "18Ovd3n-n1nAzqOp1r87hAA",
        code: "nuql",
        note: "无机非金属材料",
        night: false
    },
    {
        month: 3,
        day: 19,
        subject: 5,
        href: "1e7YWKZ4gVePxfEEOKbNikQ",
        code: "dx5q",
        note: "习题",
        night: false
    },
    {
        month: 3,
        day: 0,
        subject: 6,
        href: "1ajxlnFgNDsheDLnAkNkRGw",
        code: "et5i",
        note: "没事找抽型+泡他呢",
        night: false
    },
    {
        month: 3,
        day: 0,
        subject: 6,
        href: "1uP9FBtxQoQlnA8oU4wp0Lg",
        code: "9bl5",
        note: "关上你的麦克",
        night: false
    },
    {
        month: 3,
        day: 0,
        subject: 6,
        href: "1BVVoH9NgBuUruaIeb8Xdlg",
        code: "hx2x",
        note: "全文件夹",
        night: false
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
        note: "notenotenotenotenotenotenotenotenotenote",
        night:false 
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
