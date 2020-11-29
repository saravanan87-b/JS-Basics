//Get all the countries with population of less than 2 lacs using Filter function
try{
var requestObject = new XMLHttpRequest();
requestObject.open("GET","https://restcountries.eu/rest/v2/all",true);
requestObject.send();
requestObject.onload=function(){
	if (requestObject.status != 200) { 
          throw new Error("Request not success due to network error occurred");
        } else {
	var data = JSON.parse(this.response);
	var out = data.filter(item=>item.population < 200000).map(item=>item.name);
	let population = document.getElementById("population");
    population.innerText=out;
	}
}
}catch(e){
	console.log("Error Name : "+e.name+"Error Message : "+e.message+"Error Stack : "+e.stack);
}