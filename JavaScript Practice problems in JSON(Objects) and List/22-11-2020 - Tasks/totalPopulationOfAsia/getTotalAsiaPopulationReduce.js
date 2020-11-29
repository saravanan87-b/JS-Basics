//Print the total population of countries in Asia continent using reduce function
try{
var requestObject = new XMLHttpRequest();
requestObject.open("GET","https://restcountries.eu/rest/v2/all",true);
requestObject.send();
requestObject.onload=function(){
	if (requestObject.status != 200) { 
          throw new Error("Request not success due to network error occurred");
        } else {
	var data = JSON.parse(this.response);
	let asiaCountries = data.filter((item)=> {
		return item.region==='Asia';
	});
	let out = asiaCountries.reduce((acc,item)=>{
			return acc + item.population;
	},0);
	console.log(out);
	let totalAsiaPopulatiion = document.getElementById("totalAsiaPopulatiion");
    totalAsiaPopulatiion.innerText=out;
 }
}
}catch(e){
	console.log("Error Name : "+e.name+"Error Message : "+e.message+"Error Stack : "+e.stack);
}
