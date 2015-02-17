$(document).ready(function() { 
   $('.hero-content h3').click(function(){
      var subText = $(this).text();
      $(this).text(subText + "!");
   });
	
	$('.hero-content h1').click(function(){
		$(this).fadeOut(600);
	});


	
	$('.selling-points .point p').click(function(){
		console.log('click size')
		$(this).css({'font-size': '10px'});
	});
	
	  	var onHoverAction = function(event) {
     		//console.log('Hover action triggered.');
     		$(this).animate({'margin-top': '10px'});
   };
 
   	var offHoverAction = function(event) {
     		//console.log('Off-hover action triggered.');
     		$(this).animate({'margin-top': '0px'});
   };
	
		var onHoverColor = function(event) {
			$(this).css({color: 'red'});
	};
		
		var offHoverColor = function(event) {
			$(this).css({color: 'white'});
	};
	
	
   $('.selling-points .point').hover(onHoverAction, offHoverAction);
	// $('.hero-content h1').hover(onHoverColor, offHoverColor);
	
	
});