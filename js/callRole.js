
var student = [
	"赵春成", "阮怡琳", "吉芳墨", "杨峥", "汪文凯",
	"王一然", "张小骞", "郝博文", "郭沐阳", "梁家籍",
	"金思源", "张驰", "王星臣", "刘派", "朱浩民",
	"唐秀彬", "赵蔓", "褚静雯", "康怀予",
	"张贺翔", "王姜凝", "高艺维", "李瑞琪", "邹来",
	"李坤阳", "关斯予", "刘桐辰", "赵禧萌", "杨浩",
	"李舰潮", "唐睿泽", "张晨雨", "张鑫茜", "周奕男",
	"纪威名", "马雨石", "莫皖贻", "韩金川", "王馨蕙",
	"刘洋辰", "孟庆侁", "冯佳宝", "柳佳丽", "闫微",
	"白翔", "史佳瑞", "张翀齐",
	"前桌", "后桌", "左边", "右边"
];

var probChanged = [];



var teacher = [
	"语文", "数学", "英语", "物理", "化学", "生物"
];

var number = [
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
	"11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
	"21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
	"31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
	"41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
	"51", "52", "53", "54", "55", "56", "56", "58", "59", "60"
];





var real = student;
var selected = -1;
var selectedArr;	// 为不重复选项而定义，值为剩下没有被选过的

var time;
var repeat = true;	 // true：可重复
var turnBool = true; // true：未开始状态




function dataclear() {
	selectedArr = deepClone(real);

	Element("popTip").innerHTML = "已重置名单";

	Element("popTip").style.right = "-10px";
	setTimeout("Element('popTip').style.right = '-290px'", 600);

	Element("container-role-left").className = "container-role-left role-up";
	unavailable(Element("container-role-result"));
}

function repeatSwitch() {
	repeat = !repeat;
	if (repeat) {
		Element("btnRepeatSwitch").innerHTML = "<p style='font-size: 16px;'>当前状态：</p> <br />可重复";
		Element("btnRepeatSwitch").style.background = "#accbee";
		dataclear();
	}
	else {
		Element("btnRepeatSwitch").innerHTML = "<p style='font-size: 16px;'>当前状态：</p> <br />不可重复";
		Element("btnRepeatSwitch").style.background = "#acb3ee";

	}

}

function call() {

	//num : 产生的随机数

	if (selected != -1) {
		Element("role" + selected).className = 'role-default';
	}
	// 分子
	let probRandom = Math.floor(Math.random() * 1000);
	// 设一个数prob，生成的probRandom小于这个数则选定这个人
	// 则概率x为 prob / 1000 + (1000 - prob) / (1000 * 48)
	// x = 48000 / (47prob + 1000)
	// prob = (48000 / x  - 1000) / 47

	var setted = [
		{
			order: 0, // order不是学号
			prob: 0 // x = 48 ,prob = 0
		}
		/*		,
				{
					order: 0, // order不是学号
					prob: 0 // x = 48 ,prob = 0
				}
		*/
	]
	//	probChanged = setted;
	let last = Math.floor(Math.random() * ((repeat ? real : selectedArr).length));
	for (let i = 0; i < probChanged.length;i++) {
		if (probChanged[i].prob != null && probChanged[i].order >= 0)
			last = probRandom <= probChanged[i].prob ? probChanged[i].order : last;
	}
	selected = last;
	Element("role" + selected).className = 'role-selected role-default';
}

function Turn() {
	turnBool ? start() : pause();
}

function start() {
	time = setInterval("call()", 100);
	Element("btnClear").disabled = "disabled";

	turnBool = false;
	Element("btnTurn").innerHTML = "停";
}
function pause() {
	let selectedName;
	//  停止抽
	clearInterval(time);
	//  结果可见
	available(Element("container-role-result"));
	Element("container-role-left").className = "container-role-left role-down";
	//  显示，分重复与不重复
	if (repeat) {
		selectedName = real[selected];
		draw(real);
		Element("container-role-result").innerHTML = (selectedName);


	}
	else {
		selectedName = selectedArr[selected];
		draw(selectedArr);
		Element("container-role-result").innerHTML = (selectedName);
	}
	//  删除被抽中的项
	selectedArr.forEach(function (item, index, arr) {
		if (item == selectedName) {
			arr.splice(index, 1);
		}
	});
	//  清空开关
	Element("btnClear").removeAttribute("disabled");
	//  开始/停开关
	turnBool = true;
	Element("btnTurn").innerHTML = "开始";
}


function draw(toDraw) {

	Element("container-role-left").innerHTML = "";
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

	clearInterval(time);
	real = tab;
	selectedArr = deepClone(real);
	draw(real);
	selected = -1;
	Element("container-role-left").className = "container-role-left role-up";
	unavailable(Element("container-role-result"));
}

window.onload = function () {
	selectedArr = deepClone(real);
	dataclear();
}

var probPanelBool = false;
var probItem = 1;

function prob() {

	probPanelBool ? unavailable(Element("probPanal")) : available(Element("probPanal"));
	probPanelBool = !probPanelBool;

}

function probSubmit() {
	let probSum = 0;
	let lastprobChanged = deepClone(probChanged);
	let lastprobSum = 0;
	for (let i = 0; i < probItem; i++) {
		var orderi = Element("order" + i)
		var probi = Element("prob" + i)
		if (orderi != null && probi != null) {
			probChanged[i] = {
				order: orderi.value - 1,
				prob: (48000 / probi.value - 1000) / 47 + probSum
			};
			lastprobSum = probSum;
			probSum += probChanged[i].prob;
		}
	}

	probChanged.reverse(probChanged);

	if (lastprobSum <= 1000) {
		Element("popTip").innerHTML = "提交成功";

		Element("popTip").style.right = "-10px";
		setTimeout("Element('popTip').style.right = '-290px'", 1000);

	}
	else {
		probChanged = deepClone(lastprobChanged);
		Element("popTip").innerHTML = "我算得概率就是比1大";

		Element("popTip").style.right = "-10px";
		setTimeout("Element('popTip').style.right = '-290px'", 1000);
	}
}

function probItemAdd() {
	if (probItem <= 10) {


		let div = document.createElement("div");
		div.className = "prob-group";
		div.innerHTML = "<input id=\"order" + probItem + "\" type=\"text\" placeholder=\"填序号\" aria-describedby=\"序数\"> \
		<input id=\"prob"+ probItem + "\" type=\"text\" placeholder=\"填概率的倒数\" aria-describedby=\"分母\">";

		probItem += 1;
		//将小div放在父容器中
		Element("probInputGroup").appendChild(div);

	}
	else {

		Element("popTip").innerHTML = "十多个，够了";

		Element("popTip").style.right = "-10px";
		setTimeout("Element('popTip').style.right = '-290px'", 600);
	}

	//Element("popTip").innerHTML = "";

	//Element("popTip").style.right = "-10px";
	//setTimeout("Element('popTip').style.right = '-290px'", 600);
}

function probItemRemove() {
	Element("popTip").innerHTML = "暂还删不了，试试刷新";

	Element("popTip").style.right = "-10px";
	setTimeout("Element('popTip').style.right = '-290px'", 1200);
}
