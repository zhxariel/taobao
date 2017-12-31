var content = document.getElementById('imgContent');
var box = document.getElementById('box');
var audio = document.getElementById('audio');

var array = box.getElementsByTagName('div');


var radius =calculateRadius(129,20);
for (var i = 0; i < array.length; i++) {
	array[i].style.background = 'url("./img/p' + (i + 1) + '.png") no-repeat';
	array[i].style.WebkitTransform = "rotateY(" + 360 / array.length * i + 'deg) translatez(' + radius + 'px)';
}

function calculateRadius(length, totalNum) {
	return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3;
}


$('#laba').on('tap', function(e) {
	if (audio.paused) {
		audio.play();
		$('#laba').text('♬');
	} else {
		audio.pause();
		$('#laba').text('▶');
	}
})


var startV = 0;
x=0,endX=0;
var flage = true;

$('#box').on('touchstart',function(event){
    event.preventDefault();
    var touch = event.targetTouches[0];
    startX =touch.pageX - x;


})
$('#box').on('touchmove',function(event){
	if(flage){
		 event.preventDefault();
    var touch = event.targetTouches[0];
    endX =touch.pageX;
    x = endX -startX;
    box.style.transform = 'rotateY('+ x +'deg)';
}else{
	return false;
}
   
})

$('#box').on('touchend',function(event){
  console.log("touchend");
})


window.addEventListener('deviceorientation',function(event){
    
     var gamma = event.gamma;
     if(Math.abs(gamma)>1){
     	flage=false;
        box.style.transform = 'rotateY('+gamma*3+'deg)'
     }else{
     	flage = true;
     }
    
});






