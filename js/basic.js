function Element(id){
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