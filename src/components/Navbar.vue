<template>
  <div>
    <nav class="navbar fixed-top navbar-light navbar-expand-md bg-white">
      <a class="navbar-brand" href="#">
        <img src="/static/logo.png" alt="Agape Wien" class="navbar-logo">
      </a>
      <button class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navigation">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
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
</template>

<script>
  export default {
    name: 'Toolbar'
  }
</script>

<style>
  .navbar-logo {
    width: 140px;
    margin-right: 1em;
  }
  
  .navbar-brand {
    margin: 0;
  }
  
  .navbar-light .navbar-toggler {
    border: none;
  }
</style>
