// ==UserScript==
// @name        GooglePopUpKiller
// @namespace   g
// @description The "General Business Terms"-PopUp-Killer for any Google-Site.
// @include     https://*.google.*/*
// @include     http://*.google.*/*
// @version     1.0
// @grant       none
// ==/UserScript==

function googlePopUpKiller(){

	document.documentElement.style+="overflow:visible;";
	if(null != document.getElementById("dialog_uid_0")){
		document.getElementById("dialog_uid_0").style="display:none;";		
	}
}

window.onload=googlePopUpKiller;