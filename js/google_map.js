// js/google_map.js
// Google Map API
// Initialize and add the map
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(32.07713317871094, 34.76924514770508),
    zoom: 17,
    // Styles a map in night mode (Dark mode).
    // styles: [
    //   { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    //   { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    //   { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    //   {
    //     featureType: "administrative.locality",
    //     elementType: "labels.text.fill",
    //     stylers: [{ color: "#d59563" }],
    //   },
    //   {
    //     featureType: "poi",
    //     elementType: "labels.text.fill",
    //     stylers: [{ color: "#d59563" }],
    //   },
    //   {
    //     featureType: "poi.park",
    //     elementType: "geometry",
    //     stylers: [{ color: "#263c3f" }],
    //   },
    //   {
    //     featureType: "poi.park",
    //     elementType: "labels.text.fill",
    //     stylers: [{ color: "#6b9a76" }],
    //   },
    //   {
    //     featureType: "road",
    //     elementType: "geometry",
    //     stylers: [{ color: "#38414e" }],
    //   },
    //   {
    //     featureType: "road",
    //     elementType: "geometry.stroke",
    //     stylers: [{ color: "#212a37" }],
    //   },
    //   {
    //     featureType: "road",
    //     elementType: "labels.text.fill",
    //     stylers: [{ color: "#9ca5b3" }],
    //   },
    //   {
    //     featureType: "road.highway",
    //     elementType: "geometry",
    //     stylers: [{ color: "#746855" }],
    //   },
    //   {
    //     featureType: "road.highway",
    //     elementType: "geometry.stroke",
    //     stylers: [{ color: "#1f2835" }],
    //   },
    //   {
    //     featureType: "road.highway",
    //     elementType: "labels.text.fill",
    //     stylers: [{ color: "#f3d19c" }],
    //   },
    //   {
    //     featureType: "transit",
    //     elementType: "geometry",
    //     stylers: [{ color: "#2f3948" }],
    //   },
    //   {
    //     featureType: "transit.station",
    //     elementType: "labels.text.fill",
    //     stylers: [{ color: "#d59563" }],
    //   },
    //   {
    //     featureType: "water",
    //     elementType: "geometry",
    //     stylers: [{ color: "#17263c" }],
    //   },
    //   {
    //     featureType: "water",
    //     elementType: "labels.text.fill",
    //     stylers: [{ color: "#515c6d" }],
    //   },
    //   {
    //     featureType: "water",
    //     elementType: "labels.text.stroke",
    //     stylers: [{ color: "#17263c" }],
    //   },
    // ],
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Nav
// When the user scrolls down 50px from the top of the document, slide down the navbar link color change
window.onscroll = function () {
  scrollFunction();
};

// Create elements for links in the navbar
var dropbtn_element = document.getElementsByClassName("dropbtn");

// Create elements for links below the navbar
var link_element = document.getElementsByClassName("link");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Change background color of navbar
    document.querySelector(".navbar").style.background =
      "var(--clr-linear-gradient2)";

    // Change padding of nav
    document.querySelector(".nav").style.padding =
      "var(--sizing-px) var(--sizing-vw)";

    // Change logo color by using filter
    document.querySelector(".brand-logo").style.filter = "unset";

    // Change color of links in navbar
    for (var i = 0; i < dropbtn_element.length; i++) {
      dropbtn_element[i].style.color = "var(--clr-primary)";
    }

    // Change color of links below the navbar
    for (var i = 0; i < link_element.length; i++) {
      link_element[i].style.color = "var(--clr-primary)";
    }
  } else {
    // Change background color of navbar
    document.querySelector(".navbar").style.background = "transparent";

    // Change padding of nav
    document.querySelector(".nav").style.padding =
      "calc(var(--sizing-px)/5) var(--sizing-vw)";

    // Change logo color by using filter
    document.querySelector(".brand-logo").style.filter = "unset";

    // Change color of links in navbar
    for (var i = 0; i < dropbtn_element.length; i++) {
      dropbtn_element[i].style.color = "var(--clr-primary)";
    }

    // Change color of links below the navbar
    for (var i = 0; i < link_element.length; i++) {
      link_element[i].style.color = "var(--clr-primary)";
    }
  }
}
