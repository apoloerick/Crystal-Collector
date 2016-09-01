$(document).ready(function(){
// variables
	var win =0;
	var losses =0;
	var randnumber =Math.floor(Math.random()*101)+19;
	var blue =Math.floor(Math.random()*11)+1;
	var red =Math.floor(Math.random()*11)+1;
	var pink =Math.floor(Math.random()*11)+1;
	var green =Math.floor(Math.random()*11)+1;
	var totalguess = 0;


	// function
	$("#random").html(randnumber);
	

	$("#gem0").on("click",function() {
		totalguess=blue + totalguess;
		$("#total").empty();
		$("#total").html('Your total score is: '+totalguess);
		
		if 	(totalguess==randnumber){
			alert("You win");
			totalguess=0;
			$("#totalguess").html(totalguess);
			win++;
			$("#wins").html(win);
			randnumber =Math.floor(Math.random()*101)+19;
			$("#random").html(randnumber);
			blue =Math.floor(Math.random()*11)+1;
		}
		else{
			if (totalguess>randnumber){
			alert("you lose");
			totalguess=0;
			$("#totalguess").html(totalguess);
			losses++;
			$("#losses").html(losses);
			 randnumber =Math.floor(Math.random()*101)+19;
			$("#random").html(randnumber);
			blue =Math.floor(Math.random()*11)+1;
			}
		}
		
		console.log("this is blue:" + " " + blue);
		console.log("this is:" + " "+ totalguess);
	})
	$("#random").html(randnumber);

		$("#gem1").on("click",function() {
		totalguess=red + totalguess;
		$("#total").empty();
		$("#total").html('Your total score is: '+totalguess);
		
		if 	(totalguess==randnumber){
			alert("You win");
			totalguess=0;
			$("#totalguess").html(totalguess);
			win++;
			$("#wins").html(win);
			randnumber =Math.floor(Math.random()*101)+19;
			$("#random").html(randnumber);
			red =Math.floor(Math.random()*11)+1;
		}
		else{
			if (totalguess>randnumber){
			alert("you lose");
			totalguess=0;
			$("#totalguess").html(totalguess);
			losses++;
			$("#losses").html(losses);
			 randnumber =Math.floor(Math.random()*101)+19;
			$("#random").html(randnumber);
			red =Math.floor(Math.random()*11)+1;
			}
		}
		
		console.log("this is red:" + " " + red);
		console.log("this is:" + " "+ totalguess);
	})
	
  
	$("#random").html(randnumber);

		$("#gem2").on("click",function() {
		totalguess=pink + totalguess;
		$("#total").empty();
		$("#total").html('Your total score is: '+totalguess);
		
		if 	(totalguess==randnumber){
			alert("You win");
			totalguess=0;
			$("#totalguess").html(totalguess);
			win++;
			$("#wins").html(win);
			randnumber =Math.floor(Math.random()*101)+19;
			$("#random").html(randnumber);
			pink =Math.floor(Math.random()*11)+1;
		}
		else{
			if (totalguess>randnumber){
			alert("you lose");
			totalguess=0;
			$("#totalguess").html(totalguess);
			losses++;
			$("#losses").html(losses);
			 randnumber =Math.floor(Math.random()*101)+19;
			$("#random").html(randnumber);
			pink =Math.floor(Math.random()*11)+1;
			}
		}
		
		console.log("this is pink:" + " " + pink);
		console.log("this is:" + " "+ totalguess);
	})
	
	
  
	$("#random").html(randnumber);

		$("#gem3").on("click",function() {
		totalguess=green + totalguess;
		$("#total").empty();
		$("#total").html('Your total score is: '+totalguess);
		
		if 	(totalguess==randnumber){
			alert("You win!!!");
			totalguess=0;
			$("#totalguess").html(totalguess);
			win++;
			$("#wins").html(win);
			randnumber =Math.floor(Math.random()*101)+19;
			$("#random").html(randnumber);
			green =Math.floor(Math.random()*11)+1;
		}
		else{
			if (totalguess>randnumber){
			alert("You Lose");
			totalguess=0;
			$("#totalguess").html(totalguess);
			losses++;
			$("#losses").html(losses);
			 randnumber =Math.floor(Math.random()*101)+19;
			$("#random").html(randnumber);
			green =Math.floor(Math.random()*11)+1;
			}
		}
		
		console.log("this is green:" + " " + green);
		console.log("this is:" + " "+ totalguess);
	})
  
});