
//window.addEventListener("load",function(evt){
	setTimeout(resizeIt,1000);
//});

function resizeIt(){
	setTimeout(resizeIt,1000);
	
	//find video element. note that this might not change, so can move outside loop
	var videoElement = document.evaluate('//div[@class="html5-video-container"]//video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	//console.log(videoElement);
	
	//discover if controls are showing, only shrink if showing
	var videoPlayer = document.evaluate('//div[@id="movie_player"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	console.log(videoPlayer.className);
	if (videoPlayer.className.match("ytp-autohide")){
		videoElement.style.transform="";
	}else{
		videoElement.style.transform="scale(0.9,0.9)";
	}
}