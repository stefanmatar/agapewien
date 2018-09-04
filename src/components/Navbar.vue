<template>
  <div>
    <nav class="navbar fixed-top navbar-light navbar-expand-md bg-white">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navigation"
              aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="navbar-collapse collapse" id="navigation">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Über uns</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Werte</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Live</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pastoren</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Programme</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kontakt</a>
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
  .logo {
    width: 140px;
  }
  .navbar-brand {
    margin: 0;
  }
  .navbar-light .navbar-toggler {
     border: none;
   }
</style>
