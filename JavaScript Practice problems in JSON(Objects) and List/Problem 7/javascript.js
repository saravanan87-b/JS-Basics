//var expected = {foo: 6, bar: 5};
//var actual = {foo: 5, bar: 6}

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
this.assertObjectsEqual(actual, expected, 'detects that two objects are equal');

function assertObjectsEqual(actual, expected, testName){
	let str1=JSON.stringify(actual);
	let str2=JSON.stringify(expected);
	if(str1 === str2){
		console.log("Passed");
	}else{
		console.log("Expected: "+str2+" but found: "+str1);
	}
} 