/*
	File Descriotion: 
	This is custom jQuery code are used for different events/effects in html.
	-	Font replacement ( line # 20 )
	-	Hover fading effects for buttons ( line # 30 )
	-	Social Bookmarking icons effect ( line# 67 )
	-	Hover effects for Images ( line # 100 )
	-	Sliders like Reply section of post opening and closing  ( line# 159 )
	-	Page Scrolling effect ( line # 215 )
	-	Form Value Clear/Restore  ( line # 239 )


*/

//------------------------Font replacement  --------------------------------------------------

// on load start
$(document).ready(function(){
		
		Cufon.replace('.arrived-Font, h1, h2, h3, h4, h5, .custFont ');
		
		Cufon.replace('h1, h2, h3, h4, h5',{ hover: true }
			  
			  );





//-------------------------- hover btns links start ------------------------------------------------


	var faddingLinks_config = { 
	
		 over: faddingMenu_over, // function socialIcon_over() = onMouseOver callback (REQUIRED)    
		 timeout: 100,   // number = milliseconds delay before onMouseOut
		 interval:50,	 // The number of milliseconds hoverIntent waits between reading/comparing mouse coordinates	 
		 out: faddingMenu_out    // function socialIcon_out() = onMouseOut callback (REQUIRED)    
		 
	};	

	
	jQuery(".btn_plus span, .btn_search span, input[type=button], .btn_red, .btn_yellow, .btn_rgreen, .btn_slategreen, .btn_seagreen, .btn_blue, .btn_purple, .btn_pink, .btn_darkgray, .btn_silver ").hoverIntent( faddingLinks_config )
	
	function faddingMenu_over(){
		
			$(this).animate({
							opacity: 0.5
							}, 400);
	
	}

	function faddingMenu_out(){
			
			$(this).animate({
							opacity: 1
							}, 200);
		
	}

	





//-------------------------- social link Start ------------------------------------------------


	var socialIcon_config = { 
	
		 over: socialIcon_over, // function socialIcon_over() = onMouseOver callback (REQUIRED)    
		 timeout: 100,   // number = milliseconds delay before onMouseOut
		 interval:50,	 // The number of milliseconds hoverIntent waits between reading/comparing mouse coordinates	 
		 out: socialIcon_out    // function socialIcon_out() = onMouseOut callback (REQUIRED)    
		 
	};	

	jQuery(".socialIcon a span").hoverIntent( socialIcon_config )
	
	function socialIcon_over(){
		
			$(this).animate({opacity: 1}, 300);
	
	}

	function socialIcon_out(){
			
			$(this).animate({opacity: 0.0}, 300);
		
	}








//-------------------------- image hover links start like portfolio etc ------------------------------------------------



	var imgHovrLinks_config = { 
	
		 over: imgHovrMenu_over, // function socialIcon_over() = onMouseOver callback (REQUIRED)    
		 timeout: 100,   // number = milliseconds delay before onMouseOut
		 interval:50,	 // The number of milliseconds hoverIntent waits between reading/comparing mouse coordinates	 
		 out: imgHovrMenu_out    // function socialIcon_out() = onMouseOut callback (REQUIRED)    
		 
	};	

	jQuery(".ovr_links").hoverIntent( imgHovrLinks_config )
	
	function imgHovrMenu_over(){

			$(this).find('img').animate({
							opacity: 0.4
							}, 100, function(){
								$(this).parent().parent().find('.img_overlay').fadeIn(100);
								});

								}


	function imgHovrMenu_out(){
			
			$(this).find('.img_overlay').fadeOut(100,function(){
							$(this).parent().find('img').animate({
									opacity: 1
							}, 100);
							});
		
							}




	$('.img_overlay').click( function(){
									 
									 $('.img_overlay').fadeOut(40);
									 
									 });










//-------------------------- blog detail link start ------------------------------------------------
	
	
	$('.blogDetails').toggle(
                   function()
                   {
					   
                     	$(this).parent().find('.post_details').slideDown(800, function(){

							$(this).parent().find('.blogDetails').css('background-position','right 7px');
				
						});	
    
                   },
                   function()
                   {
                       
                     	$(this).parent().find('.post_details').slideUp(800, function(){

							$(this).parent().find('.blogDetails').css('background-position','right -35px');
				
						});	
					}
	);



//-------------------------- blog reply link start ------------------------------------------------
	
	
	$('.reply').toggle(
                   function()
                   {
					   
                     	$(this).parent().find('.fancy_form').slideDown(800, function(){

							$(this).parent().find('.reply').css('background-position','right 7px');
				
						});	
    
                   },
                   function()
                   {
                       
                     	$(this).parent().find('.fancy_form').slideUp(800, function(){

							$(this).parent().find('.reply').css('background-position','right -35px');
				
						});	
					}
	);
	
	








//-------------------------- Page Scrolling start ------------------------------------------------


		 $('ul.nav_bar a').bind('click',function(event){
											 
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500,'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
                    event.preventDefault();
         });






//--------------------------Form value clear and restore (start) ------------------------------------------------

		var clearMePrevious = '';
		
		// clear input on focus
		$('.clrMeFcs').focus(function() {
		
			if ($(this).val() == $(this).attr('title')) {
				
				clearMePrevious = $(this).val();
				
				$(this).val('');
				
			}
		});

		// if field is empty afterward, add text again
		$('.clrMeFcs').blur(function() {
										 
				if ($(this).val() == '') {
					
					$(this).val(clearMePrevious);
					
				}
				
		});
		
		
		
		


// on load end
});