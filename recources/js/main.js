$(document).ready(function(){
    
    // Sticky Menu:
    $(".js--about-section").waypoint(function(direction){
        if (direction == "down") {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
    });
    
    //Active Link:
    $("nav ul li a").click(function(){
       $("nav ul li a").removeClass("active");
       $(this).addClass("active");
    });
    
    $("nav a img.logo").click(function(){
       $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });
    
    //Animated Circle:
    $('.hero-text-box').animatedHeadline({
            animationType: 'clip'
    });
    
    //MixitUp:
    var mixer = mixitup('.container');
    
      //Smooth Scroll For IE/EDGE/SAFARI:
    $("a").on('click',function(event){
       if (this.hash!=""){
           event.preventDefault();
           var hash=this.hash;
           $('html,body').animate({
              scrollTop:$(hash).offset().top
           },800,function(){
               window.location.hash=hash;
           });
       } 
    });
    
    
});

// Mobile Menu:

function openNav() {
    document.getElementById("myNav").style.width = "100%"
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%"
}

