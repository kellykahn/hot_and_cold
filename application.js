jQuery(document).ready(function(){
	

		weight = 2000 
		


	 TheGuess=function(){
		var theGuess = $('#MyGuess').find("input").val();

		 if (weight == theGuess){
			console.log("Congratulations. You guessed my Pet elephant's weight!");
  		$(".Hot").hide();
  		$(".Cold").hide(); 
  		$(".Right").show();
		}

		else if(theGuess >= 1800 && theGuess <= 2200){ 
			console.log('You are getting close!');
  		$(".Cold").hide();
  		$(".Right").hide(); 
  		$(".Hot").show();
  		
		}
		
		else if(theGuess <= 1800 || theGuess >= 2200){ 
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



