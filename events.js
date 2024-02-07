$("#kit").click(function(){
	console.log("Another click")
});

$("button").click(function(){
	alert("Someone clicked the first button")
});

$("input").keypress(function(event){
	if(event.which === 13){
		alert("YOU HIT ENTER!");
	  }
});