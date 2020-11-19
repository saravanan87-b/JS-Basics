//Print all the palindromes from given Array using Normal JavaScript Function
function printPalindrome(arr){
	var out = arr.filter((item) => {
		var str = String(item);
		let i = 0;
		let j = str.length-1;
		while(i < j){
			if(str[i] === str[j]){
				i++;
				j--;
			}else{
				return false;
			}
		}
		return str;
	});
	return out.join(' ');
}
console.log("Normal Function ==> "+printPalindrome(['carecar', 1344, 12321, 'did', 'cannot', 'madam', 121]));

//Print all the palindromes from given Array using Anonymous Function
var printPalindrome = function(arr){
	var out = arr.filter((item)=>{
		var str = String(item);		
		let i=0;
		let j=str.length-1;
		while(i<j){
			if(str[i] === str[j]){
				i++;
				j--;
			}else{
				return false;
			}
		}
		return str;
	});
	return out.join(' ');
}
console.log("Anonymous Function ==> "+printPalindrome(['carecar', 1344, 12321, 'did', 'cannot', 'madam', 121]));
//console.log("Anonymous Function ==> "+printPalindrome);

//Print all the palindromes from given Array using IIFE(Immediate Invoked Function Expression)
var printPalindrome = (function(arr) {
	var out = arr.filter((item) => {
		var str = String(item);
		let i = 0;
		let j = str.length-1;
		while(i < j){
			if(str[i] === str[j]){
				i++;
				j--;
			}else{
				return false;
			}
		}
		return str;
	});
	return out.join(' ');
})(['carecar', 1344, 12321, 'did', 'cannot', 'madam', 121]);
console.log("IIFE Function ==> "+printPalindrome);

//Print all the palindromes from given Array using using Arrow Function
var arr = ['carecar', 1344, 12321, 'did', 'cannot', 'madam', 121];
(() => {
	var out = arr.filter((item) => {
		var str = String(item);
		let i = 0;
		let j = str.length-1;
		while(i < j){
			if(str[i] === str[j]){
				i++;
				j--;
			}else{
				return false;
			}
		}
		return str;
	});
	console.log("Arrow Function ==> "+out.join(' '));
})();