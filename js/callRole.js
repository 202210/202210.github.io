
var student = [
	"纪威名", "郭沐阳", "梁家籍", "李瑞琪", "赵禧萌", 
	"赵春成", "冯佳宝", "关斯予", "韩金川", "唐秀彬", 
	"康怀予", "郝博文", "朱浩民", "邹来",   "马雨石", 
	"褚静雯", "汪文凯", "张驰",   "郑晰兮", "唐睿泽",
	"赵蔓",   "王星臣", "阮怡琳", "王姜凝", "刘洋辰", 
	"孟庆侁", "温婉慧", "王一然", "张贺翔", "李舰潮", 
	"柳佳丽", "高艺维", "周奕男", "张小骞", "李坤阳", 
	"金思源", "吉芳墨", "王馨蕙", "闫微",   "张晨雨", 
	"刘派",   "莫皖贻", "张鑫茜", "张翀齐",  "白翔", 
	"杨峥",   "杨浩",  "史佳瑞", "刘桐辰"
];

var teacher = [
    "유가혜", "Doris", "刀姐", "Cr", "洋"
];

var number = [
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
	"11","12","13","14","15","16","17","18","19","20",
	"21","22","23","24","25","26","27","28","29","30",
	"31","32","33","34","35","36","37","38","39","40"
];





var real = student;
var selected = -1;
var selectedArr;
var time;
var repeat = true;




function call(){			
    if (selected != -1)
	{
        Element("role" + selected).className = 'role-default';
    }
    var num;
	if(repeat){
		num = Math.floor(Math.random() * (real.length));
		selected = num;
	}
    else{
		while(!unrepeat){
			num = Math.floor(Math.random() * (real.length));
			for(var i of selectedArr){
				if(selectedArr[i] == num){
					continue;
				}
				else{
					unrepeat = true;
				}
			}
		}
		selectedArr.push(num);
	}
    Element("role" + num).className = 'role-selected role-default';
}


function start(){
    time = setInterval("call()", 100);
	Element("btnStart").disabled = "disabled";
	Element("btnPause").removeAttribute("disabled");
}
function pause(){
    clearInterval(time);
	Element("role" + selected).className = 'role-selected role-result role-default';
	Element("btnPause").disabled = "disabled";
	Element("btnStart").removeAttribute("disabled");
}


function draw(){
	selected = -1;
	
    Element("container-role-left").innerHTML = "";
	Element("btnStart").removeAttribute("disabled");
    clearInterval(time);

	for (var i = 0; i < real.length; i++)
	{
		var div = document.createElement("div");
		div.id = "role" + i;
		div.className = "role-default";
		div.innerHTML = real[i];
		//将小div放在父容器中
		Element("container-role-left").appendChild(div);
	}
}

draw();

function tabOnClick(tab, tabId){
	Element(tabId).className="active";
	real = tab;
	draw();
}
