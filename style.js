$(document).ready(function(){
//========================navigate smoothly============
	$("a").click(function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
  });
  
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
 //top btn
  $(window).scroll(function(){
	  
	  if
		  ($(this).scrollTop()>400){
			  $("#top_btn").fadeIn();
			  
		  }
		else{
			$("#top_btn").fadeOut();
			
		}
	  
	  
	  
	  
  });
	$("#top_btn").click(function(){
		$("body,html").animate({scrollTop:0},1000);
	});
/*=================slidetoggle=====================*/

$("#active_toggle").hide();
$("#active_toggle1").hide();
$("#active_toggle2").hide();



$("#read_panel").click(function(){

$("#active_toggle").slideToggle();
$("#active_toggle1").hide();
$("#active_toggle2").hide();

});

$("#read_panel1").click(function(){
	$("#active_toggle").hide();
	$("#active_toggle1").slideToggle();
	$("#active_toggle2").hide();
	
});
$("#read_panel2").click(function(){
	$("#active_toggle").hide();
	$("#active_toggle1").hide();
	$("#active_toggle2").slideToggle();
	
});




  
});