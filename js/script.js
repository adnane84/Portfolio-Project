/* =========================================
                Preloader
============================================ */
$(window).on("load", function () {
  // makes sure that whole site is loaded
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

/* =========================================
                Team
============================================ */
$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 2,
      },
    },
  });
});

/* =========================================
                Progress Bars
============================================ */
$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          2000
        );
      });

      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

/* =========================================
               Portfolio
============================================ */

$(window).on("load", function () {
  $("#isotope-container").isotope({});
  $("#isotope-filters").on("click", "button", function () {
    let filterValue = $(this).attr("data-filter");
    $("#isotope-container").isotope({
      filter: filterValue,
    });
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

/* =========================================
               Magnifier
============================================ */

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selectors, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// --------------Testimonial -------------- //

$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

// -------------- Stats -------------- //

$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

// -------------- Clients -------------- //

$(function () {
  $("#clients-list").owlCarousel({
    items: 8,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 4,
      },
      800: {
        items: 6,
      },
    },
  });
});

// -------------- Google Map "Google Map API Key not working -------------- //

// $(window).on("load", function () {
//   var addressString = "550 Harrison Ave, Boston, MA 02118";
//   var myLatlong = { lat: 42.34153, lng: -71.066597 };

//   // Render google Map
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 11,
//     center: myLatlong,
//   });
//   // add marker
//   var marker = new google.maps.Marker({
//     position: myLatlong,
//     map: map,
//   });
//   // add info window
//   var infowindow = new google.maps.InfoWindow({
//     content: addressString,
//   });
//   // show info window when user clicks marker
//   marker.addListener("click", function () {
//     infowindow.open(map, marker);
//   });
// });

// -------------- Navigation -------------- //

$(function () {
  showHideNav(); //show or hide navBar on page load
  $(window).scroll(function () {
    showHideNav(); //show or hide navBar on window's scroll
  });
  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
      $("#back-to-top").fadeIn();
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png");
      $("#back-to-top").fadeOut();
    }
  }
});

// -------------- Smooth Scrolling -------------- //

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    let section_id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

// -------------- Mobile Menu -------------- //

$(function () {
  $("#mobile-nav-open-btn").click(function() {
    $("#mobile-nav").css("height", "100%")
  })
  $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
    $("#mobile-nav").css("height", "0%")
  })
})

// -------------- Animation -------------- //

$(function () {
  new WOW().init();
})

$(window).on("load", function () {
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});

