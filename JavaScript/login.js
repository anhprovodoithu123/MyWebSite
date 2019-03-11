function checkLogin() {
	var userName = Login_Form.txtUser.value;
	var userPass = Login_Form.txtPass.value;

	if (userName.length <= 10 && userName.length >= 3 && userPass.length >= 6 && userPass.length <= 15){
		if(userName == "Admin" && userPass == "Admin123"){
			alert("Welcome Admin to this website");
			location = "../HTML/Admin.html"
		} else {
			alert("Welcome " + userName);
			location = "../HTML/1.html";
		}
	}
	 else {
		alert("UserName is not valid !!!");
	}
}

