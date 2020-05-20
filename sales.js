var ham = document.getElementsByClassName("ham");
var nav = document.getElementsByTagName("nav");

ham[0].addEventListener ("click",myfunc)

var a = 0;
function myfunc (){
nav[0].style.height="325px";
nav[0].style.width="auto";		
a++;

if (a%2 === 0){
nav[0].style.height="0px";
nav[0].style.width="auto";				
		}
	}

