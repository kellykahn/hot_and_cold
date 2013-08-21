jQuery(document).ready(function(){
	

		weight = Math.round(6000 + Math.random()* 8000)

		


	TheGuess=function(){
		var Userguess = $('#MyGuess').find("input").val();

		if(weight == Userguess){
			console.log("Congratulations. You guessed my Pet elephant's weight!");
  			$(".Hot").hide();
  			$(".Cold").hide(); 
  			$(".Right").show();
		}
		else if(Userguess > weight){ 
			console.log('You are getting close!');	
  			$(".Cold").hide();
  			$(".Right").hide(); 
  			$(".Hot").show();
		}
		else if(Userguess < weight){ 
			console.log('Try again!');
  			$(".Hot").hide();
  			$(".Right").hide(); 
  			$(".Cold").show();
		}
		
	}

	$('#btnGuess').on('click', function () {
		TheGuess();
	});

});



