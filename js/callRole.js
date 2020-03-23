
var student = [
	"赵春成", "阮怡琳", "吉芳墨", "杨峥", "汪文凯",
	"王一然", "张小骞", "郝博文", "郭沐阳", "梁家籍",
	"金思源", "张驰", "王星臣", "刘派", "朱浩民",
	"唐秀彬", "赵蔓", "郑晰兮", "褚静雯", "康怀予",
	"张贺翔", "王姜凝", "高艺维", "李瑞琪", "邹来",
	"李坤阳", "关斯予", "刘桐辰", "赵禧萌", "杨浩",
	"李舰潮", "唐睿泽", "张晨雨", "张鑫茜", "周奕男",
	"纪威名", "马雨石", "莫皖贻", "韩金川", "王馨蕙",
	"刘洋辰", "孟庆侁", "冯佳宝", "柳佳丽", "闫微",
	"白翔", "史佳瑞", "张翀齐"
];

var teacher = [
	"语文", "数学", "英语", "物理", "化学", "生物"
];

var number = [
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
	"11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
	"21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
	"31", "32", "33", "34", "35", "36", "37", "38", "39", "40"
];





var real = student;
var selected = -1;
var selectedArr;	// 为不重复选项而定义，值为剩下没有被选过的

var time;
var repeat = true;	 // true：可重复
var turnBool = true; // true：未开始状态



function dataclear() {
	selectedArr = deepClone(real);

	draw(repeat ? real : selectedArr);
	Element("clearDone").style.right = "-10px";
	setTimeout("Element('clearDone').style.right = '-290px'", 600);

}

function repeatSwitch() {
	repeat = !repeat;
	if (repeat) {
		Element("btnRepeatSwitch").innerHTML = "可重复(当前)";
		Element("btnRepeatSwitch").style.background = "#accbee";
		dataclear();
	}
	else {
		Element("btnRepeatSwitch").innerHTML = "不重复(当前)";
		Element("btnRepeatSwitch").style.background = "#acb3ee";

	}

}

function call() {

	//num : 产生的随机数

	if (selected != -1) {
		Element("role" + selected).className = 'role-default';
	}
	let num = Math.floor(Math.random() * ((repeat ? real : selectedArr).length));

	selected = num;

	Element("role" + num).className = 'role-selected role-default';
}

function Turn() {
	turnBool ? start() : pause();
}

function start() {
	time = setInterval("call()", 100);
	Element("btnClear").disabled = "disabled";
//	Element("btnStart").disabled = "disabled";
//	Element("btnPause").removeAttribute("disabled");

	turnBool = false;
	Element("btnTurn").innerHTML = "停";
}
function pause() {
	clearInterval(time);


	available(Element("container-role-result"));
	if (repeat) {
		draw(real);
		Element("container-role-result").innerHTML = (real[selected]);
	}
	else {
		draw(selectedArr);
		Element("container-role-result").innerHTML = (selectedArr[selected]);
	}
	selectedArr.splice(selected, 1);

//	Element("btnPause").disabled = "disabled";
//	Element("btnStart").removeAttribute("disabled");
	Element("btnClear").removeAttribute("disabled");

	turnBool = true;
	Element("btnTurn").innerHTML = "开始";
}


function draw(toDraw) {

	Element("container-role-left").innerHTML = "";
//	if (Element("btnStart").disabled == "disabled" && Element("btnStart").removeAttribute("disabled"));
	clearInterval(time);

	for (let i = 0; i < toDraw.length; i++) {
		let div = document.createElement("div");
		div.id = "role" + i;
		div.className = "role-default";
		div.innerHTML = toDraw[i];
		//将小div放在父容器中
		Element("container-role-left").appendChild(div);
	}
}

draw(real);

function tabOnClick(tab, tabId) {
	Element(tabId).className = "active";
	real = tab;
	selectedArr = deepClone(real);
	draw(real);
	selected = -1;
}

window.onload = function(){
	selectedArr = deepClone(real);
}
