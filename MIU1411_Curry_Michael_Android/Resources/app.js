var mainWindow = Ti.UI.createWindow({
	backgroundColor:"#E9EEF5",
	title: "GooMovies",
	//backgroundImage: "background.jpg",
	//opacity: 0.5
});
	
	
	
var gooLogo = Ti.UI.createImageView({
	image: "GooMovieLogo.png",
	top:"9%",
	height:"auto",
	width: "auto",
		
});
	
var nextButton = Ti.UI.createView({
	backgroundColor:"#90918C",
	borderRadius: 6,
	width: "85%",
	height:70,
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
mainWindow.open();



