        //fade ins
        function init() {
            function fadeIn() {
			  $("#header").fadeIn(2500);	
              $("#values").fadeIn(2500);
              $("#button").fadeIn(2500);    
            }
            
          fadeIn();
            
            // $('#main_menu').localScroll();
           $.localScroll(); //button on home page
           //$.localScroll.hash();
           
          /* $("#header").mouseenter(function(elem) {
                $('#header').animate({opacity: 1}, 600);
              
           });
           
           $("#header").mouseleave(function(elem) {
                $('#header').animate({opacity: 0}, 600);
              
           });
           
           //for an other version of the site // 
          /* $(window).scroll(function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > 100) {
                 $('#header').fadeIn('slow');
                }
           }); */ 
        
			new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
        }
