<template>
  <section id="footer" class="grey-bg">
    <div class="container">
      <div class="row footer-container text-white">
        <div class="col-md-3 col-sm-12">
          <img src="/static/images/logos/agape_long_white.png"
               alt="Agape Wien"
               class="footer-logo">
        </div>
        <div class="col-md-3 col-sm-4 footer-section">
          <h2 class="red text-left">Channel</h2>
          <div class="text-left">
            <a href="https://facebook.com/AgapeWien"
               class="rounded-circle social-button text-white">
              <span class="fab fa-facebook"></span>
            </a>
            <a
              href="https://medium.com/agapewien"
              class="rounded-circle social-button text-white">
              <span class="fab fa-medium"></span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCxBofq4UIEiwXEgp3yerJRQ"
              class="rounded-circle social-button text-white">
              <span class="fab fa-youtube"></span>
            </a>
            <a
              href="https://www.instagram.com/agapewien"
              class="rounded-circle social-button text-white">
              <span class="fab fa-instagram"></span>
            </a>
          </div>
        </div>
        <div class="col-md-3 col-sm-4 footer-section">
          <h2 class="red text-left">KONTAKT</h2>
          <p class="footer-text text-left">
            Jederzeit,
            <br>wir sind 24/7 für Sie da.
            <br>+43664444444
          </p>
        </div>
        <div class="col-md-3 col-sm-4 footer-section">
          <h2 class="red text-left">ADRESSE</h2>
          <p class="footer-text text-left">
            Schlechtastraße 5,
            <br>1110 Wien
            <br>Austria, Europe
          </p>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg dark-grey-bg">
      <p class="text-white">
        Made with
        <i class="fas fa-circle red"></i>
      </p>
      <div class="nav-footer ml-auto">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#header">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#who">Über uns</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#live">Live</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#social-media">Social</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">Impressum</a>
        </li>
      </ul>
      </div>
    </nav>
  </section>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style>
  #footer i{
    font-size: 6px;
  }
  #footer p{
    margin: 0;
  }
  .footer-container{
    padding: 140px 0 80px 0;
  }
  .footer-section {
    padding-bottom: 40px;
  }
  .footer-text {
    color: white;
    font-size: 12px;
  }
  .footer-logo {
    width: 120px;
    padding: 0 0 100px 0;
    float: left;
  }
  .social-button {
    width: 35px;
    font-size: 25px;
    padding-right: 8px;
  }
  .nav-footer a {
    color: #949494;
    font-size: 12px;
  }

  @media screen and (max-width: 415px) {
    .footer-container {
      padding: 100px 0 50px 61px;
    }
  }

  @media screen and (max-width: 991px) {
    .nav-footer{
      display: none;
    }
  }
</style>
