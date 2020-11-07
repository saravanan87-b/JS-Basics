var object = {name: "ISRO", age: 35, role: "Scientist"};
this.convertListToObject(object);

function convertListToObject(object){
	let result=[];
	var Keys=Object.keys(object);
	for(let item of Keys){
		let list = [item, object[item]];
		result.push(list);
	}
	console.log(result);
}