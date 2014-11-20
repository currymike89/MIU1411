//mainpage being everything together

//figures out if were on IOS or Android
var osName = Ti.Platform.osname;


if(osName === "iphone"){
	
	//IOS main UI elements
	
	Titanium.UI.setBackgroundColor("#fff");
	
	var navWindow, mainWindow, dataWindow, loginWindow, myJsonPage, addFunction;
	
	mainWindow = require("mainWindowView").mainWindow;
	dataWindow = require("dataWindowView");
	loginFunction = require("loginWindowFunction"); 
	myJsonPage = require("myJSON");
	addFunction = require("addFunction");
	
	navWindow = Ti.UI.iOS.createNavigationWindow({
		window: mainWindow
	});
	
	navWindow.open();

}else{
	//Andriod main UI elements
	
	Titanium.UI.setBackgroundColor("#fff");
	
	var navWindow, mainWindow, dataWindow, loginWindow, myJsonPage;
	
	mainWindow = require("mainWindowView").mainWindow;
	dataWindow = require("dataWindowView");
	loginFunction = require("loginWindowFunction");
	myJsonPage = require("myJSON");
	
}
