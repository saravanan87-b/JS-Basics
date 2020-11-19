//Print only words first letter in uppercase using Normal JavaScript Function
function titleCase(str){
	var out = str.map(item=>item[0].toUpperCase()+item.slice(1));
	return out.join(' ');
}
console.log("Normal Function ==> "+titleCase(["welcome","to","zen","class"]));


//Print only words first letter in uppercase using Anonymous Function
var printTitleCase = function(str){
	var out = str.map(item=>item[0].toUpperCase()+item.slice(1));
	return out.join(' ');
}
console.log("Anonymous Function ==> "+printTitleCase(["welcome","to","zen","class"]));
//console.log("Anonymous Function ==> "+printTitleCase);


//Print only words first letter in uppercase using IIFE(Immediate Invoked Function Expression)
var printTitleCase = (function(str){
	var out = str.map(item=>item[0].toUpperCase()+item.slice(1));
	return out.join(' ');
})(["welcome","to","zen","class"]);
console.log("IIFE Function ==> "+printTitleCase);


//Print only words first letter in uppercase using using Arrow Function
var strArr = ["welcome","to","zen","class"];
(() => {
	var out = strArr.map(item=>item[0].toUpperCase()+item.slice(1));
        console.log("Arrow Function ==> "+out.join(' ')); 
})();