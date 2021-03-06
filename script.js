$(document).ready(function () {
    bsCustomFileInput.init();
})

function gettext(){
    var num = document.querySelector('#txt-retrieve').value;
    var display = document.getElementById("mycontent");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "textget.php?num="+num);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        display.innerHTML = this.responseText;
      } else {
        display.innerHTML = "Loading...";
      };
    }
}


function copytoCB(){
    var copyText = document.getElementById("mycontent");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function copytoCB2(){
  var copyText = document.getElementById("mylink");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function loader(){
	document.querySelector('.spinner').style.display='block';
	console.log("Done");
}

function getlink(){
if(getCookie("userID")==""){
    	userid = 3;
    }
  	else{
    	userid = getCookie("userID");
    }
  if(document.getElementById("fileNumber").value=="" || document.getElementById("fileName").value==""){
    document.getElementById("mylink").innerHTML="Please enter FILENAME and NUMBER properly";
  }
  else{
    document.getElementById("mylink").innerHTML= "Loading..";
	var data = new FormData();
    var form = document.querySelector("form");
    data.append("textarea", "https://tempcloud.ml/uploads/" + document.getElementById("fileNumber").value + "/" + document.getElementById("fileName").value);
    data.append("submit", "true");
    data.append("user", userid);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("mylink").innerHTML = myObj.url;
    }
    });
    xhr.open("POST", "https://tempcloud.ml/shorturl.php");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
	// document.getElementById("mylink").innerHTML= "https://tempcloud.ml/uploads/" + document.getElementById("fileNumber").value + "/" + document.getElementById("fileName").value
}
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function onSignIn(googleUser) {
  	var profile = googleUser.getBasicProfile();
	if(getCookie("userID")==""){
    	var d = new Date();
  		d.setTime(d.getTime() + (600*24*60*60*1000));
  		var expires = "expires="+ d.toUTCString();
    	document.cookie = "userID=" + profile.getId() + ";" + expires+ ";";
  		var id_token = googleUser.getAuthResponse().id_token;
  		window.location.replace("https://tempcloud.ml/login.php?id="+profile.getId()+"&name="+profile.getName()+"&email="+profile.getEmail());
    }
	else {
    if(getCookie("userID")!=profile.getId()){
    	document.cookie = "userID=" + profile.getId();
  		window.location.replace("https://tempcloud.ml/login.php?id="+profile.getId()+"&name="+profile.getName()+"&email="+profile.getEmail());
    }
    	else{
    	console.log("User logged in");
    }
    }
	
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location.replace("https://tempcloud.ml");
    });
  }




if(getCookie("userID")!=""){
	document.querySelector('.uroomNumber').value=getCookie("userID");
	document.querySelector('.droomNumber').value=getCookie("userID");
}









