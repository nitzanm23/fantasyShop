// js/nav.js
const createNav = () => {
  // create nav - selecting nav element using querySelector method
  let nav = document.querySelector(".navbar");
  // then writing its HTML using innerHTML
  // inside the nav element we will write our HTML - the value of innerHTML is the same HTML elements that we have made in index.html file
  nav.innerHTML = `
  <!-- Grid -->
  <ul class="nav">
    <!-- Brand -->
    <li>
      <a href="./index.html" class="my-img-drop-black-shadow">
        <img
          src="./assets/images/nav_and_footer/logo-o1.svg"
          alt="Fantasy Shop"
          draggable="false"
          class="brand-logo"
        />
      </a>
    </li>
    <li></li>
    <!-- Search -->
    <li class="search mobile-display">
      <input
        id="search"
        type="text"
        class="search-box"
        placeholder="search brand, product"
      />
      <button class="search-btn">search</button>
    </li>
    <li></li>
    <!-- User Dropdown -->
    <li class="mobile-display">
      <div class="dropdown">
        <a class="dropbtn" role="button"
          ><i class="fa-solid fa-user"></i
        ></a>
        <div class="dropdown-content">
          <a href="./sign_up.html">Sign up</a>
          <div class="my-dropdown-divider"></div>
          <a href="./log_in.html">Log in</a>
        </div>
      </div>
    </li>
    <!-- Cart Dropdown -->
    <li class="mobile-display">
      <div class="dropdown">
        <a class="dropbtn" role="button"
          ><i class="fa-solid fa-cart-shopping"></i
        ></a>
        <div class="dropdown-content">
          <a href="#!">Go to cart</a>
          <div class="my-dropdown-divider"></div>
          <a href="#!">Empty cart</a>
        </div>
      </div>
    </li>
    <!-- Language Dropdown -->
    <li class="mobile-display">
      <div class="dropdown">
        <a class="dropbtn" role="button"
          ><i class="fa-solid fa-earth"></i
        ></a>
        <div class="dropdown-content">
          <a href="#!">
            <i class="flag flag-us"></i>
            English
            <i class="fas fa-check"></i>
          </a>
          <div class="my-dropdown-divider"></div>
          <a href="#!">
            <i class="flag flag-il"></i>
            Hebrew
          </a>
        </div>
      </div>
    </li>
    <!-- Mobile Menu Icon -->
    <li id="mobile-hamb-menu">
      <!-- Hamburger icon -->
      <input
        class="mobile-side-menu"
        type="checkbox"
        id="side-menu-mobile"
      />
      <label class="hamb" for="side-menu-mobile">
        <span class="hamb-line"></span>
      </label>
      <!-- Mobile Menu -->
      <nav class="mobile-nav">
        <ul class="mobile-menu">
          <li><div class="my-dropdown-divider"></div></li>
          <!-- Search -->
          <li class="mobile-search">
            <input
              id="mobile-search"
              type="text"
              class="search-box"
              placeholder="search brand, product"
            />
            <button class="search-btn">search</button>
          </li>
          <li><div class="my-dropdown-divider"></div></li>
          <!-- User Dropdown -->
          <li class="subnav">
            <p class="subnavbtn">
              <i class="fa-solid fa-user"></i>
            </p>
            <div class="subnav-content">
              <a href="./sign_up.html">Sign up</a>
              <a class="not-hover"
                ><div class="my-dropdown-divider"></div
              ></a>
              <a href="./log_in.html">Log in</a>
            </div>
          </li>
          <li><div class="my-dropdown-divider"></div></li>
          <!-- Cart Dropdown -->
          <li class="subnav">
            <p class="subnavbtn">
              <i class="fa-solid fa-cart-shopping"></i>
            </p>
            <div class="subnav-content">
              <a href="#!">Go to cart</a>
              <a class="not-hover"
                ><div class="my-dropdown-divider"></div
              ></a>
              <a href="#!">Empty cart</a>
            </div>
          </li>
          <li><div class="my-dropdown-divider"></div></li>
          <!-- Language Dropdown -->
          <li class="subnav">
            <p class="subnavbtn">
              <i class="fa-solid fa-earth"></i>
            </p>
            <div class="subnav-content">
              <a href="#!">
                <i class="flag flag-us"></i>
                English
                <i class="fas fa-check"></i>
              </a>
              <a class="not-hover"
                ><div class="my-dropdown-divider"></div
              ></a>
              <a href="#!">
                <i class="flag flag-il"></i>
                Hebrew
              </a>
            </div>
          </li>
          <li><div class="my-dropdown-divider"></div></li>
        </ul>
      </nav>
    </li>
  </ul>
  <div class="my-dropdown-divider"></div>
  <!-- Links below the navbar -->
  <ul class="links-container">
    <li class="link-item"><a href="#!" class="link">home</a></li>
    <li class="link-item"><a href="#!" class="link">women</a></li>
    <li class="link-item"><a href="#!" class="link">men</a></li>
    <li class="link-item"><a href="#!" class="link">kids</a></li>
    <li class="link-item"><a href="#!" class="link">accessories</a></li>
  </ul>
    `;
};

createNav();

// When the user scrolls down 50px from the top of the document, slide down the navbar background color change and link color change
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

    // Change color of hamburger icon
    document
      .querySelector(".hamb-line")
      .style.setProperty("--clr-hamburger", "#000");

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
    document.querySelector(".brand-logo").style.filter = "invert(100%)";

    // Change color of hamburger icon
    document
      .querySelector(".hamb-line")
      .style.setProperty("--clr-hamburger", "#fff");

    // Change color of links in navbar
    for (var i = 0; i < dropbtn_element.length; i++) {
      dropbtn_element[i].style.color = "var(--clr-invert)";
    }

    // Change color of links below the navbar
    for (var i = 0; i < link_element.length; i++) {
      link_element[i].style.color = "var(--clr-invert)";
    }
  }
}
