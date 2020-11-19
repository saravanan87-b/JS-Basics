//Print ODD numbers using Normal JavaScript Function
function printOddNumbers(arr){
	let out = arr.filter(n => n%2===1);
	return out.join(' ');
}
console.log("Normal Function ==> "+printOddNumbers([0,1,2,3,4,5,6,7,8,9,10]));


//Print ODD numbers using Anonymous function
var printOddNumbers = function (arr){
    let out = arr.filter(n => n%2===1);
    return out.join(' ');
}
console.log("Anonymous Function ==> "+printOddNumbers([0,1,2,3,4,5,6,7,8,9,10]));
//console.log("Anonymous Function ==> "+printOddNumbers);


//Print ODD numbers using IIFE(Immediate Invoked Function Expression
var output = (function(arr){
	let out = arr.filter(n => n%2===1);
	return out;
})([0,1,2,3,4,5,6,7,8,9,10]);
console.log("IIFE Function ==> "+output.join(' '));


//Print ODD numbers using Arrow Function
var arr = [0,1,2,3,4,5,6,7,8,9,10];
(() => {
	var out = arr.filter(n => n%2===1); 
	console.log("Arrow Function ==> "+ out.join(' '));
})();