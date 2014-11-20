 
var pWidth = Ti.Platform.displayCaps.platformWidth/1.1;


var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#009999",
	title:"Different Breed of Dogs"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});





var galleryText = Ti.UI.createLabel({
	text:"Gallery",
	color:"#2A2E2F",
	font:{fontSize:14, fontFamily:"Myriad"}
});

var galleryView = Ti.UI.createView({
	backgroundColor: "#616F63",
	top:70,
	borderRadius: 10,
	height:70,
	width: pWidth
});


var dataText = Ti.UI.createLabel({
	text:"Data",
	color:"#2A2E2F",
	font:{fontSize:14, fontFamily:"Myriad"}
});

var dataView = Ti.UI.createView({
	backgroundColor: "#616F63",
	top: 180,
	borderRadius: 10,
	height:70,
	width: pWidth
});

var customText = Ti.UI.createLabel({
	text:"Custom",
	color:"#2A2E2F",
	font:{fontSize:14, fontFamily:"Myriad"}
});

var customView = Ti.UI.createView({
	backgroundColor: "#616F63",
	top:290,
	borderRadius: 10,
	height:70,
	width: pWidth
});


var infoView = Ti.UI.createView({
	backgroundColor: "#fcad61",
	top: 400,
	borderRadius: 10,
	height: 70, 
	width: pWidth
	
});


var infoText = Ti.UI.createLabel({
	text:"#1404 Michael Curry",
	color:"#2A2E2F",
	font:{fontSize:14, fontFamily:"Myriad"}
});

var galleryLoad = require("gallerypage");
var dataLoad = require("datapage");
var customLoad = require("custompage");


galleryView.add(galleryText);
dataView.add(dataText);
customView.add(customText);
infoView.add(infoText);

mainWindow.add(galleryView, dataView, customView, infoView);


navWindow.open();

