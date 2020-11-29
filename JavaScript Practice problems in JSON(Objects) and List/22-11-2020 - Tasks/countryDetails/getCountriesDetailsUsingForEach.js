//Print the following details name, capital, flag using forEach function
try{
var requestObject = new XMLHttpRequest();
requestObject.open("GET","https://restcountries.eu/rest/v2/all",true);
requestObject.send();
requestObject.onload=function(){
	if (requestObject.status != 200) { 
          throw new Error("Request not success due to network error occurred");
        } else {
	var data = JSON.parse(this.response);
	let result="";
	data.forEach((item)=> {
		result+="Country name: "+item.name+"  Capital: "+item.capital+" flag: "+item.flag+"\n"
	})
	console.log(result);
	let countryDetails = document.getElementById("countryDetails");
    countryDetails.innerText=result;
}
}
}catch(e){
	console.log("Error Name : "+e.name+"Error Message : "+e.message+"Error Stack : "+e.stack);
}