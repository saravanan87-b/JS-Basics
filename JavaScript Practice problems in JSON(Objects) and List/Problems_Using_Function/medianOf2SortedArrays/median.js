//Print median of two sorted Arrays using Normal JavaScript Function
function medianOfTwoSortedArrays(arr1,arr2){
	var sortedArray = arr1.concat(arr2).sort((x,y)=> x-y);
	var mid = parseInt(sortedArray.length/2);
	var out = sortedArray.length%2===0 ? parseInt((sortedArray[mid-1]+sortedArray[mid])/2) : sortedArray[mid];
	return out;
}
console.log("Normal Function ==> "+medianOfTwoSortedArrays([4,2,1,3],[10,5,6,9,7,8]));
//console.log("Normal Function ==> "+medianOfTwoSortedArrays([1,3],[2]));
//console.log("Normal Function ==> "+medianOfTwoSortedArrays([1,2],[3,4]));
//console.log("Normal Function ==> "+medianOfTwoSortedArrays([0,0],[0,0]));
//console.log("Normal Function ==> "+medianOfTwoSortedArrays([],[1]));
//console.log("Normal Function ==> "+medianOfTwoSortedArrays([2],[]));


//Print median of two sorted Arrays using Anonymous Function
var medianOfTwoSortedArrays = function(arr1,arr2){
	var sortedArray = arr1.concat(arr2).sort((x,y)=>x-y);
	var mid = parseInt(sortedArray.length/2);
	var out = sortedArray.length%2===0 ? parseInt((sortedArray[mid-1]+sortedArray[mid])/2) : sortedArray[mid];
	return out;
}
//console.log("Anonymous Function ==> "+medianOfTwoSortedArrays);
console.log("Anonymous Function ==> "+medianOfTwoSortedArrays([4,2,1,3],[10,5,6,9,7,8]));
//console.log("Anonymous Function ==> "+medianOfTwoSortedArrays([1,3],[2]));
//console.log("Anonymous Function ==> "+medianOfTwoSortedArrays([1,2],[3,4]));
//console.log("Anonymous Function ==> "+medianOfTwoSortedArrays([0,0],[0,0]));
//console.log("Anonymous Function ==> "+medianOfTwoSortedArrays([],[1]));
//console.log("Anonymous Function ==> "+medianOfTwoSortedArrays([2],[]));


//Print median of two sorted Arrays using IIFE(Immediate Invoked Function Expression)
var medianOfTwoSortedArrays = (function(arr1,arr2) {
	var sortedArray = arr1.concat(arr2).sort((x,y)=>x-y);
	var mid = parseInt(sortedArray.length/2);
	var out = sortedArray.length%2===0 ? parseInt((sortedArray[mid-1]+sortedArray[mid])/2) : sortedArray[mid];
	return out;
})([4,2,1,3],[10,5,6,9,7,8]);
console.log("IIFE Function ==> "+medianOfTwoSortedArrays);

//Print median of two sorted Arrays using using Arrow Function
var arr1 = [4,2,1,3]; var arr2 = [10,5,6,9,7,8];
(() => {
	var sortedArray = arr1.concat(arr2).sort((x,y)=>x-y);
	var mid = parseInt(sortedArray.length/2);
	var out = sortedArray.length%2===0 ? parseInt((sortedArray[mid-1]+sortedArray[mid])/2) : sortedArray[mid];
	console.log("Arrow Function ==> "+out);
})();