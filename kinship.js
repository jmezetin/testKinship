
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/about", {
        templateUrl : "views/about.html"
    })
    .when("/kampmeeting", {
        templateUrl : "views/kmtg17.html"
    })
    .when("/community", {
        templateUrl : "views/community.html"
    })    
    .when("/faqs", {
        templateUrl : "views/faqs.html"
    })
    .when("/kmtg17", {
        templateUrl : "views/kmtg17.html"
    })
        .when("/getinvolved", {
        templateUrl : "views/getinvolved.html"
    })    
    .when("/elections", {
        templateUrl : "views/elections2017.html"
    })
    .when("/welcome", {
        templateUrl : "views/welcomeTier2.html"
    })
    .when("/levels", {
        templateUrl : "views/membershipLevels.html"
    })
    .when("/km2016", {
        templateUrl : "views/kmtg16.html"
    });
});

/*
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

*/