brainFunction = function() {

	var movieData = require("moviesJSON");
	var newWindow = Ti.UI.createWindow({
		backgroundColor : "#E9EEF5",
		title : "Movies",
		//backgroundImage: "background.jpg",
		layout: "vertical"

	});
	var scrollView = Ti.UI.createScrollView({
		layout : "vertical"
	});

	for (var n in movieData.data)
	for (var i = 0; i < movieData.data[n].length; i++) {
		var container = Ti.UI.createView({
			width : scrollView.width,
			height : 255,
			top : 15,
			zIndex : 0
		});

		var infoView = Ti.UI.createView({
			left : 20,
			right : 20,
			bottom : 30,
			backgroundColor : "#47F5EC",
			borderRadius : 3,
		});

		var image = Ti.UI.createImageView({
			image : movieData.data[n][i].image,
			top : 0,
			left : 5,
			right : 180,
			bottom : 0,
			ifTrue : true,
			tintColor : "green",
			info : movieData.data[n][i]
		});

		var youtubeVideo = Ti.UI.createWebView({
			url : movieData.data[n][i].youtube,
			height : 180,
			right : 10,
			width : 160,
			enableZoomControls : false,
			scalesPageToFit : false,
			scrollsToTop : false,
			showScrollbars : false
		});

		var picView = Ti.UI.createView({
			backgroundColor : "#bdbcbc",
			left : 10,
			right : 10,
			top : 0,
			bottom : 60,
			zIndex : 1
		});

		var comments = Ti.UI.createLabel({
			text : movieData.data[n][i].name,
			color : "#000",
			left : 10,
			bottom : 10,
			font : {
				fontSize : 12
			}
		});

		image.addEventListener("click", function(event) {
			popUpMenu(event.source.info);
			console.log(event.source.ifTrue);
		});
		
		
		var popUpMenu = function(movie) {
			var popUpWindow = Ti.UI.createWindow({
				backgroundColor : "#fff",
				top: 0,
				height : "75%",
				width : "90%",
				bottom: 70,
				navBarHidden: true,
				opacity : 1.0,
				// right : "15%",
				// left : "15%",
				layout: "vertical",
				borderRadius : 3,
			});
			
			var popUpContainer = Ti.UI.createScrollView({
				contentWidth: 'auto',
  				contentHeight: 'auto',
  				showVerticalScrollIndicator: true,
  				showHorizontalScrollIndicator: true,
  				height: '90%',
  				width: '90%',
  				backgroundColor: "#47F5EC",
  				borderRadius: 3,
  				top:"5%",
  				layout: "vertical"
				
			});

			var closePopUp = Ti.UI.createView({
				backgroundColor : "red",
				height : 25,
				width : 25,
				top: "3%",
				right: "3%",
				isIt : true,
				opacity : 0.8,
				borderRadius : 12,
			});

			var popUpInfo = Ti.UI.createLabel({
				text : movie.name,
				top : 10
			});
			
			var popMovieDesc = Ti.UI.createLabel({
				text: movie.desc,
				top: 30,
				right:"7%",
				left: "7%",
				bottom: 20,
				
				
			});
			
			
			popUpContainer.add(closePopUp);
			popUpContainer.add(popUpInfo);
			popUpContainer.add(popMovieDesc);
			
			popUpWindow.add(popUpContainer);
			popUpWindow.open();
			

			closePopUp.addEventListener("click", function(evt) {
				// console.log(evt.source.isIt);
				popUpWindow.close();

			});

		};

		picView.add(image);
		picView.add(youtubeVideo);
		infoView.add(comments);
		container.add(infoView);
		container.add(picView);
		scrollView.add(container);
	};
	
	newWindow.addEventListener("open", function() {
	    if (Ti.Platform.osname === "android") {
	        if (! newWindow.activity) {
	            Ti.API.error("Can't access action bar on a lightweight window.");
	        } else {
	            actionBar = newWindow.activity.actionBar;
	            if (actionBar) {
	                // actionBar.backgroundImage = "/bg.png";
	                // actionBar.title = "New Title";
	                actionBar.displayHomeAsUp = true,
	                actionBar.onHomeIconItemSelected = function() {
	                    Ti.API.info("Home icon clicked!");
	                    newWindow.close();
	                };
	            }
	        }
	    }
	});


	newWindow.add(scrollView);
	//newWindow.add(newView);
	newWindow.open();

};

nextButton.addEventListener("click", function() {
	brainFunction();
	//console.log(e.source);
	//slideButton.hide();
	Ti.Media.vibrate();
}); 