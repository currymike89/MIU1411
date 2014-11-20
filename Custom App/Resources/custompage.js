
var customFunction = function(){
	
	var file = require("custompageJSON");
	
	var customWindow = Ti.UI.createWindow({
		backgroundColor: "#009999",
		title: "Dog Profiles"
	});
	
	var scrollView = Ti.UI.createScrollView({
		layout: "vertical"
	});
	
	var switchColor = Ti.UI.createSwitch({
		value: true,
		top:5,
		
	});
	
	
	
	for (var n in file.data){
		for(var i=0, j=file.data[n].length; i<j; i++){
			
			var container = Ti.UI.createView({
				width: scrollView.width,
				height: 350,
				top:45,
				zIndex:0
			});
			
			var infoView = Ti.UI.createView({
				left:20,
				right:20,
				bottom:40,
				backgroundColor:"#fcad61",
				borderRadius:3
			});
			
			var userName = Ti.UI.createLabel({
				text: file.data[n][i].name,
				left:10,
				top:10
			});
			
			var image = Ti.UI.createImageView({
				image: file.data[n][i].image,
				top:10,
				left:10,
				right:10,
				bottom:10
				
			});
			
			var picView = Ti.UI.createView({
				backgroundColor: "#fff",
				left:10, 
				right:10,
				top:50,
				bottom:100,
				zIndex:1
			});
			
			var comments = Ti.UI.createLabel({
				text:file.data[n][i].size,
				color:"#000",
				left:10,
				bottom: 10,
				font:{fontSize:12}
			});
			
			
			
			picView.add(image);
			infoView.add(userName, comments);
			container.add(infoView, picView);
			scrollView.add(container);
		}
	}
	
	
	customWindow.add(scrollView);
	customWindow.add(switchColor);
	navWindow.openWindow(customWindow);
	
	switchColor.addEventListener("change", function(){
		if (switchColor.value === false){
			customWindow.backgroundColor = "#fff";
		
		}else{
			customWindow.backgroundColor = "#009999";
		}
	});
	
	
};

customView.addEventListener("click", function(){
	
	customFunction();
	
});
