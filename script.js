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
    console.log(document.getElementById("mycontent").textContent);
    var copyText = document.getElementById("mycontent");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
