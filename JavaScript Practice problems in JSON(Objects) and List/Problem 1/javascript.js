var obj = {name : "RajiniKanth", age : 33, hasPets : false};
this.printAllValues(obj);

function printAllValues(obj) {
	let result = [];
	var Keys=Object.keys(obj);
	for(let item of Keys){
		result.push(obj[item]);
	}
	console.log(result);
}