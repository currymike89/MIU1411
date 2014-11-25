//mainpage being everything together

//figures out if were on IOS or Android
var osName = Ti.Platform.osname;
var navWindow, mainWindow, dataWindow, loginWindow, myJsonPage, getDetailView;

if(osName === "iphone"){
	//IOS main UI elements
	
	Titanium.UI.setBackgroundColor("#fff");
	
	getDetailView = require("detailView");
	mainWindow = require("mainWindowView").mainWindow;
	dataWindow = require("dataWindowView");
	loginFunction = require("loginWindowFunction"); 
	myJsonPage = require("myJSON");
	
	navWindow = Ti.UI.iOS.createNavigationWindow({
		window: mainWindow
	});
	
	navWindow.open();

}else{
	//Andriod main UI elements
	
	Titanium.UI.setBackgroundColor("#fff");
	
	getDetailView = require("detailView");
	mainWindow = require("mainWindowView").mainWindow;
    dataWindow = require("dataWindowView");
    loginFunction = require("loginWindowFunction"); 
    myJsonPage = require("myJSON");
	
}
