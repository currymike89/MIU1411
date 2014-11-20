//Login Window UI elements no logic

var mainWindow, nextPageButton;

mainWindow = Ti.UI.createWindow({
	backgroundColor: "orange",
	title: "Hot List",
	//layout: "vertical",
});

//
yourEmail = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    color: '#336699',
	top: "15%",
	width: "75%", height: 60,
	hintText:"Enter your email address",
});

//
confirmEmail = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: "30%", 
	width: "75%", height: 60,
	hintText:"someone@youremail.com",
});

//
yourPassword = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: "45%", 
	width: "75%", height: 60,
	keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
	hintText:"Enter a password",
	passwordMask: true,
});

//
confirmPassword = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: "60%", 
	width: "75%", height: 60,
	keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
	hintText:"ex. MC10271989",
	passwordMask: true,
});

//
sumbitButton = Ti.UI.createView({
	backgroundColor: "#000",
	height: 50,
	width: "60%",
	bottom: "10%",
	borderRadius: 3,
});

sumbitButton.addEventListener("click", function(){
	//console.log(e.source);
	//dataWindow.dataInfo();
	loginFunction.loginData();
	
});

mainWindow.add(yourEmail);
mainWindow.add(confirmEmail);
mainWindow.add(yourPassword);
mainWindow.add(confirmPassword);
mainWindow.add(sumbitButton);

exports.mainWindow = mainWindow;

mainWindow.open();