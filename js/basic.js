function Element(id) {
    return document.getElementById(id);
}

//@param condition 过滤条件
//@param data 需要过滤的数据
const filter = (condition, data) => {
    return data.filter(item => {
        return Object.keys(condition).every(key => {
            return String(item[key]).toLowerCase().includes(String(condition[key]).trim().toLowerCase())
        })
    })
}

// 定义一个深拷贝函数  接收目标target参数
function deepClone(target) {
    // 定义一个变量
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = []; // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
            // 判断如果当前的值是null的话；直接赋值为null
        } else if (target === null) {
            result = null;
            // 判断如果当前的值是一个RegExp对象的话，直接赋值    
        } else if (target.constructor === RegExp) {
            result = target;
        } else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {};
            for (let i in target) {
                result[i] = deepClone(target[i]);
            }
        }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target;
    }
    // 返回最终结果
    return result;
}

function available(object) {
    object.style.transform = "translate(0,0) scale(1, 1)";
    object.style.opacity = "1";
}
function unavailable(object) {
    object.style.transform = "translate(50%,-50%) scale(0,0)";
    object.style.opacity = "0";
}
