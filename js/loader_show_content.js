// js/loader_show_content.js
/* My JS - Loader show content JS */

var myLoader;

// myLoaderFunction will be called after 3 seconds (3000ms)
function myLoaderFunction() {
  myLoader = setTimeout(showPage, 3000);
}

// showPage will be called after 3 seconds (3000ms) and hide the loader content and show the main content of the page
function showPage() {
  // get the loader div and hide it
  document.getElementById("loader").style.display = "none";
  // get the main div and show it
  document.getElementById("myLoaderDiv").style.display = "block";
  // body background color
  document.body.style.background = "var(--clr-linear-gradient1-l)";
  // body min height
  document.body.style.minHeight = "calc(10*var(--sizing-vh))";
}
/* My JS - Loader show content JS */
