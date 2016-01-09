// ==UserScript==
// @name        GooglePopUpKiller
// @namespace   g
// @description The "General Business Terms"-PopUp-Killer for any Google-Site.
// @include     https://*.google.*/*
// @include     http://*.google.*/*
// @version     1.1
// ==/UserScript==

var timer=0;
var timerId="";

function googlePopUpKiller(){
	
	disableGoogleElements("dialog_uid_0");	//PopUp which forces you to agree the new terms
	disableGoogleElements("taw");			//Evidence which tells u there are new terms (after searching something)
	disableGoogleElements("cnsh");			//Evidence which tells u there are new terms (frontpage)

	document.documentElement.style+="overflow:visible;";
	
	if(timer>=5){
		window.clearInterval(timeoutFunc);
	}
	
}

function disableGoogleElements(id){
	if(isElementNotNull(id)){
		displayNone(id);
		
		if(timer>0){
			window.clearInterval(timeoutFunc);
		}
	}else{

		timerId=id;		
		window.setTimeout(timeoutFunc, 1000);
		timer++;
		
		if(timer>=5){
			window.clearInterval(timeoutFunc);
		}
	}
}

function displayNone(id){
	document.getElementById(id).style="display:none;";		
}

function isElementNotNull(id){
	var result=false;
	
	if(null != document.getElementById(id)){
		result=true;
	}
	
	return result;
}

function timeoutFunc(){
	disableGoogleElements(timerId);
}


window.onload=googlePopUpKiller;