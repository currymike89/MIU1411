exports.addItToTable = function(){
	var enterDataView, enterTitle, enterInfoButton, row;
	
	enterDataView = Ti.UI.createWindow({
		backgroundColor: "#000",
		opacity: 0.7,
		height: 320,
		width: 250,
		borderRadius: 3,
	});
	
	enterTitle = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    	color: '#336699',
		top: "10%",
		width: "85%", height: 40,
		hintText:"Enter your email address",
	});
	
	// enterSubject = Ti.UI.createTextField({
// 		
	// });
// 	
	// enterCompose = Ti.UI.createTextField({
// 		
	// });
	
	enterInfoButton = Ti.UI.createView({
		backgroundColor:"#fff",
		bottom: 5,
		width:150,
		height:30,
	});
	
	row = Ti.UI.createTableViewRow({
		title: enterTitle.value,
	});
	
	enterInfoButton.addEventListener("click",function(){
		
		if(enterTitle.value.length < 0){
			
			console.log("Title Empty");
		}else{
			console.log(enterTitle.value);
			
			enterDataView.close();
			
			row = Ti.UI.createTableViewRow({
				title: enterTitle.value,
			});
			
			//console.log(dataWindow.source);
			
			//dataWindow.dataInfo.dataTable.appendRow(row);
		}	
		
		
		
	});
	
	//nothing testing github push
	//more comments
	
	enterDataView.add(enterInfoButton);
	enterDataView.add(enterTitle);
	enterDataView.open();
};