<template>
  <section id="footer">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <div class="container">
      <div class="footer-text1">
        <div class="row">
          <div class="footer-header col-5">
            <h5>Du hast noch weitere Fragen?</h5>
            <div class="button btn btn-dark btn-sm">
              <i class="fab fa-facebook-square"></i>
            </div>
            <div class="button btn btn-dark btn-sm">
              <i class="fab fa-instagram"></i>
            </div>
            <div class="button btn btn-dark btn-sm">
              <i class="fab fa-twitter-square"></i>
            </div>
          </div>
          <div class="col-3">
            <p class="number text-faded">Sie Wollen uns Kontaktieren? Wir sind jederzeit für sie da! +436641234567</p>
          </div>
          <div class="col-4">
            <p class="adress text-faded">Schlechtastraße 5 1100 Wien, Österreich</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <nav class="toolbar-background navbar-expand-lg">
          <div class="navbar">
            <span style="color:#949494" class="Copyright footer-text2"><i
              class="far fa-copyright"></i> 2018 Copyright.<span class="footer-text2" style="color: white"> Made with <i
              class="fas fa-circle"></i></span></span>
            <ul class="navbar-nav nav-toolbar">
              <li class="nav-item">
                <a style="color:white" class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a style="color:#949494" class="nav-link" href="#">Über uns</a>
              </li>
              <li class="nav-item">
                <a style="color:#949494" class="nav-link" href="#">Werte</a>
              </li>
              <li class="nav-item">
                <a style="color:#949494" class="nav-link" href="#">Live</a>
              </li>
              <li class="nav-item">
                <a style="color:#949494" class="nav-link" href="#">Pastoren</a>
              </li>
              <li class="nav-item">
                <a style="color:#949494" class="nav-link" href="#">Programme</a>
              </li>
              <li class="nav-item">
                <a style="color:#949494" class="nav-link" href="#">Kontakt</a>
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
  
  #footer h5 {
    color: white;
    text-align: left;
    padding-bottom:1em;
  }
  
  #footer p {
    text-align: left;
    color: #949494;
  }
  
  #footer p {
    text-align: left;
    color: #949494;
  }
  
  .fa-copyright {
    color: #949494;
  }
  
  .footer-text1 {
    padding-bottom: 6em;
    padding-left: 3em;
  }
  
  .adress {
    padding-right: 8em;
  }
  
  .fab {
    color: white;
    font-size: 20px;
    float: left;
  }
  
  .footer-header {
    padding-left: 12em;
  }
  
  .Copyright {
    text-align: left;
    padding-left: 8em;
    color: #949494;
  }
  
  .toolbar-background {
    background-color: #0000003c;
  }
  
  .fa-circle {
    color: #ad1818;
    font-size: 6px;
  }
  
  .nav-toolbar {
    font-size: 13px;
    padding-right: 8em;
  }
  
  .footer-text2 {
    font-size: 13px;
  }
  
  .button {
    float: left;
    background-color: #0000003b;
    padding-bottom: 0.41em;
  }
</style>

