<template>
  <section id="header">
    <div class="text-center">
      <h1>Willkommen<span class="red">.</span></h1>
      <p class="header-subtext">
        Gottes Liebe ist für jeden.<br>
        Wir sind hier, um sie mit Dir zu teilen.
      </p>
      <div class="btn btn-light btn-rounded btn-primary">
        Mehr dazu
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
  #header{
    background: url('/static/images/banner/header_new.jpg') no-repeat center center fixed;
    background-size: cover;
    height: calc(100vh - 132px);
  }

  #header .text-center {
    color: white;
    padding-top: 30vh;
  }
</style>
