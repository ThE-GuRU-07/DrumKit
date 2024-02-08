$(".drum").click(function(){
	var value = this.innerHTML;
	console.log(value);
	strike(value);
	AddAnimation(value);
})

$(".drum").keydown(function(event){
	strike(event.key);
	AddAnimation(event.key);
})

function strike(key){
	switch(key){
		case "w":
			var sound = new Audio("sounds/crash.mp3");
			sound.play();
			break;
		case "a":
			var sound = new Audio("sounds/kick-bass.mp3");
			sound.play();
			break;
		case "s":
			var sound = new Audio("sounds/snare.mp3");
			sound.play();
			break;
		case "d":
			var sound = new Audio("sounds/tom-1.mp3");
			sound.play();
			break;
		case "j":
			var sound = new Audio("sounds/tom-2.mp3");
			sound.play();
			break;
		case "k":
			var sound = new Audio("sounds/tom-3.mp3");
			sound.play();
			break;
		case "l":
			var sound = new Audio("sounds/tom-4.mp3");
			sound.play();
			break;
		default:
			console.log("invalid");
			
	}
}

function AddAnimation(key){
	$("."+key).addClass("pressed");
	setTimeout(function(){
		$("."+key).removeClass("pressed");
	}, 100);
}