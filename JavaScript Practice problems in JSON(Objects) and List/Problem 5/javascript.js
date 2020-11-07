var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
console.log(this.fromListToObject(arr));
function fromListToObject(arr) {
 var newObject = {};
 for(let item in arr){
	 let array = arr[item];
	 newObject[array[0]]=array[1];
 }
 return newObject;
}


