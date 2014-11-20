var loadWindow = require("datapageJSON");

var dataFunction = function(){
	
	var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#009999",
	title: "Dogs!"
	});

	var myTable = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	//style: Ti.UI.iPhone.TableViewStyle.PLAIN
	});
	
	
	
	
	
	
	var arraySections = [];
	
	var getData = function(e){
		
		var detailWindow = Ti.UI.createWindow({
			backgroundColor: "#009999",
			title: e.title
		});
		
		var detailText = Ti.UI.createLabel({
			color:"#2A2E2F",
			text: e.desc,
			top:10,
			right:10,
			left:10
			
		});
		
		var imageView = Ti.UI.createImageView({
			image: e.img,
			height:210, 
			width:210,
			top: 50,
			borderRadius:5
		
		});
		
		var infoHold = Ti.UI.createScrollView({
			backgroundColor:"#fcad61",
			bottom: 10,
			right: 15,
			left: 15,
			top:300,
			borderRadius:10
		});
		
		
		infoHold.add(detailText);
		
		detailWindow.add(infoHold);
		detailWindow.add(imageView);
		
		navWindow.openWindow(detailWindow);
		
	};
	
	for (var i in loadWindow.json){
		var tableSection = Ti.UI.createTableViewSection({
			
			headerTitle: loadWindow.json[i].head,
			footerTitle: loadWindow.json[i].foot,
			
			
		});
		
		
			for(var j=0, k = loadWindow.json[i].item.length; j<k; j++){
			
				var tableRow = Ti.UI.createTableViewRow({
					
					title: loadWindow.json[i].item[j].title,
					desc: loadWindow.json[i].item[j].description,
					img: loadWindow.json[i].item[j].images,
					backgroundColor: "#009999",
					color: "#2A2E2F",
					hasChild: true,
					font:{fontSize:16}
					
				
				});
				tableSection.add(tableRow);
				//tableRow.addEventListener("click", getData);
			
			}

			arraySections.push(tableSection);
		
		}
	

	myTable.addEventListener("click", function(event){
		
		//console.log(event.source.title);
		getData(event.source);
		
	});
	
	myTable.setData(arraySections);

	
	mainWindow.add(myTable);
	

	navWindow.openWindow(mainWindow);
	
	
};



dataView.addEventListener("click", dataFunction);