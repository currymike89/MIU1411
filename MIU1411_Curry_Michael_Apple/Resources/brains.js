brainFunction = function() {

	var movieData = require("moviesJSON");
	var newWindow = Ti.UI.createWindow({
		backgroundColor : "#E9EEF5",
		title : "Movies",
		//backgroundImage: "background.jpg",

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
				height : 375,
				//width : "90%",
				//top : 90,
				opacity : 0.9,
				right : 15,
				left : 15,
				borderRadius : 3,
				layout: "vertical"
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
  				top:"5%"
				
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
				top : "5%"
			});
			
			var popMovieDesc = Ti.UI.createLabel({
				text: movie.desc,
				top: "15%",
				right:"7%",
				left: "7%",
				
				
			});
			
			popUpContainer.add(popMovieDesc);
			popUpContainer.add(popUpInfo);
			popUpContainer.add(closePopUp);
			
			popUpWindow.add(popUpContainer);
			popUpWindow.open();

			closePopUp.addEventListener("click", function(evt) {
				// console.log(evt.source.isIt);
				//popUpWindow.close();

				var t1 = Ti.UI.create3DMatrix();
				t1 = t1.translate(0, 500, 600);
				t1.m34 = 1.0 / -90;
				var a1 = Ti.UI.createAnimation();
				a1.transform = t1;
				a1.duration = 800;
				closePopUp.animate(a1);
				popUpWindow.animate(a1);
				
				

			});

		};

		picView.add(image);
		picView.add(youtubeVideo);
		infoView.add(comments);
		container.add(infoView);
		container.add(picView);
		scrollView.add(container);
	};

	newWindow.add(scrollView);
	//newWindow.add(newView);
	navWindow.openWindow(newWindow);

};

nextButton.addEventListener("click", function() {
	brainFunction();
	//console.log(e.source);
	//slideButton.hide();
}); 