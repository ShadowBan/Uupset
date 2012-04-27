/*

	File Descriotion: 
	This is custom jQuery code is used for left menu hover color change effect

*/


// on load start
$(document).ready(function(){




//-------------------------- left menu links ------------------------------------------------


	var leftLinks_config = { 
	
		 over: leftMenu_over, // function socialIcon_over() = onMouseOver callback (REQUIRED)    
		 timeout: 100,   // number = milliseconds delay before onMouseOut
		 interval:50,	 // The number of milliseconds hoverIntent waits between reading/comparing mouse coordinates	 
		 out: leftMenu_out    // function socialIcon_out() = onMouseOut callback (REQUIRED)    
		 
	};	

	jQuery(".nav_bar li a span").hoverIntent( leftLinks_config )
	
	function leftMenu_over(){
		
			$(this).animate({
							color:'#686868'
							}, 300);
	
	}

	function leftMenu_out(){
			
			$(this).animate({
							color: '#B4B4B4'
							}, 300);
		
	}


	jQuery(".nav_bar li").click(function(){
			
			$('.nav_bar li').removeClass('active_link');
			
			$(this).addClass('active_link');
			
	});



}); //$(document).ready(function(){
	
	
	