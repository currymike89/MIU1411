/**
 * @author Mike
 */

exports.getDetailViewFunction = function(rowData){
    var newDetailWindow, detailImage, detailInfoLabel;
    
    newDetailWindow = Ti.UI.createWindow({
        backgroundColor: "#F5F2F7",
          
    });
        
    detailImage = Ti.UI.createImageView({
        image: rowData.image,
        height:225,
        width: Ti.UI.FILL,
        top:"0%",
     });
        
    detailInfoLabel = Ti.UI.createLabel({
        text: rowData.subject,
        top:"45%",
        color: "#000",
    });
        
    newDetailWindow.add(detailInfoLabel);
    newDetailWindow.add(detailImage);
   
    if(osName === "iphone"){
        //IOS code
        navWindow.openWindow(newDetailWindow);
        
    }else{
        //Android Code
        newDetailWindow.open();
        
    }
        
    //console.log(rowData);

};
