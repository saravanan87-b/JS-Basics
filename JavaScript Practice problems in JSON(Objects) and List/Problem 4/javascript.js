var arr = ["GUVI", "I", "am", "Geek"];
console.log(this.transformFirstAndLast(arr));
function transformFirstAndLast(arr) {
 let newObject = {};
 newObject[arr[0]] = arr[arr.length-1];
 return newObject;
}
