var arr = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
console.log(this.transformEmployeeData(arr));

function transformEmployeeData(arr){
	
	var tranformEmployeeList = [];
	for(let item in arr){
		
		let array = arr[item];
		let obj = {};
		
		for(let ele in array){
			let out = array[ele];
			obj[out[0]] = out[1];
		}
		tranformEmployeeList.push(obj);
	}
	return tranformEmployeeList;
}