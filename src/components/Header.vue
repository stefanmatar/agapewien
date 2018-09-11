<template>
  <section id="header">
    <div class="text-center">
      <h1>Willkommen</h1>
      <p class="paragraph-faded">
        Gottes Liebe ist für jeden. Wir sind hier, um sie zu teilen.
      </p>
      <div class="btn btn-light btn-rounded text-uppercase">
        mehr dazu
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'KnowJesus'
  }
</script>

<style>
  #header {
    background: url('/static/images/header2.jpg') no-repeat fixed center;
    background-size: 100%;
    height: 100vh;
    width: 100%;
  }
  
  .text-center {
    color: white;
    padding-top: 300px;
  }
</style>
