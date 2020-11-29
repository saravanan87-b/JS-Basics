//Print the country which use US Dollars as currency
try{
var requestObject = new XMLHttpRequest();
requestObject.open("GET","https://restcountries.eu/rest/v2/all",true);
requestObject.send();
requestObject.onload=function(){
	if (requestObject.status != 200) { 
          throw new Error("Request not success due to network error occurred");
        } else {
	var data = JSON.parse(this.response);
	var out = data.filter(item=>item.currencies[0].code === 'USD').map(ele=>ele.name);
	let usDollarAsCurrency = document.getElementById("usDollarAsCurrency");
    usDollarAsCurrency.innerText=out;
}
}
}catch(e){
	console.log("Error Name : "+e.name+"Error Message : "+e.message+"Error Stack : "+e.stack);
}