//Print Rotate an Array by k times from an given array using Normal JavaScript Function
function rotateArray(arr){
	let k=3;
	k=k%arr.length;
	let no=arr.length-k;
	for(let i=0;i<no;i++)
	{
		let element=arr.shift();
		arr.push(element)
	}
	return arr;
}
console.log(rotateArray([1,2,3,4,5,6]));

//Print Rotate an Array by k times from an given array using Anonymous Function
var rotateArray = function(arr){
	let k=3;
	k = k%arr.length;
	let no = arr.length-k;
	for(let i=0;i<no;i++){
		let element=arr.shift();
		arr.push(element);
	}
	return arr;
}
console.log(rotateArray([1,2,3,4,5,6]));