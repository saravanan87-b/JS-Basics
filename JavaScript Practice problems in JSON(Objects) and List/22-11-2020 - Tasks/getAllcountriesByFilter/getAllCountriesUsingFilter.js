//Get all the countries from Asia continent using Filter function
try{
var requestObject = new XMLHttpRequest();
requestObject.open("GET","https://restcountries.eu/rest/v2/all",true);
requestObject.send();
requestObject.onload=function(){
	var data = JSON.parse(this.response);
	var out = data.filter(item=>item.region==='Asia').map(item=>item.name);
	let asianCountries = document.getElementById("asiaCounties");
    asianCountries.innerText=out;
}
}catch(e){
	console.log("Error Name : "+e.name+"Error Message : "+e.message+"Error Stack : "+e.stack);
}
