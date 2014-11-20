/**
 * @author Mike
 */

exports.loginData = function(e){
	
	if(yourEmail.value === "" || confirmEmail.value === "" ||yourPassword.value === "" || confirmEmail.value === "" ){
		
		dataWindow.dataInfo();
		alert("Can't leave field/s blank");
	
	}else if(yourEmail.value.indexOf("@") < 0 && yourEmail.value.indexOf(".") < 0 ){
		
		alert("Not a valid email address");
	
	}else if(yourEmail.value != confirmEmail.value){
		
		alert("Your email dont match!");
	
	}else if(yourPassword.value.length < 4){
		
		alert("Password to short");
	
	}else if(yourPassword.value != confirmPassword.value){
		
		alert("Passwords dont match");
	
	}else{
		
		//dataWindow.dataInfo();
		
	}

	// console.log(yourEmail.value);
	// console.log(confirmEmail.value);
	// console.log(yourPassword.value);
	// console.log(confirmPassword.value);
};
