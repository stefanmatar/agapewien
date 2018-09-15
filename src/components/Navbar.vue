<template>
  <div>
    <nav class="navbar navbar-expand-md bg-white navbar-light agape-nav">
      <a class="abs" href="#">
        <img src="/static/images/logos/agape_long_dark.png" alt="Agape Wien" class="navbar-logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <nav class="navbar navbar-expand-md bg-white navbar-light sections-nav">
      <div class="navbar-collapse collapse abs" id="collapsingNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#home">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">ÜBER UNS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">LIVE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">SOCIAL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">IMPRESSUM</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
  export default {
    name: 'Toolbar'
  }
</script>

<style>
  @media (min-width: 768px) {
    .abs {
      position: absolute;
      width: 100%;
      left: 0;
      text-align: center;
    }
    .sections-nav {
      margin-top: 80px;
    }
  }
  .sections-nav {
    font-family: Montserrat;
    margin-top: 10px;
    padding-top: 0;
  }
  
  .navbar {
    padding: 1.5rem 4rem;
  }
  
  .agape-nav {
    padding-top: 50px;
  }
  
  .navbar-logo {
    width: 140px;
  }
  
  .navbar-light .navbar-toggler {
    border: none;
  }
  
  
</style>
