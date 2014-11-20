var galleryFunction = function(){
	
	var pWidth = Ti.Platform.displayCaps.platformWidth/1.1;
	var pHeight = Ti.Platform.displayCaps.platformHeight;
	
	var galleryWindow = Ti.UI.createWindow({
		backgroundColor: "#009999",
		title: "Lovable Doggies"
	});
	
	var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "galleryImages");
	var galleryList = gallery.getDirectoryListing();
	
	
	 var d = 0;
 
	var gallList = Array();
	for (var i = 0; 0 < galleryList.length-1; i++){
	    var index = Math.floor(Math.random() * galleryList.length);
	    gallList.push(galleryList[index]);
	    galleryList.splice(index, 1);
	    
	    
	    
	}
	 
	function random(){
	   
	   
	    if(d < 10){
	        dogImg.image = "galleryImages/" + gallList[d];
	        d++;
	    } else{
	        d = 0;
	    }
	    
	};
	
	
	var dogImg = Ti.UI.createImageView({
    image: "galleryImages/" + galleryList[0],
    left:6,
    right:6,
    top: 50,
    borderRadius: 25
	});
	
	var randomText = Ti.UI.createLabel({
		text:"Random",
		color:"#2A2E2F",
		font:{fontSize:14, fontFamily:"Myriad"}
	});
	
	var randomView = Ti.UI.createView({
		backgroundColor: "#616F63",
		bottom: 15,
		borderRadius: 10,
		height:60,
		width: pWidth
	});
	
	randomView.addEventListener("click", function(){
		
			// console.log(counter);
			// console.log(index);
 			
			random();

	});
	
	
	randomView.add(randomText);
	galleryWindow.add(randomView);
	galleryWindow.add(dogImg);
	
	navWindow.openWindow(galleryWindow);
};

galleryView.addEventListener("click", galleryFunction);

