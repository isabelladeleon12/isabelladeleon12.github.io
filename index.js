function getGreeting() {
	var date = new Date(); 
	var hour = date.getHours();
	var text = "";

	if (hour >= 0 && hour < 12){
		text = "Good Morning!";
	} else if (hour >= 12 && hour < 17){
		text = "Good Afternoon!"
	} else {
		text = "Good Evening!"
	}
	document.getElementById("greeting").innerHTML = text;
}
