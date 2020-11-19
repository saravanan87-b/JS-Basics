//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

//Print SUM of all numbers from given ARRAY using Normal JavaScript Function
function printSumOfArray(arr){
	var sum = 0;
	for(let i=0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum;
}
console.log("Normal Function ==> "+printSumOfArray([1,2,3,4,5,6,7,8,9,10]));


//Print SUM of all numbers from given ARRAY using Anonymous Function
var printSumOfArray = function(arr){
	var out = arr.reduce((acc,item)=>{acc+=item;return acc;},0);
	return out;
}
console.log("Anonymous Function ==> "+printSumOfArray([1,2,3,4,5,6,7,8,9,10]));
//console.log("Anonymous Function ==> "+printSumOfArray);


//Print SUM of all numbers from given ARRAY using IIFE(Immediate Invoked Function Expression)
var printSumOfArray = (function(arr) {
	var out = arr.reduce((acc,item)=>{acc+=item;return acc;},0);
	return out;
})([1,2,3,4,5,6,7,8,9,10]);
console.log("IIFE Function ==> "+printSumOfArray);


//Print SUM of all numbers from given ARRAY using using Arrow Function
var arr = [1,2,3,4,5,6,7,8,9,10];
(()=>{
	var out = arr.reduce((acc,item)=>{acc+=item;return acc;},0);
	console.log("Arrow Function ==> "+out);
})();