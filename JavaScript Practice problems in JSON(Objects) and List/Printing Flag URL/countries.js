var request=new XMLHttpRequest();

request.open("GET","https://restcountries.eu/rest/v2/all",true);

request.send();

var str="";

request.onload=function(){
	
	var data=JSON.parse(this.response);
	
	for(var item of data)
    {
        str+=item["name"]+":"+item["flag"]+"\n";
    }
    var ele = document.getElementById("flags");
    ele.textContent=str;
	
}
