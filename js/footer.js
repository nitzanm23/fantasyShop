const createFooter = () => {
  // create footer - selecting footer element using querySelector method
  let footer = document.querySelector("footer");
  // then writing its HTML using innerHTML
  // inside the footer element we will write our HTML - the value of innerHTML is the same HTML elements that we have made in index.html file
  footer.innerHTML = `
    <section class="my-footer-background-color">
          <!-- Left -->
          <div id="footer-social">
            <!-- Facebook -->
            <a
              class="my-social-btn-link my-img-drop-black-shadow"
              href="#!"
              role="button"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <!-- Twitter -->
            <a
              class="my-social-btn-link my-img-drop-black-shadow"
              href="#!"
              role="button"
              ><i class="fa-brands fa-twitter"></i
            ></a>
            <!-- Instagram -->
            <a
              class="my-social-btn-link my-img-drop-black-shadow"
              href="#!"
              role="button"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <!-- Whatsapp -->
            <a
              class="my-social-btn-link my-img-drop-black-shadow"
              href="#!"
              role="button"
              ><i class="fa-brands fa-whatsapp"></i
            ></a>
            <!-- Facebook-Messenger -->
            <a
              class="my-social-btn-link my-img-drop-black-shadow"
              href="#!"
              role="button"
              ><i class="fa-brands fa-facebook-messenger"></i
            ></a>
          </div>
          <!-- Left -->

          <!-- Right -->
          <div id="footer-download">
            <!-- Google Play -->
            <a class="ripple m-1 my-social-img-width" href="#!" role="button">
              <img
                src="./assets/images/android-icon.svg"
                class="img-fluid rounded my-img-drop-black-shadow"
                alt="Download on Google Play"
                draggable="false"
              />
            </a>
            <!-- App Store -->
            <a class="ripple m-1 my-social-img-width" href="#!" role="button">
              <img
                src="./assets/images/ios-icon.svg"
                class="img-fluid rounded my-img-drop-black-shadow"
                alt="Download on App Store"
                draggable="false"
              />
            </a>
          </div>
          <!-- Right -->
        </section>
        <div class="my-dropdown-divider"></div>
        <section>
          <ul id="footer-menu" class="grid container">
            <!-- Grid column -->
            <li>
              <img
                src="./assets/images/logo-o1.svg"
                class="my-img-drop-black-shadow"
                alt="Fantasy Shop"
                draggable="false"
              />
              <p>
                FantasyShop is an online retail store renowned for its wide
                selection of unique and imaginative products, for all the
                people.<br />
                It offers everything From the smallest to the largest, from the
                most realistic to the most imaginative, from the simple to the
                most special, whatever you want we will get you and bring a
                touch of magic into your lives.
              </p>
            </li>

            <!-- Grid column -->
            <li>
              <h6 class="my-img-drop-black-shadow">Links</h6>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </li>
            <!-- Grid column -->
            <li>
              <!-- Links -->
              <h6 class="my-img-drop-black-shadow">Pay via</h6>
              <!-- visa -->
              <i class="fa-brands fa-cc-visa"></i>
              <!-- mastercard -->
              <i class="fa-brands fa-cc-mastercard"></i>
              <!-- paypal -->
              <i class="fa-brands fa-cc-paypal"></i>
              <!-- apple-pay -->
              <i class="fa-brands fa-apple-pay"></i>
              <!-- google-pay -->
              <i class="fa-brands fa-google-pay"></i>
            </li>
          </ul>
        </section>
        <div class="my-dropdown-divider"></div>
        <!-- Copyright -->
        <div id="copyright" class="my-footer-background-color">
          <p class="my-img-drop-black-shadow">Copyright &copy; 2024 FantasyShop Inc. All Rights Reserved</p>
          <div class="my-dropdown-divider my-img-drop-black-shadow"></div>
          <p class="my-img-drop-black-shadow">
            <a href="#!">Privacy Policy</a> | <a href="#!">Terms of Use</a> |
            <a href="#!">Cookies</a> | <a href="#!">Security</a>
          </p>
        </div>
    `;
};

createFooter();
