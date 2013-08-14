jQuery(document).ready(function(){
	console.log("Please Enter a Number Between 1 and 1000 in the field!");

	function Game(){
		//this section is the constant, not changing, set the weight//
		weight = Math.floor(1 + Math.random() * 1000);
	}	

	function guessANum( guess ){
		if (weight > guess)
		{
			console.log("Too low, try again.");
		}
		else if (weight < guess)
		{
			console.log("Too high, try again.");
		}
		else if (weight == guess){
			console.log("Congratulations. You guessed my Pet elephant's weight!");
		}
	}
	

}