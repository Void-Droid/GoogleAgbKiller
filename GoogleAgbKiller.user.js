// ==UserScript==
// @name        Google
// @namespace   g
// @description The GoogleAgbKiller.
// @include     https://*.google.*/*
// @include     http://*.google.*/*
// @version     1
// @grant       none
// ==/UserScript==

function googleAgbKiller(){

	document.documentElement.style+="overflow:visible;";
	if(null != document.getElementById("dialog_uid_0")){
		document.getElementById("dialog_uid_0").style="display:none;";		
	}
}

window.onload=googleAgbKiller;