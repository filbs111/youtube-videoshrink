
var observer = new MutationObserver(function(mutations) {
	resizeIt();
});
 
var observerConfig = {
	attributes: true, 
	//childList: true, 
	//characterData: true 
};

var videoPlayer = document.evaluate('//div[@id="movie_player"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
console.log("targetNode: " + videoPlayer);
observer.observe(videoPlayer, observerConfig);


function resizeIt(){
	var videoElement = document.evaluate('//div[@class="html5-video-container"]//video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	//console.log(videoElement);
	var elementClassList = videoElement.classList;
	var playerClassList = videoPlayer.classList;

	console.log(playerClassList);
	if (playerClassList.contains("ytp-autohide")){
		if (elementClassList.contains("shrunken")){
			elementClassList.remove("shrunken");
		}
	}else{
		if (!elementClassList.contains("shrunken")){
			elementClassList.add("shrunken");
		}
	}
}