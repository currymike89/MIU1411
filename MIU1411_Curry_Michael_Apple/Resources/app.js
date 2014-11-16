var mainWindow = Ti.UI.createWindow({
	backgroundColor:"#E9EEF5",
	title: "GooMovies",
	//backgroundImage: "background.jpg",
	//opacity: 0.5
});
	
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});
	
var gooLogo = Ti.UI.createImageView({
	image: "GooMovieLogo.png",
	top:"6%",
	height:"auto",
	width: "auto"
});
	
var nextButton = Ti.UI.createView({
	backgroundColor:"#90918C",
	borderRadius: 6,
	width: "80%",
	height:50,
	bottom: "10%",
		
});
	
var nextButtonLogo = Ti.UI.createImageView({
	image: "GooMovieButtonLogo.png",
	height:"auto",
	width:"auto",
});
	
	
var mainCode = require("brains");
	
nextButton.add(nextButtonLogo);
mainWindow.add(nextButton);
mainWindow.add(gooLogo);
navWindow.open();



