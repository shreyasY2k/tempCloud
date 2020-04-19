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

// function getlink(){
//   if(document.getElementById("fileNumber").value=="" || document.getElementById("fileName").value==""){
//     document.getElementById("mylink").innerHTML="Please enter FILENAME and NUMBER properly";
//   }
//   else{
//     document.getElementById("mylink").innerHTML= "https://tempcloud.ml/uploads/" + document.getElementById("fileNumber").value + "/" + document.getElementById("fileName").value
//   }
// }
function getlink(){
  if(document.getElementById("fileNumber").value=="" || document.getElementById("fileName").value==""){
    document.getElementById("mylink").innerHTML="Please enter FILENAME and NUMBER properly";
  }
  else{
  	var request;
	if(window.XMLHttpRequest)
    	request = new XMLHttpRequest();
    	//request = new ActiveXObject("Microsoft.XMLHTTP");
		request.open('GET', "https://tempcloud.ml/uploads/" + document.getElementById("fileNumber").value + "/" + document.getElementById("fileName").value , false);
		request.send();
		if (request.status === 404) {
   		 	document.getElementById("mylink").innerHTML="File doesn't exist. \n Please enter FILENAME and NUMBER properly";
		}
    	else{
        	document.getElementById("mylink").innerHTML= "https://tempcloud.ml/uploads/" + document.getElementById("fileNumber").value + "/" + document.getElementById("fileName").value
        }
  }
}
