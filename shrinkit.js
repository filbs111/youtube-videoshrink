
var observer = new MutationObserver(function(mutations) {
	// For the sake of...observation...let's output the mutation to console to see how this all works
	/*
	console.log("observing mutations!");
	mutations.forEach(function(mutation) {
		console.log(mutation.type);
		console.log(mutation);
	});
	*/
	resizeIt();
});
 
var observerConfig = {
	attributes: true, 
	//childList: true, 
	//characterData: true 
};
 
// Node, config
// In this case we'll listen to all changes to body and child nodes
var videoPlayer = document.evaluate('//div[@id="movie_player"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
console.log("targetNode: " + videoPlayer);
observer.observe(videoPlayer, observerConfig);


function resizeIt(){
	
	//find video element. note that this might not change, so can move outside loop
	var videoElement = document.evaluate('//div[@class="html5-video-container"]//video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	//console.log(videoElement);
	
	//discover if controls are showing, only shrink if showing
	console.log(videoPlayer.className);
	if (videoPlayer.className.match("ytp-autohide")){
		videoElement.style.transform="";
	}else{
		videoElement.style.transform="scale(0.9,0.9)";
	}
}