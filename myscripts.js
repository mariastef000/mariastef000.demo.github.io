function toggle() {
    var video1 = document.querySelector(".video1")
    video1.classList.toggle("active");
}

function toggle2() {
    var video2 = document.querySelector(".video2")
    video2.classList.toggle("active");
}


function playVi(){
    var videos = document.getElementsByTagName("video");
}

function stopVi(){
    var videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause(); video.currentTime = 0;
		} else {
			var src = video.src;
			video.src = src;
		}
	});
}