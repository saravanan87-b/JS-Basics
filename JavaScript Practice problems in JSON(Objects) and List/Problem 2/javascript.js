var obj = {name : "RajiniKanth", age : 33, hasPets : false};
this.printAllKeys(obj);

function printAllKeys(obj) {
 let result=[];
 var Keys=Object.keys(obj);
 for(let item of Keys){
	 result.push(item);
 }
 console.log(result);
}