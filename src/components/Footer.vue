<template>
  <section id="footer">
    <div class="container">
      <div class="row footer-text">
        <div class="col-lg-3 col-md-12 col-xs-12">
          <img src="/static/images/logos/agape_long_white.png" alt="Agape Wien" class="navbar-logo">
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <h2 class="font-weight-bold">SOCIAL</h2>
          <div class="social-text">
            <a href="https://facebook.com/agapewien" class="rounded-circle social-button">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/agapewien" class="rounded-circle social-button">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCxBofq4UIEiwXEgp3yerJRQ" class="rounded-circle social-button">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://medium.com/agapewien" class="rounded-circle social-button">
              <i class="fab fa-medium"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <h2 class="font-weight-bold">KONTAKT</h2>
          <p class="konakt-text">Jederzeit,</p>
          <p class="konakt-text">wir sind 24/7 für Sie da.</p>
          <p class="konakt-text">+43664444444</p>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <h2 class="font-weight-bold">ADRESSE</h2>
          <p class="adresse-text">Schlechtastraße 5, 1110 Wien</p>
          <p class="adresse-text">Austria, Europe</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <nav class="navbar-expand-lg">
          <div class="navbar">
            <span>
              <i class="far fa-copyright"></i>2018 Copyright.
              <span> Made with
              <i class="fas fa-circle" style="color:#ad1818; font-size:8px;"></i>
              </span>
            </span>
            <ul class="navbar-nav FooterNavbar">
              <li class="nav-item">
                <a class="nav-link" href="header">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#who">Über uns</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#values">Werte</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#live">Live</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pastors">Pastoren</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#program">Programme</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer">Kontakt</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style>
  #footer {
    background-color: #2c2c2c;
    padding-top: 4em;
  }
  
  .footer-text {
    color: white;
    margin-bottom: 4em;
  }
</style>

