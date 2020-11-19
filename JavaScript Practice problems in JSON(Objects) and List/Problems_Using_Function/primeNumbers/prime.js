//Print PRIME numbers from given ARRAY using Normal JavaScript Function
function printPrimeNumbers(arr){
	var out = arr.filter((item)=>{
		for(let i=2; i<item; i++){
			if(item % i === 0){
				return false;
			}
		}
		return item;
	});
	return out.join(' ');
}
console.log("Normal Function ==> "+printPrimeNumbers([0,1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11]));

//Print PRIME numbers from given ARRAY using Anonymous Function
var printPrimeNumbers = function(arr){
	var out = arr.filter((item) => {
		for(let i=2; i<item; i++){
			if(item % i === 0){
				return false;
			}
		}
		return item;
	});
	return out.join(' ');
}
console.log("Anonymous Function ==> "+printPrimeNumbers([0,1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11]));
//console.log("Anonymous Function ==> "+printPrimeNumbers);

//Print PRIME numbers from given ARRAY using IIFE(Immediate Invoked Function Expression)
var printPrimeNumbers = (function(arr){
	var out = arr.filter((item) => {
		for(let i=2; i<item; i++){
			if(item % i === 0){
				return false;
			}
		}
		return item;
	});
	return out.join(' ');
})([0,1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11]);
console.log("IIFE Function ==> "+printPrimeNumbers);

//Print PRIME numbers from given ARRAY using using Arrow Function
var arr = [0,1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11];
(()=>{
	var out = arr.filter((item) => {
		for(let i=2; i<item; i++){
			if(item % i === 0){
				return false;
			}
		}
		return item;
	});
	console.log("Arrow Function ==> "+out.join(' '));
})();