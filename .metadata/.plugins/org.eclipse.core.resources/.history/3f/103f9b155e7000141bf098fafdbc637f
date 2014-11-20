//Page with my rows to populate TableView

exports.dataInfo = function(){
	
	//var todoList = require("myJSON");
	// getting the the habit of commenting my code
	var dataPage, dataTable, dataArray;
	
	
	//creates Window for Table View
	dataPage = Ti.UI.createWindow({
		backgroundColor: "#fff",
		
	});
	
	//creates Table View 
	dataTable = Ti.UI.createTableView({
		style: Ti.UI.iPhone.TableViewStyle.GROUPED
	}); 
	
	
	//very important later for displaying and catch the information for my rows
	dataArray = [];
	
	
	//still trying to master this concept
	// cycles through my JSON data 
	
	for (n in myJsonPage.myJSON)
	for(var i = 0; i< myJsonPage.myJSON[n].length; i++){
		var testWindow;
		
		//creates my ROW and passes my JSON info thru
		testWindow = Ti.UI.createTableViewRow({
			title: myJsonPage.myJSON[n][i].title,
			subj: myJsonPage.myJSON[n][i].subject,
			comp: myJsonPage.myJSON[n][i].compose,
			
			
		});
		
		
		if(osName === "iphone"){
			
			testWindow.height = Ti.UI.SIZE;
		
		}else{
			
			testWindow.height = 60;
			testWindow.setBackgroundColor("orange");
			testWindow.color = "red";
					
			
		
		}
		
		//after applying all the json data I want on the rows 
		//....I push it all to the array I made earlier
		dataArray.push(testWindow);
		
	}
	
	//then here I set the array to the table by using the setData method 
	dataTable.setData(dataArray);
	
	//I tend to forget myself alot but add the table silly
	dataPage.add(dataTable);
	
	
	//either opens iphone version or andriod version 
	// got platform specific code inside my conditional too
	if(osName === "iphone"){
		
		//ios specific
		var addButton = Ti.UI.createButton({
			systemButton: Ti.UI.iPhone.SystemButton.ADD,
			isIt: true,
			
		});
		
		addButton.addEventListener("click", function(e){
			
			addFunction.addItToTable();
			
		});
		
		
		dataPage.setRightNavButton(addButton);
		navWindow.openWindow(dataPage);
		
		
		//navWindow.openWindow(testWindow);
		
	
	}else{
		
		dataPage.open();
	
	}

};
