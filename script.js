//your JS code here. If required.
 function prom()
	 {
		 return new Promise(function(resolve){
	 setTimeout(()=>{
	 

		 resolve("Hello, world!");
	
	 
	 },1000)
		 })
	 }
prom().then(function (p) {
	const output =document.getElementById("output");
	output.innerText=p;
})
	

	