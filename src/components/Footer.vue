<template>
  <section id="footer" class="grey-bg">
    <div class="container">
      <div class="row footer-text text-white">
        <div class="col-md-3 col-sm-12">
          <img src="/static/images/logos/agape_long_white.png" alt="Agape Wien" class="footer-logo">
        </div>
        <div class="col-md-3 col-sm-4 footer-section">
          <h2 class="text-white">Channel</h2>
          <div class="text-left">
            <a href="https://facebook.com/AgapeWien" class="rounded-circle social-button">
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
        <div class="col-md-3 col-sm-4 footer-section">
          <h2 class="text-white">KONTAKT</h2>
          <p class="konakt-text">Jederzeit,</p>
          <p class="konakt-text">wir sind 24/7 für Sie da.</p>
          <p class="konakt-text">+43664444444</p>
        </div>
        <div class="col-md-3 col-sm-4 footer-section">
          <h2 class="text-white">ADRESSE</h2>
          <p class="adresse-text">Schlechtastraße 5, 1110 Wien</p>
          <p class="adresse-text">Austria, Europe</p>
        </div>
      </div>
    </div>
    <nav class="navbar-expand-lg dark-grey-bg">
      <div class="navbar">
            <span style="color:#949494">
              <span style="color: white"> Made with
              <i class="fas fa-circle" style="color:#ad1818; font-size:8px;"></i>
              </span>
            </span>
        <ul class="navbar-nav nav-footer">
          <li class="nav-item text-white">
            <a class="nav-link" href="#header">Home</a>
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
  </section>
</template>

<script>
</script>

<style>
  #footer {
    padding-top: 40px;
  }
  #footer h2 {
    text-align: left;
  }
  
  .footer-text {
    padding: 40px 10px;
  }
  
  .footer-text a {
    color: white;
  }
  
  .social-button {
    float: left;
    width: 50px;
    font-size: 30px;
  }
  
  .konakt-text {
    text-align: left;
    color: white;
    margin: 0;
    font-size: 15px;
  }
  
  .adresse-text {
    text-align: left;
    color: white;
    margin: 0;
    font-size: 15px;
  }
  
  .footer-logo {
    width: 140px;
    margin-bottom: 2em;
  }
  
  .footer-section {
    margin-bottom: 3em;
  }
  
  .nav-footer a {
    color: #949494;
  }
  
  @media screen and (max-width: 1000px) {
    .nav-footer {
      display: none;
    }
  }
</style>

