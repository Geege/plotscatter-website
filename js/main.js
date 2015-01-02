        //fade ins
        function init() {
            function fadeIn() {
              $("#values").fadeIn(3000);
              $("#button").fadeIn(3000);    
            }
            
          fadeIn();
            
            // $('#main_menu').localScroll();
           $.localScroll(); //button on home page
           //$.localScroll.hash();
           
           $("#header").mouseenter(function(elem) {
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
