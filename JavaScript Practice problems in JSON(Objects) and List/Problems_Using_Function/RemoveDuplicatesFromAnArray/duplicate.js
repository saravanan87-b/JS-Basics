//Print Remove duplicates from an given array using Normal JavaScript Function
function removeDuplicatesUsingFilter(arr){
	var out = arr.filter((item, index) => arr.indexOf(item) === index);
	return out.join(' ');
}
console.log("Normal Function Using Filter ==> "+removeDuplicatesUsingFilter([8,0,0,1,1,2,7,3,3,4,4,5,8,7]));
//arr.filter((item, index) => arr.indexOf(item) !== index);

//Print Remove duplicates from an given array using Normal JavaScript Function
function removeDuplicatesUsingReduce(arr){
	var out = arr.reduce((acc,item) => {
		if(!acc.includes(item)){
			acc.push(item);
		}
	  return acc;
	},[]);
	return out.join(' ');
}
console.log("Normal Function Using Reduce ==> "+removeDuplicatesUsingReduce([8,0,0,1,1,2,7,3,3,4,4,5,8,7]));

//Print Remove duplicates from an given array using Anonymous Function
var removeDuplicates = function(arr){
	
}