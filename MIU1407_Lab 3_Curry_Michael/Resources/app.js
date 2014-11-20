var osName = Ti.Platform.name;
var movieLoad = require("JSON");

var apple = function(){

	var osName = Ti.Platform.name;
	
	var listView = Ti.UI.createWindow({
		backgroundColor: "#fff",
		title: "Movie Review",
		layout: "vertical"
		
		// orientationModes:[
			// Ti.UI.LANDSCAPE_LEFT,
			// Ti.UI.LANDSCAPE_RIGHT,
			// Ti.UI.PORTRAIT,
			// Ti.UI.UPSIDE_PORTRAIT
		// ]
	});
	
	var searchBar = Ti.UI.createSearchBar();
	
	
	var myTable = Ti.UI.createTableView({
		style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		search: searchBar,	
	});
	
	var navWindow = Ti.UI.iOS.createNavigationWindow({
		window: listView,
	});

	var arraySection = [];
	
	var getDat = function(e){
		
		  //loads my movie json data
			var jsonLoad = require("JSON");
			
			var mainWindow = Ti.UI.createWindow({
				backgroundColor:"#F7FFFF",
				title: e.title 
			});
			
			//the scrollable view my mainWindow is on
			var scrollView = Ti.UI.createScrollView({
				contentWidth:Ti.Platform.displayCaps.platformWidth,
				contentHeight: Ti.Platform.displayCaps.platformHeight,
				showVerticalScrollIndicator: true,
				
			});
			
			//movie cover image goes here
			var movieCover = Ti.UI.createImageView({
				image: e.image,
				top:"15",
				left:"5%",
				height:"175dp",
				width:"35%",
				backgroundColor:"#E1E8E8",
				borderColor:"#000",
				borderWidth:".6",
				zIndex:"1"
			});
			
			// this is what the movie info and movie cover image are inside
			var infoView = Ti.UI.createView({
				top:"15dp",
				right:"15dp",
				left:"37%",
				height:"175dp",
				backgroundColor:"#E1E8E8",
				borderColor:"#000",
				borderRadius:"5",
				borderWidth:".6",
				zIndex:"0"
			});
			
			//this is where the pic with the link to the movie trailer
			var videoLink = Ti.UI.createView({
				backgroundColor: "#fff",
				bottom: "9dp",
				right: "14dp",
				width: "150dp",
				height: "110dp",
				borderRadius:"5",
				borderWidth:".6",
				borderColor:"#000",
				image: e.youtube,
			});
			
			//movie title
			var movieTitle = Ti.UI.createLabel({
				text: e.title,
				top: "7dp",
				zIndex:"1",
				textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
			});
			
			//movie runtime
			var runTime = Ti.UI.createLabel({
				text: e.runtime,
				top: "33dp",
				zIndex:"1",
				left:"20dp",
				font:{fontSize:"10sp"}
			});
			
			//release date 
			var relDate = Ti.UI.createLabel({
				text: e.rel,
				top: "33dp",
				zIndex:"1",
				left:"68dp",
				font:{fontSize:"10sp"}
			});
			
			//the main genre of the movie
			var movieGenre = Ti.UI.createLabel({
				text: e.genres,
				top: "33dp",
				zIndex:"1",
				left:"132dp",
				font:{fontSize:"10sp"}
			});
			
			//the storyline is the only thing that goes here 
			var moreInfo = Ti.UI.createView({
				top:"200dp",
				left:"15",
				right: "15",
				height:"160dp",
				width: Ti.UI.FILL,
				backgroundColor:"#E1E8E8",
				borderColor:"#000",
				borderRadius:"5",
				borderWidth:".6"
			});
			
			
			//storyline label
			var storyLine = Ti.UI.createLabel({
				text:"Storyline",
				top:"5dp",
				left:"6dp",
				color:"#5C80F2",
				font:{fontSize:"13sp"}
				
			});
			
			//storyline
			var storyLineWord = Ti.UI.createLabel({
				text: e.storyline,
				top: "24dp",
				left:"10dp",
				right:"10dp",
				font:{fontSize:"11sp"},
				textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
				
			});
			
			//attempt at the netflix movie scroll
			var moreMovies = Ti.UI.createView({
				top:"370dp",
				left:"15dp",
				right: "15dp",
				height:"100dp",
				width: Ti.UI.FILL,
				backgroundColor:"#E1E8E8",
				borderColor:"#000",
				borderRadius:"5",
				borderWidth:".6"
			});
			
			//related title label
			var relatedTitle = Ti.UI.createLabel({
				text:"Details",
				top:"2dp",
				left:"5dp",
				color:"#5C80F2",
				font:{fontSize:"13sp"}
			});
			
			moreMovies.add(relatedTitle);
			
			
			
			moreInfo.add(storyLine);
			moreInfo.add(storyLineWord);
			
			infoView.add(movieTitle);
			infoView.add(videoLink);
			infoView.add(runTime);
			infoView.add(relDate);
			infoView.add(movieGenre);
			scrollView.add(movieCover);
			scrollView.add(infoView);
			scrollView.add(moreInfo);
			scrollView.add(moreMovies);
			mainWindow.add(scrollView);
			navWindow.openWindow(mainWindow);	
	};
	
		
	for(var j = 0; j < movieLoad.movieItem.length; j++){
		
		var movie = movieLoad.movieItem[j];
		
		var tableRow = Ti.UI.createTableViewRow({
			title: movie.movie,
			rel: movie.releasedate,
			runtime: movie.runtime,
			image: movie.image,
			genres: movie.genres,
			youtube: movie.youtube,
			video: movie.video,
			storyline: movie.storyline,
			hasChild: true,
			color:"#5C80F2",
			searchFilter: movie.movie,
			
		});
	
		arraySection.push(tableRow);
		
		myTable.setData(arraySection);
	}
	
	myTable.addEventListener("click", function(event){
		getDat(event.source);
	});

	listView.add(searchBar);
	listView.add(myTable);
	
	navWindow.open();
	
};	

var android = function(){
	
	var movieLoad = require("JSON");
	
	var osName = Ti.Platform.name;
	
	var listView = Ti.UI.createWindow({
		backgroundColor: "#fff",
		title: "Blu's Rental Shack",
		layout: "vertical"
		// orientationModes:[
			// Ti.UI.LANDSCAPE_LEFT,
			// Ti.UI.LANDSCAPE_RIGHT,
			// Ti.UI.PORTRAIT,
			// Ti.UI.UPSIDE_PORTRAIT
		// ]
	});
	
	var searchBar = Ti.UI.Android.createSearchView({
		backgroundColor:"#fff"
	});
	
	listView.activity.onCreateOptionsMenu = function(e){
		var menu = e.menu;
		var menuItem = menu.add({
			title:"table search",
			actionView: searchBar,
			icon:(Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png"),
        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
    });
};
	
	var myTable = Ti.UI.createTableView({
		search: searchBar,
		searchAsChild: false
		
	});
	
	
	
	
	var arraySection = [];
	
	var getDat = function(e){
		
		  //loads my movie json data
			var jsonLoad = require("JSON");
			
			var mainWindow = Ti.UI.createWindow({
				backgroundColor:"#F7FFFF",
				title: e.title 
				
			});
			
			//the scrollable view my mainWindow is on
			var scrollView = Ti.UI.createScrollView({
				contentWidth:Ti.Platform.displayCaps.platformWidth,
				contentHeight: Ti.Platform.displayCaps.platformHeight,
				showVerticalScrollIndicator: true,
				
			});
			
			//movie cover image goes here
			var movieCover = Ti.UI.createImageView({
				image: e.image,
				top:"15",
				left:"5%",
				height:"175dp",
				width:"35%",
				backgroundColor:"#E1E8E8",
				borderColor:"#000",
				borderWidth:".6",
				zIndex:"1"
			});
			
			// this is what the movie info and movie cover image are inside
			var infoView = Ti.UI.createView({
				top:"15dp",
				right:"15dp",
				left:"37%",
				height:"175dp",
				backgroundColor:"#E1E8E8",
				borderColor:"#000",
				borderRadius:"5",
				borderWidth:".6",
				zIndex:"0"
			});
			
			//this is where the pic with the link to the movie trailer
			var videoLink = Ti.UI.createView({
				backgroundColor: "#fff",
				bottom: "9dp",
				right: "14dp",
				width: "150dp",
				height: "110dp",
				borderRadius:"5",
				borderWidth:".6",
				borderColor:"#000",
				
			});
			
			//movie title
			var movieTitle = Ti.UI.createLabel({
				text: e.title,
				top: "7dp",
				zIndex:"1",
				textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
			});
			
			//movie runtime
			var runTime = Ti.UI.createLabel({
				text: e.runtime,
				top: "33dp",
				zIndex:"1",
				left:"20dp",
				font:{fontSize:"10sp"}
			});
			
			//release date 
			var relDate = Ti.UI.createLabel({
				text: e.rel,
				top: "33dp",
				zIndex:"1",
				left:"68dp",
				font:{fontSize:"10sp"}
			});
			
			//the main genre of the movie
			var movieGenre = Ti.UI.createLabel({
				text: e.genres,
				top: "33dp",
				zIndex:"1",
				left:"132dp",
				font:{fontSize:"10sp"}
			});
			
			//the storyline is the only thing that goes here 
			var moreInfo = Ti.UI.createView({
				top:"200dp",
				left:"15",
				right: "15",
				height:"160dp",
				width: Ti.UI.FILL,
				backgroundColor:"#E1E8E8",
				borderColor:"#000",
				borderRadius:"5",
				borderWidth:".6"
			});
			
			//storyline label
			var storyLine = Ti.UI.createLabel({
				text:"Storyline",
				top:"2dp",
				left:"5dp",
				color:"#5C80F2",
				
			});
			
			//storyline
			var storyLineWord = Ti.UI.createLabel({
				text: e.storyline,
				top: "24dp",
				left:"10dp",
				right:"10dp",
				font:{fontSize:"11sp"},
				textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
			});
			
			//attempt at the netflix movie scroll
			var moreMovies = Ti.UI.createView({
				top:"370dp",
				left:"15dp",
				right: "15dp",
				height:"100dp",
				width: Ti.UI.FILL,
				backgroundColor:"#E1E8E8",
				borderColor:"#000",
				borderRadius:"5",
				borderWidth:".6"
			});
			
			//related title label
			var relatedTitle = Ti.UI.createLabel({
				text:"Related Titles",
				top:"2dp",
				left:"5dp",
				color:"#5C80F2",
				font:{fontSize:"13sp"}
			});
			
			moreMovies.add(relatedTitle);
			
			moreInfo.add(storyLine);
			moreInfo.add(storyLineWord);
			
			infoView.add(movieTitle);
			infoView.add(videoLink);
			infoView.add(runTime);
			infoView.add(relDate);
			infoView.add(movieGenre);
			
			scrollView.add(movieCover);
			
			scrollView.add(infoView);
			
			scrollView.add(moreInfo);
			
			scrollView.add(moreMovies);
			
			mainWindow.add(scrollView);
			
			mainWindow.open();
		
		
		
		
		
	};
	
	for(var j = 0; j < movieLoad.movieItem.length; j++){
		Ti.API.debug('The Loop has started and will loop ' + movieLoad.movieItem.length + ' times.');
		
		var movie = movieLoad.movieItem[j];
		Ti.API.debug(movie);
		
		Ti.API.debug("Creating Movie Row for " + movie.movie);
		var tableRow = Ti.UI.createTableViewRow({
			title: movie.movie,
			rel: movie.releasedate,
			runtime: movie.runtime,
			image: movie.image,
			genres: movie.genres,
			video: movie.video,
			storyline: movie.storyline,
			color:"#5C80F2",
			searchFilter: movie.movie,
			hasChild: true,
		});
		
		Ti.API.debug('Pushing ' + movie.movie + ' row');
		arraySection.push(tableRow);
		
		Ti.API.debug('Refreshing table rows');
		myTable.setData(arraySection);
		
		tableRow.height = 60;
	}
	
	
	
	console.log(movieLoad.movieItem[1].movie);
	console.log(osName);
	
	myTable.addEventListener("click", function(event){
		getDat(event.source);
	});

	
	
		
	listView.add(myTable);
	
	
	listView.open();

};

//makes the correct code work for either IOS or Android
if(osName === "iPhone OS"){
	apple();
}else{
	android();
}

