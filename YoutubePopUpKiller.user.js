// ==UserScript==
// @name        YoutubePopUpKiller
// @namespace   y
// @description The "General Business Terms"-PopUp-Killer for any Youtube-Site.
// @include     https://*.youtube.*/*
// @include     http://*.youtube.*/*
// @version     1.0
// ==/UserScript==

var timer=0;
var timerId="";

function youtubePopUpKiller(){
	
	disableYoutubeElements("yt-consent-dialog");	//PopUp which forces you to agree the new terms
	disableYoutubeElements("yt-dialog-bg");			//Evidence which tells u there are new terms (after searching something)

	document.documentElement.style+="overflow:visible;";
	
	if(timer>=5){
		window.clearInterval(timeoutFunc);
	}
	
}

function disableYoutubeElements(id){
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


window.onload=youtubePopUpKiller;